		// TODO test nami ng conflict with fl
const DeckData = require('../assets/DeckData');
const AnalyzerDbService = require('../service/analyzer-db-service');
const _ = require('underscore');
const Promise = require('promise');

class DominionAnalyzer {
	
	parse(gameData) {
		try {
			// gameDataObject
			let gdo = {};

			let gameDataLines = gameData.split("\n");

			let _exports = {};

			// populate gdo.game
			_exports = _.extend(_exports, this.populateGameName(gdo, gameDataLines));

			// make Player objects in gdo.players[]
			_exports = _.extend(_exports, this.populatePlayers(gdo, gameDataLines));

			// look for each player's starting deck data above the turn logs, and populate them into turns[0]
			_exports = _.extend(_exports, this.populateStartingDecks(gdo, gameDataLines));

			// populate turn 1 into turns[1], turn 2 into turns[2] etc. for each player
			_exports = _.extend(_exports, this.populateAllTurnsDecks(gdo, gameDataLines, _exports));

			// populate turn 1 into turns[1], turn 2 into turns[2] etc. for each player
			_exports = _.extend(_exports, this.populateAllTurnsPoints(gdo, _exports));

			// compare our score calculations with those passed in through metadata if available
			_exports = _.extend(_exports, this.checkMetadata(gdo, _exports));

			this.cleanForMongo(gdo);

			// attempt to upload to mongoDB, receive key and add it to the response before resolving
			return new Promise(function(resolve, reject) {
				try {
					AnalyzerDbService.addGame(gameData, gdo)
						.then(
							res => {
								gdo.key = res.ops[0].key;
								resolve(gdo);
							},
							err => {
								gdo.key = "Couldn't save game :(",
								resolve(gdo);
							}
						)
					;
				} catch(e) {
					gdo.key = "Couldn't save game :(",
					resolve(gdo);
				}
			});
		} catch (e) {
			// TODO error handling
			console.log(e);
			return new Promise((resolve, reject) => reject({ ERROR: e }));
		}
	}

	cleanForMongo(gdo) {
		// since we are using the player name as a key, mongo doesn't like periods or dollar signs in keys, 
		// so replace all instances for each player with a clean version

		let cleanStrForMongo = str => str.replace(/\./g, '').replace(/\$/g, '');
		let gdoJson = JSON.stringify(gdo);
		let gdoJsonChanged = false;
		for (let i = 0; i < gdo.players.length; i++) {
			let from = gdo.players[i].name;
			let to = cleanStrForMongo(from);
			if (from !== to) {
				gdoJson = gdoJson.split(from).join(to);
				gdoJsonChanged = true;
			}
		}

		if (gdoJsonChanged) {
			gdo = JSON.parse(gdoJson);
		}
	}

	populateGameName(gdo, gameDataLines) {
		let obeliskPile;
		let startsWith = "Game ";
		for (let i = 0; i < gameDataLines.length; i++) {
			if (gameDataLines[i].startsWith(startsWith)) {
				gdo.game = gameDataLines[i];
				let obeliskLine = gameDataLines[i+1];
				let oStartsWith = "Obelisk chooses the "
				if (obeliskLine.startsWith(oStartsWith)) {
					obeliskPile = this.parseCardStr(obeliskLine.substr(oStartsWith.length-1))[0];
				}
				break;
			}
		}
		return { obeliskPile };
	}

