// TODO test naming conflict with fl


var _ = require('underscore');

function DominionAnalyzer() {
	this.parse = function(gameData) {
		// gameDataObject
		 var gdo = {}; //todo private var

		var gameDataLines = gameData.split("\n");

		// populate first line in game field
		gdo.game = gameDataLines[0];	// todo find index

		// search for lines with "Turn 1" and populate players field
		gdo.players = [];
		gdo.playerNameToIndex = {};
		gdo.playerFlToIndex = {};	// TODO why doesn't Map get passed to JSON? is this okay?
		var playerIndex = 0;
		var startsWith = "Turn 1 - ";
		var turn1StartIndex;
		var startsWithBreak = "Turn 2 - ";
		for (var i = 1; i < gameDataLines.length; i++) {
			if (gameDataLines[i].startsWith(startsWith)) {
				if (_.isUndefined(turn1StartIndex)) {
					turn1StartIndex = i;
				}
				var name = gameDataLines[i].substr(startsWith.length).trim();
				gdo.players.push({
					name: name,
					fl: name[0],
					turns: []
				});
				gdo.playerNameToIndex[name] = playerIndex;
				gdo.playerFlToIndex[name[0]] = playerIndex;
				playerIndex++;
			} else if (gameDataLines[i].startsWith(startsWithBreak)) {
				break;
			}
		}

		// search for 'FirstLetterPlayerName starts with ' for each and add to deck for turn 0
		var getStartingCards = function(player) {
			var _startsWith = player.fl + " starts with ";	// todo what if same fl????
			for (var i = 1; i < gameDataLines.length; i++) {
				if (gameDataLines[i].startsWith(_startsWith)) {
					var startingCards = gameDataLines[i].substr(_startsWith.length);
					player.turns[0] = new DeckObject();
					var startingDeck = addToDeck(player, 0, startingCards);
				}
			}
		}
		for (var i = 0; i < gdo.players.length; i++) {
			getStartingCards(gdo.players[i]);
		}

		// starting with "Turn 1" line number, copy previous line number deckObject, look for "(x) gains|trashes" in this turn's actions and , adjust deck accordingly, TODO also check VP
		startsWith = "Turn ";
		var activePlayer;
		var turn;
		for (var i = turn1StartIndex; i < gameDataLines.length; i++) {
			var line = gameDataLines[i];
			var regex;
			var match; 

			// if line starts with "Turn " set active player and turn
			regex = /Turn ([0-9]+) - (.+)/g;
			if (line.match(regex)) {	// todo just match regex?
				match = regex.exec(line);
				turn = parseInt(match[1]);
				// todo possession
				var playerName = match[2].trim();
				var possessionIndexOf = playerName.indexOf(" [Possession]");
				if (possessionIndexOf >= 0) {
					playerName = playerName.substring(0, possessionIndexOf-1).trim();
				}
				activePlayer = findPlayerByName(gdo, playerName);	//gdo.players[gdo.playerNameToIndex.get(match[2])];
				if (! activePlayer.turns[turn]) {
					activePlayer.turns[turn] = copyDeck(activePlayer.turns[turn-1]);
				}
			}

			regex = /(.) .* gains (.+)/g;
			if (line.match(regex)) {
				match = regex.exec(line);
				var player = findPlayerByFl(gdo, match[1]);
				if (! player.turns[turn]) {
					player.turns[turn] = {};
				}
				addToDeck(player, turn, match[2]);
			}

			regex = /(.) .* trashes (.+)/g;
			if (line.match(regex)) {
				match = regex.exec(line);
				var player = findPlayerByFl(gdo, match[1]);
				if (! player.turns[turn]) {
					player.turns[turn] = {};
				}
				removeFromDeck(player, turn, match[2])
			}
		}

		return gdo;
	}

	var addToDeck = function(player, deckIndex, cardStr) {
		return addRemoveFromDeck('a', player, deckIndex, cardStr);
	};

	var removeFromDeck = function(player, deckIndex, cardStr) {
		return addRemoveFromDeck('r', player, deckIndex, cardStr);
	};

	var addRemoveFromDeck = function(addOrRemove, player, deckIndex, cardStr) {
		var deck = player.turns[deckIndex];
		var mult;
		if (addOrRemove === 'a') {
			mult = 1;	// positive mult for add
		} else {
			mult = -1;	// negative for remove
		}
		var cards = parseCardStr(cardStr);
		for (var i = 0; i < cards.length; i++) {
			var card = cards[i];
			if (! deck[card.type]) {
				deck [card.type] = {};
			}
			if (deck[card.type][card.name]) {
				deck[card.type][card.name] += 1 * mult;
			} else {
				deck[card.type][card.name] = mult ? 1 : 0;
			}
		}
		return deck;
	}

	var parseCardStr = function(cardStr) {
		// strip out word "and " and any punctuation
		cardStr = cardStr.replace(/and |a |,|\./g, '');

		var cardStrArr = cardStr.split(" ");
		var ret = [];
		for (var i = 0; i < cardStrArr.length; i++) {
			var count = 1;

			regex = /^[0-9]+$/g
			if (cardStrArr[i].match(regex)) {
				count = parseInt(cardStrArr[i]);
				i++;
			}
			var card = getCardData(cardStrArr[i]);
			while (count--) {
				ret.push(card);
			}
		}
		return ret;
	};

	var getCardData = function(str) {
		var ret;
		str = str.trim();
		if (str.endsWith("s")) {
			ret = getCardData(str.slice(0,-1));
			if (ret) {
				return ret;
			}
		}

		return exports.deckData[str] ? exports.deckData[str] : exports.deckData.ERROR;
	};

	var findPlayerByName = function(gdo, name) {
		return gdo.players[gdo.playerNameToIndex[name]];
	};

	var findPlayerByFl = function(gdo, fl) {
		return gdo.players[gdo.playerFlToIndex[fl]];
	};

	var copyDeck = function(deck) {
		var ret = new DeckObject();
		for (var key in deck) {
			if (key === 'totalPoints') {
				continue;
			}
			ret[key] = deepCopy(deck[key]);
		}
		return ret;
	};

	var deepCopy = function(o) {
		return JSON.parse(JSON.stringify(o));
	};

	return this;
}