	populatePlayers(gdo, gameDataLines) {
		// search for lines with "Turn 1" and populate players field
		let players = []
		let playerIndex = 0;
		let startsWith = "Turn 1 - ";
		let turn1StartIndex;
		let startsWithBreak = "Turn 2 - ";
		// to get all of the player names, we will look for for all of the "Turn 1 - " log blocks.
		// each player will have one, "Turn 1 - Player 1", "Turn 1 - Player 2" etc.
		// when we get to "Turn 2" we know we've gotten all of the players, so we break the loop.
		for (let i = 0; i < gameDataLines.length; i++) {
			if (gameDataLines[i].startsWith(startsWith)) {
				if (_.isUndefined(turn1StartIndex)) {
					// save this and export it in the return statement, so that populateAllTurnsDecks can know
					// right where to look to start at turn 1
					turn1StartIndex = i;
				}
				let name = gameDataLines[i].substr(startsWith.length).trim();
				players.push({ name });
			} else if (gameDataLines[i].startsWith(startsWithBreak)) {
				break;
			}
		}

		this.getUniqueFlForPlayers(players);

		gdo.players = [];
		gdo.playerNameToIndex = {};
		gdo.playerFlToIndex = {};
		// TODO why doesn't Map get passed to JSON? are the objects above okay?

		gdo.players = players.map((player, i) => {
			return {
				name: player.name,
				fl: player.fl,
				turns: [],
				index: i
			};
		});

		for (let i = 0; i < gdo.players.length; i++) {
			gdo.playerNameToIndex[gdo.players[i].name] = i;
			gdo.playerFlToIndex[gdo.players[i].fl] = i;
		}

		return { turn1StartIndex };
	}

	getUniqueFlForPlayers(players) {
		let isFlUnique = function(fl) {
			let count = 0;
			for (var i = 0; i < players.length; i++) {
				if (players[i].name.startsWith(fl)) {
					count++;
				}
			}
			return count === 1;
		};
		let flIndex = 0;
		while (flIndex === 0 || players.some(player => ! isFlUnique(player.fl))) {
			for (let i = 0; i < players.length; i++) {
				let player = players[i];
				if (flIndex === 0) {
					player.fl = player.name[0];
				} else if (! isFlUnique(player.fl)) {
					player.fl = player.fl + player.name[flIndex];
				}
			}
			flIndex++;
		}
		return players;
	}

	populateStartingDecks(gdo, gameDataLines) {
		// search for 'FirstLetterPlayerName starts with ' for each player and add to deck for turn 0
		let getStartingCards = (player) => {
			let _startsWith = player.fl + " starts with ";	// todo what if same fl????
			for (let i = 1; i < gameDataLines.length; i++) {
				if (gameDataLines[i].startsWith(_startsWith)) {
							let startingCards = gameDataLines[i].substr(_startsWith.length);
					player.turns[0] = new DeckObject(0);
					let startingDeck = this.addToDeck(player, 0, startingCards);
				}
			}
		};
		for (let i = 0; i < gdo.players.length; i++) {
			getStartingCards(gdo.players[i]);
		}
	}

	populateAllTurnsDecks(gdo, gameDataLines, _exports) {
		// starting with "Turn 1" line number, copy previous line number deckObject, look for "(x) gains|trashes" in this turn's actions and adjust deck accordingly
		let activePlayer;
		let turn;

		gdo.landmarks = [];
		
		for (let i = _exports.turn1StartIndex; i < gameDataLines.length; i++) {
			let line = gameDataLines[i];

			console.log(i + ": " + line);

			if (line.indexOf(" looks at ") > -1) {
				continue;
			}

			let checkLine = (regex, callback) => {
				if (line.trim().match(regex)) {
					callback(regex.exec(line));
				}
			};

			// if line starts with "Turn " set active player and turn
			checkLine(/^Turn ([0-9]+) - (.+)/g, (match) => {
				turn = parseInt(match[1]);
				let playerName = match[2].trim();
				let possessionIndexOf = playerName.indexOf(" [Possession]");
				if (possessionIndexOf >= 0) {
					playerName = playerName.substring(0, possessionIndexOf).trim();
				}
				activePlayer = this.findPlayerByName(gdo, playerName);
				if (! activePlayer.turns[turn]) {
					// this is the first player for this turn, copy all player's decks from last turn
					for (var i = 0; i < gdo.players.length; i++) {
						gdo.players[i].turns[turn] = this.copyDeck(gdo.players[i].turns[turn-1], turn)
					}
				}
			});

			// check for any gained cards
			checkLine(/^(^\w+)(?: .*)* gains (.+)/g, (match) => {
				let player = this.findPlayerByFl(gdo, match[1]);
				this.addToDeck(player, turn, match[2]);
			});

			// check for any trashed cards
			checkLine(/^(^\w+)(?: .*)* trashes (.+)/g, (match) => {
				let player = this.findPlayerByFl(gdo, match[1]);
				let cardToTrash = match[2];
				let cardTrashedFromDeck = true;
				if (cardToTrash.indexOf("Gladiator") > -1) {
					// Gladiator has a wierd thing with logging - when you play it you may need to trash a Gladiator
					// from the supply, however this will just be logged as "m trashes a Gladiator" and it will erroneously be removed from the deck
					// to avoid this, check if this is being trashed due to a Gladiator and if so do not remove it from our deck
					let gladiatorActionLine = gameDataLines[i-2];
					/* sample log for Gladiator: 
					Turn 3 - magicjj
					m plays a Gladiator.
					m reveals a Silver.
					m trashes a Gladiator.		// it doesn't say it, but this is trashing from the supply not from deck
					*/
					// we are at the "trashes" line now, gladiatorActionLine goes up 2 lines, where, if this is being trashed by a Gladiator, it will have been played
					if (gladiatorActionLine && gladiatorActionLine.indexOf(player.fl + " plays a Gladiator.") === 0) {
						cardTrashedFromDeck = false;
					}
				}
				if (cardTrashedFromDeck) {
					this.removeFromDeck(player, turn, cardToTrash)
				}
			});

			// check for any earned VP tokens
			checkLine(/^(^\w+)(?: .*)* (takes|gets) (.+)/g, (match) => {
				let player = this.findPlayerByFl(gdo, match[1]);
				let vpMatch = /([0-9]+) VP/g.exec(match[3]);
				if (vpMatch !== null) {
					player.turns[turn].tokens.vp += parseInt(vpMatch[1]);
				}
			});

			// check for metadata passed in through the chrome extension
			// metadata is added from the results tables in the Dominion Online game. automatically added to gamelog with chrome extension
			// we look at these tables to see all the points cards used in the game. Landmarks affect how the scoring is done but are never
			// mentioned in the game log, so we look at each card in metadata and save its info if it is a landmark
			checkLine(/^~metadata~/g, (match) => {
				let nextLine = gameDataLines[i + 1];
				let startsWith = "scoreTables: ";
				if (nextLine.startsWith(startsWith)) {
					let scoreTables;
					try {
						scoreTables = JSON.parse(nextLine.substr(startsWith.length));
					} catch(e) {
					}
					if (!_.isUndefined(scoreTables)) {
						gdo.scoreTables = scoreTables;
						let allScoreCardsSet = new Set();
						for (var playerIndex = 0; playerIndex < scoreTables.length; playerIndex++) {
							for (let i = 0; i < scoreTables[playerIndex].scoreTable.length; i++) {
								let scoreTableRow = scoreTables[playerIndex].scoreTable[i];
								allScoreCardsSet.add(scoreTableRow[0]);
							}
						}
						let allScoreCardArr = Array.from(allScoreCardsSet);
						for (let i = 0; i < allScoreCardArr.length; i++) {
							if (allScoreCardArr[i].trim() === "") {
								continue;
							}
							let scoreCard = DeckData[allScoreCardArr[i]];
							if (scoreCard.type[0] === 'Landmark') {
								gdo.landmarks.push(scoreCard)
							}
						}
					}
				}
			});

			// TODO add checkLine for Obelisk

			// TODO stop adding to log after "~metadata~" line 0
			activePlayer.turns[turn].log += line + "\n";
		}

		return { numTurns: turn, landmarks: gdo.landmarks };
	}