function DeckObject() {
	return {
		totalPoints: 0,	// todo track VP - including "gains VP"
		v: {},
		a: {},
		t: {},
		c: {}
	};
}

exports.deckData = {
	"Smithy": {
		name: "Smithy",
		type: 'a'
	},
	"Crown": {
		name: "Crown",
		type: 'a'
	},
	"Moneylender": {
		name: "Moneylender",
		type: 'a'
	},
	"Village": {
		name: "Village",
		type: 'a'
	},
	"Chapel": {
		name: "Chapel",
		type: 'a'
	},
	"Legionary": {
		name: "Legionary",
		type: 'a'
	},
	"Chapel": {
		name: "Chapel",
		type: 'a'
	},
	"Laboratory": {
		name: "Laboratory",
		type: 'a'
	},
	"Estate": {
		name: "Estate",
		type: 'v'
	},
	"Province": {
		name: "Province",
		type: 'v'
	},
	"Duchy": {
		name: "Duchy",
		type: 'v'
	},
	"Gardens": {
		name: "Gardens",
		type: 'v'
	},
	"Curse": {
		name: "Curse",
		type: 'c'
	},
	"Copper": {
		name: "Copper",
		type: 't'
	},
	"Gold": {
		name: "Gold",
		type: 't'
	},
	"Silver": {
		name: "Silver",
		type: 't'
	},
	"Platinum": {
		name: "Platinum",
		type: 't'
	},
	"ERROR": {
		name: "ERROR",
		type: 'E'
	}
};

exports.instance = new DominionAnalyzer();



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