	populateAllTurnsPoints(gdo, _exports) {
		// calculate victoryPoints and numCards for each turn for each player
		// TODO should this be <
		for (let i = 0; i <= _exports.numTurns; i++) {
			for (let playerName in gdo.playerNameToIndex) {
				console.log("TURN " + i + " FOR " + playerName + " **************");
				let player = gdo.players[gdo.playerNameToIndex[playerName]];
				let playerTurn = player.turns[i];

				// get otherDecks - an array of the deck object for all other players for this turn
				let otherDecks = Object.keys(gdo.playerNameToIndex);
				// exclude self with the splice below
				otherDecks.splice(otherDecks.indexOf(playerName), 1);
				// map playerName to their deck for this turn
				/* TODO why isn't map working??
				otherDecks = otherDecks.map(opponentName => {
					let opponent = gdo.players[gdo.playerNameToIndex[opponentName]];
					return opponent.turns[i];
				});*/
				for (let j = 0; j < otherDecks.length; j++) {
					otherDecks[j] = gdo.players[gdo.playerNameToIndex[otherDecks[j]]].turns[i];
				}
				let scoreTable;
				if (gdo.scoreTables) {
					for (let j = 0; j < gdo.scoreTables.length; j++) {
						if (gdo.scoreTables[j].name === playerName) {
							scoreTable = gdo.scoreTables[j].scoreTable;
							break;
						}
					}
				}

				// get moreData ready for countPoints()
				let moreData = { otherDecks, obeliskPile: _exports.obeliskPile, landmarks: _exports.landmarks, scoreTable, isFinalTurn: i === _exports.numTurns };

				if (! playerTurn) {
					// this can't happen anymore - means an error
					playerTurn = this.deepCopy(player.turns[i-1]);
					player.turns[i] = playerTurn;
				} else {
					playerTurn.numCards = this.countCards(playerTurn.cards);
					playerTurn.points = this.countPoints(playerTurn.cards, moreData);
					playerTurn.landmarkPoints = this.countLandmarkPoints(playerTurn.cards, moreData);
					playerTurn.totalPoints = this.deepCopy(playerTurn.points);
					
					let tokenPointsToAdd = playerTurn.tokens && playerTurn.tokens.vp ? playerTurn.tokens.vp : 0;
					let landmarkPointsToAdd = playerTurn.landmarkPoints && playerTurn.landmarkPoints.vp ? playerTurn.landmarkPoints.vp : 0;
					console.log("VP Tokens:  totalPoints[vp] = " + playerTurn.totalPoints.vp + " + " + tokenPointsToAdd + " = " + (playerTurn.totalPoints.vp + tokenPointsToAdd));
					playerTurn.totalPoints.vp += tokenPointsToAdd;
					console.log("Landmark VP:  totalPoints[vp] = " + playerTurn.totalPoints.vp + " + " + landmarkPointsToAdd + " = " + (playerTurn.totalPoints.vp + landmarkPointsToAdd));
					playerTurn.totalPoints.vp += landmarkPointsToAdd;
				}
			}
		}
	}

	checkMetadata(gdo, _exports) {
		if (! gdo.scoreTables) {
			return;
		}

		let finalScoresFromMetadata = {};
		let allCardsFound = true;
		for (let i = 0; i < gdo.scoreTables.length; i++) {
			finalScoresFromMetadata[gdo.scoreTables[i].name] = {
				landmarkPoints: {
					vp: 0
				},
				tokens: {
					vp: 0
				},
				points: {
					vp: 0
				}
			};
			for (let j = 0; j < gdo.scoreTables[i].scoreTable.length; j++) {
				let line = gdo.scoreTables[i].scoreTable[j];
				let card;
				if (DeckData[line[0]] && DeckData[line[0]].type) {
					card = DeckData[line[0]];
				}
				if (line[0] === "" && line[3].indexOf("tokens") > -1) {
					finalScoresFromMetadata[gdo.scoreTables[i].name].tokens.vp += parseInt(line[2]);
				} else if (card.type.indexOf("Victory") > -1) {
					finalScoresFromMetadata[gdo.scoreTables[i].name].points.vp += parseInt(line[2]);
				} else if (card.type.indexOf("Landmark") > -1) {
					finalScoresFromMetadata[gdo.scoreTables[i].name].landmarkPoints.vp += parseInt(line[2]);
				} else {
					allCardsFound = false;
					break;
				}
			}
		}

		if (! allCardsFound) {
			// do some other logging here. but we don't want to return the finalScores object bc it'll trigger
			// a popup on the front end saying the results are inaccurate, and we only know that for sure if we found every card
			return;
		}
		
		// go through the scores gathered from the metadata, and if they differ from what we calculated on the final turn
		// add them to the return object so we can warn the user the results may be a little off
		for (let i = 0; i < gdo.players.length; i++) {
			let finalTurn = gdo.players[i].turns[gdo.players[i].turns.length-1];
			let finalScoreFromMetadata = finalScoresFromMetadata[gdo.players[i].name];
			if ((finalTurn.points.vp ? finalTurn.points.vp : 0) !== finalScoreFromMetadata.points.vp || 
				(finalTurn.landmarkPoints.vp ? finalTurn.landmarkPoints.vp : 0) !== finalScoreFromMetadata.landmarkPoints.vp || 
				(finalTurn.tokens.vp ? finalTurn.tokens.vp : 0) !== finalScoreFromMetadata.tokens.vp
			) {
				gdo.finalScoresFromMetadata = finalScoresFromMetadata;
				break;
			}
		}
	}

	countCards(deck) {
		let totalCardsCount = 0;
		for (let typeKey in deck) {
			for (let cardKey in deck[typeKey]) {
				let card = deck[typeKey][cardKey];
				totalCardsCount += card.count;
			}
		}
		return totalCardsCount;
	}

	countPoints(deck, moreData) {
		let points = {};
		for (let typeKey in deck) {
			for (let cardKey in deck[typeKey]) {
				let card = deck[typeKey][cardKey];
				let cardData = DeckData[card.name];
				let pointsChange;
				if (! cardData) {
					console.log("Missing card! " + card.name);
					pointsChange = {};
				} else {
					let pointsChangeFn = cardData.pointsChangeFn;
					pointsChange = typeof pointsChangeFn === 'function' ? pointsChangeFn(deck, moreData) : {};
				}
				for (let pointType in pointsChange) {
					if (! points[pointType]) {
						points[pointType] = 0;
					}
					console.log(card.name + ":  points["+pointType+"] += " + pointsChange[pointType] + " * " + card.count);
					points[pointType] += pointsChange[pointType] * card.count;
				}
			}
		}
		return points;
	}

	countLandmarkPoints(deck, moreData) {
		let points = {};
		for (let landmarkKey in moreData.landmarks) {
			let landmark = moreData.landmarks[landmarkKey];
			let pointsChange = {};
			if (landmark.pointsChangeFn) {
				pointsChange = typeof landmark.pointsChangeFn === 'function' ? landmark.pointsChangeFn(deck, moreData) : {};
			}
			for (let pointType in pointsChange) {
				if (! points[pointType]) {
					points[pointType] = 0;
				}
				points[pointType] += pointsChange[pointType];
			}
			console.log("landmark " + landmark.name)
			console.log(pointsChange);
		}
		return points;
	}

	addToDeck(player, deckIndex, cardStr) {
		return this.addRemoveFromDeck('a', player, deckIndex, cardStr);
	}

	removeFromDeck(player, deckIndex, cardStr) {
		return this.addRemoveFromDeck('r', player, deckIndex, cardStr);
	}

	addRemoveFromDeck(addOrRemove, player, deckIndex, cardStr) {
		let deck = player.turns[deckIndex].cards;
		let mult;
		if (addOrRemove === 'a') {
			mult = 1;	// positive mult for add
		} else {
			mult = -1;	// negative for remove
		}
		let cards = this.parseCardStr(cardStr);
		for (let i = 0; i < cards.length; i++) {
			let card = cards[i];
			if (! deck[card.type[0]]) {
				deck [card.type[0]] = {};
			}
			if (deck[card.type[0]][card.name]) {
				deck[card.type[0]][card.name].count += 1 * mult;
			} else {
				let cardData = DeckData[card.name] ? this.deepCopy(DeckData[card.name]) : false;
				if (! cardData) {
					console.log("MISSING CARD: " + card.name);
					cardData = { name: card.name, type: ["ERROR"] };
				}
				cardData.count = mult ? 1 : 0;
				deck[card.type[0]][card.name] = cardData;
			}
		}
		return deck;
	}

	parseCardStr(cardStr) {
		// strip out word "and " and any punctuation
		cardStr = cardStr.replace(/\ba |\ban |\bpile\b|\./g, '');

		let cardStrArr = cardStr.split(/,|\band /g).map(x => x.trim());
		let ret = [];
		for (let i = 0; i < cardStrArr.length; i++) {
			let count = 1;
			let cardName = cardStrArr[i];

			let regex = /^([0-9]+) (.+)$/g
			if (cardStrArr[i].match(regex)) {
				let match = regex.exec(cardStrArr[i]);
				count = parseInt(match[1]);
				cardName = match[2];
			}

			let ontoIndexOf = cardName.indexOf(" onto ");
			if (ontoIndexOf > -1) {
				// ignore things like "x gains 4 Gold onto their deck" - trim the onto part
				cardName = cardName.substr(0, ontoIndexOf)
			}

			let card = this.getCardData(cardName);
			while (count--) {
				ret.push(card);
			}
		}
		return ret;
	}

	getCardData(str) {
		let ret;
		str = str.trim();
		// check Farmers' Market and King's  Castle
		// multiple oasis? Sir Bailey?
		if (str.endsWith("ies")) {
			//duchies
			ret = this.getCardData(str.slice(0,-3) + "y");
			if (ret.type[0] !== 'NOTFOUND') {
				return ret;
			}
		}
		if (str.endsWith("es")) {
			//witches make sure bridges still works, check horn of plenty
			ret = this.getCardData(str.slice(0,-2));
			if (ret.type[0] !== 'NOTFOUND') {
				return ret;
			}
		}
		if (str.endsWith("s")) {
			ret = this.getCardData(str.slice(0,-1));
			if (ret.type[0] !== 'NOTFOUND') {
				return ret;
			}
		}

		return DeckData[str] ? DeckData[str] : {
			name: str,
			type: ['NOTFOUND']
		};
	}

	findPlayerByName(gdo, name) {
		return gdo.players[gdo.playerNameToIndex[name]];
	}

	findPlayerByFl(gdo, fl) {
		return gdo.players[gdo.playerFlToIndex[fl]];
	}

	copyDeck(deck, index) {
		let ret = new DeckObject(index);
		ret.points = {};	// this will be recalculated from scratch each time - no need to copy
		ret.tokens = this.deepCopy(deck.tokens);	// tokens on the other hand will be carried from hand to hand
		ret.numCards = deck.numCards;
		for (let key in deck.cards) {
			ret.cards[key] = this.deepCopy(deck.cards[key]);
		}
		return ret;
	}

	deepCopy(o) {
		return JSON.parse(JSON.stringify(o));
	}
}

function DeckObject(index) {
	return {
		index: index,
		points: {
			vp: 0
		},
		tokens: {
			vp: 0
		},
		numCards: 0,
		cards: {
		},
		log: ''
	};
}

module.exports = new DominionAnalyzer();



// gameDataObject
/*
// could save hand for each turn in future
{
	game: "Game #1231232, unrated", 
	playerNameToIndex
playerFlToIndex
	players: [	// playerObject
		{
			name: "magicjj",
			turns: [  // deckObject
					{
						victory: {
							estate: 2,
							duchy: 1,
							province: 1,
							curse: 1,
							total: 2	// total with tokens
						},
						attack: {
							x: 1
						}
						treasure: {
							copper: 1,
							gold: 2,
							sivler: 4
						}
					}
				]
			]

		}
	]
		
}



cardDataObject
{
	name: "Smithy",
	type: 'a|v|t',
	subtype: "or", //offensive reactive
}

*/