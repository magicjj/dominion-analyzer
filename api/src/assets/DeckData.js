// todo fix types

let DeckData = {
	"Estate": {
		name: "Estate", 
		type: ["Victory"],
		pointsChangeFn: function(deck) { return {vp: 1}; }
	},
	"Copper": {
		name: "Copper",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Curse": {
		name: "Curse",
		type: ["Victory"],
		pointsChangeFn: function(deck) { return {vp: -1}; }
	},
	"Silver": {
		name: "Silver",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Duchy": {
		name: "Duchy",
		type: ["Victory"],
		pointsChangeFn: function(deck) { return {vp: 3}; }
	},
	"Gold": {
		name: "Gold",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Province": {
		name: "Province",
		type: ["Victory"],
		pointsChangeFn: function(deck) { return {vp: 6}; }
	},
	"Cellar": {
		name: "Cellar",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Chapel": {
		name: "Chapel",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Moat": {
		name: "Moat",
		type: ["Action","Reaction"],
		pointsChangeFn: null
	},
	"Harbinger": {
		name: "Harbinger",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Merchant": {
		name: "Merchant",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Vassal": {
		name: "Vassal",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Village": {
		name: "Village",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Workshop": {
		name: "Workshop",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Bureaucrat": {
		name: "Bureaucrat",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Gardens": {
		name: "Gardens",
		type: ["Victory"],
		pointsChangeFn: function(deck) {
			var totalCardsCount = 0;
			for (var typeKey in deck) {
				for (var cardKey in deck[typeKey]) {
					var card = deck[typeKey][cardKey];
					totalCardsCount += card.count;
				}
			}

			return { vp: Math.floor(totalCardsCount / 10) };
		}
	},
	"Militia": {
		name: "Militia",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Moneylender": {
		name: "Moneylender",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Poacher": {
		name: "Poacher",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Remodel": {
		name: "Remodel",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Smithy": {
		name: "Smithy",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Throne Room": {
		name: "Throne Room",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Bandit": {
		name: "Bandit",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Council Room": {
		name: "Council Room",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Festival": {
		name: "Festival",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Laboratory": {
		name: "Laboratory",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Library": {
		name: "Library",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Market": {
		name: "Market",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Mine": {
		name: "Mine",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Sentry": {
		name: "Sentry",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Witch": {
		name: "Witch",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Artisan": {
		name: "Artisan",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Courtyard": {
		name: "Courtyard",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Lurker": {
		name: "Lurker",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Pawn": {
		name: "Pawn",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Masquerade": {
		name: "Masquerade",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Shanty Town": {
		name: "Shanty Town",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Steward": {
		name: "Steward",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Swindler": {
		name: "Swindler",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Wishing Well": {
		name: "Wishing Well",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Baron": {
		name: "Baron",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Bridge": {
		name: "Bridge",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Conspirator": {
		name: "Conspirator",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Diplomat": {
		name: "Diplomat",
		type: ["Action","Reaction"],
		pointsChangeFn: null
	},
	"Ironworks": {
		name: "Ironworks",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Mill": {
		name: "Mill",
		type: ["Action","Victory"],
		pointsChangeFn: function(deck) { return {vp: 1}; }
	},
	"Mining Village": {
		name: "Mining Village",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Secret Passage": {
		name: "Secret Passage",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Courtier": {
		name: "Courtier",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Duke": {
		name: "Duke",
		type: ["Victory"],
		pointsChangeFn: function(deck) {return { vp: (deck['Victory'] && deck['Victory']['Duchy'] ? deck['Victory']['Duchy'].count : 0) };}
	},
	"Minion": {
		name: "Minion",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Patrol": {
		name: "Patrol",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Replace": {
		name: "Replace",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Torturer": {
		name: "Torturer",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Trading Post": {
		name: "Trading Post",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Upgrade": {
		name: "Upgrade",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Harem": {
		name: "Harem",
		type: ["Treasure","Victory"],
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Nobles": {
		name: "Nobles",
		type: ["Action","Victory"],
		pointsChangeFn: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Embargo": {
		name: "Embargo",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Haven": {
		name: "Haven",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Lighthouse": {
		name: "Lighthouse",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Native Village": {
		name: "Native Village",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Pearl Diver": {
		name: "Pearl Diver",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Ambassador": {
		name: "Ambassador",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Fishing Village": {
		name: "Fishing Village",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Lookout": {
		name: "Lookout",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Smugglers": {
		name: "Smugglers",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Warehouse": {
		name: "Warehouse",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Caravan": {
		name: "Caravan",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Cutpurse": {
		name: "Cutpurse",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Island": {
		name: "Island",
		type: ["Action","Victory"],
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Navigator": {
		name: "Navigator",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Pirate Ship": {
		name: "Pirate Ship",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Salvager": {
		name: "Salvager",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Sea Hag": {
		name: "Sea Hag",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Treasure Map": {
		name: "Treasure Map",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Bazaar": {
		name: "Bazaar",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Explorer": {
		name: "Explorer",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Ghost Ship": {
		name: "Ghost Ship",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Merchant Ship": {
		name: "Merchant Ship",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Outpost": {
		name: "Outpost",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Tactician": {
		name: "Tactician",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Treasury": {
		name: "Treasury",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Wharf": {
		name: "Wharf",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Potion": {
		name: "Potion",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Transmute": {
		name: "Transmute",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Vineyard": {
		name: "Vineyard",
		type: ["Victory"],
		pointsChangeFn: function(deck) {
			var actionCardsCount = 0;
			for (var cardKey in deck['Action']) {
				var card = deck['Action'][cardKey];
				actionCardsCount += card.count;
			}

			return { vp: Math.floor(actionCardsCount / 3) };
		}
	},
	"Herbalist": {
		name: "Herbalist",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Apothecary": {
		name: "Apothecary",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Scrying Pool": {
		name: "Scrying Pool",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"University": {
		name: "University",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Alchemist": {
		name: "Alchemist",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Familiar": {
		name: "Familiar",
		type: ["Action","Attack"],
		pointsChangeFn: null
	},
	"Golem": {
		name: "Golem",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Apprentice": {
		name: "Apprentice",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Possession": {
		name: "Possession",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Platinum": {
		name: "Platinum",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Colony": {
		name: "Colony",
		type: ["Victory"],
		pointsChangeFn: function(deck) { return {vp: 10}; }
	},
	"Loan": {
		name: "Loan",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Trade Route": {
		name: "Trade Route",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Watchtower": {
		name: "Watchtower",
		type: ["Action","Reaction"],
		pointsChangeFn: null
	},
	"Bishop": {
		name: "Bishop",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Monument": {
		name: "Monument",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Quarry": {
		name: "Quarry",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Talisman": {
		name: "Talisman",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"City": {
		name: "City",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Contraband": {
		name: "Contraband",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Counting House": {
		name: "Counting House",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Mint": {
		name: "Mint",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Mountebank": {
		name: "Mountebank",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Rabble": {
		name: "Rabble",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Royal Seal": {
		name: "Royal Seal",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Vault": {
		name: "Vault",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Venture": {
		name: "Venture",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Goons": {
		name: "Goons",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Grand Market": {
		name: "Grand Market",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Hoard": {
		name: "Hoard",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Bank": {
		name: "Bank",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Expand": {
		name: "Expand",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Forge": {
		name: "Forge",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Peddler": {
		name: "Peddler",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Hamlet": {
		name: "Hamlet",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Fortune Teller": {
		name: "Fortune Teller",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Menagerie": {
		name: "Menagerie",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Farming Village": {
		name: "Farming Village",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Horse Traders": {
		name: "Horse Traders",
		type: ["Action","Reaction"],
		pointsChangeFn: null
	},
	"Remake": {
		name: "Remake",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Tournament": {
		name: "Tournament",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Young Witch": {
		name: "Young Witch",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Harvest": {
		name: "Harvest",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Horn of Plenty": {
		name: "Horn of Plenty",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Hunting Party": {
		name: "Hunting Party",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Jester": {
		name: "Jester",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Fairgrounds": {
		name: "Fairgrounds",
		type: ["Victory"],
		pointsChangeFn: function(deck) {
			var uniqueNamesCount = 0;
			for (var typeKey in deck) {
				uniqueNamesCount += Object.keys(deck[typeKey]).length;
			}

			return { vp: Math.floor(uniqueNamesCount / 5) };
		}
	},
	"Bag of Gold": {
		name: "Bag of Gold",
		type: ["Action","Prize"],
		pointsChangeFn: null
	},
	"Diadem": {
		name: "Diadem",
		type: ["Treasure","Prize"],
		pointsChangeFn: null
	},
	"Followers": {
		name: "Followers",
		type: ["Attack","Prize"],
		pointsChangeFn: null
	},
	"Princess": {
		name: "Princess",
		type: ["Action","Prize"],
		pointsChangeFn: null
	},
	"Trusty Steed": {
		name: "Trusty Steed",
		type: ["Action","Prize"],
		pointsChangeFn: null
	},
	"Crossroads": {
		name: "Crossroads",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Duchess": {
		name: "Duchess",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Develop": {
		name: "Develop",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Oasis": {
		name: "Oasis",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Oracle": {
		name: "Oracle",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Scheme": {
		name: "Scheme",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Tunnel": {
		name: "Tunnel",
		type: ["Victory","Reaction"],
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Jack of all Trades": {
		name: "Jack of all Trades",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Noble Brigand": {
		name: "Noble Brigand",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Nomad Camp": {
		name: "Nomad Camp",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Silk Road": {
		name: "Silk Road",
		type: ["Victory"],
		pointsChangeFn: function(deck) {
			var victoryCardsCount = 0;
			for (var cardKey in deck['Victory']) {
				var card = deck['Victory'][cardKey];
				victoryCardsCount += card.count;
			}

			return { vp: Math.floor(victoryCardsCount / 4) };
		}
	},
	"Spice Merchant": {
		name: "Spice Merchant",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Trader": {
		name: "Trader",
		type: ["Action","Reaction"],
		pointsChangeFn: null
	},
	"Cache": {
		name: "Cache",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Cartographer": {
		name: "Cartographer",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Embassy": {
		name: "Embassy",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Haggler": {
		name: "Haggler",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Highway": {
		name: "Highway",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Ill Gotten Gains": {
		name: "Ill Gotten Gains",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Inn": {
		name: "Inn",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Mandarin": {
		name: "Mandarin",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Margrave": {
		name: "Margrave",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Stables": {
		name: "Stables",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Border Village": {
		name: "Border Village",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Farmland": {
		name: "Farmland",
		type: ["Victory"],
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Abandoned Mine": {
		name: "Abandoned Mine",
		type: ["Action","Ruins"],
		pointsChangeFn: null
	},
	"Ruined Library": {
		name: "Ruined Library",
		type: ["Action","Ruins"],
		pointsChangeFn: null
	},
	"Ruined Market": {
		name: "Ruined Market",
		type: ["Action","Ruins"],
		pointsChangeFn: null
	},
	"Ruined Village": {
		name: "Ruined Village",
		type: ["Action","Ruins"],
		pointsChangeFn: null
	},
	"Survivors": {
		name: "Survivors",
		type: ["Action","Ruins"],
		pointsChangeFn: null
	},
	"Poor House": {
		name: "Poor House",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Beggar": {
		name: "Beggar",
		type: ["Action","Reaction"],
		pointsChangeFn: null
	},
	"Squire": {
		name: "Squire",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Vagrant": {
		name: "Vagrant",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Forager": {
		name: "Forager",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Hermit": {
		name: "Hermit",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Market Square": {
		name: "Market Square",
		type: ["Action","Reaction"],
		pointsChangeFn: null
	},
	"Sage": {
		name: "Sage",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Storeroom": {
		name: "Storeroom",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Urchin": {
		name: "Urchin",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Armory": {
		name: "Armory",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Death Cart": {
		name: "Death Cart",
		type: ["Action","Looter"],
		pointsChangeFn: null
	},
	"Feodum": {
		name: "Feodum",
		type: ["Victory"],
		pointsChangeFn: function(deck) {return { vp: Math.floor(deck['Treasure']['Silver'] / 3) };}
	},
	"Fortress": {
		name: "Fortress",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Ironmonger": {
		name: "Ironmonger",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Marauder": {
		name: "Marauder",
		type: ["Attack","Looter"],
		pointsChangeFn: null
	},
	"Procession": {
		name: "Procession",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Rats": {
		name: "Rats",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Scavenger": {
		name: "Scavenger",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Wandering Minstrel": {
		name: "Wandering Minstrel",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Band of Misfits": {
		name: "Band of Misfits",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Bandit Camp": {
		name: "Bandit Camp",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Catacombs": {
		name: "Catacombs",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Count": {
		name: "Count",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Counterfeit": {
		name: "Counterfeit",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Cultist": {
		name: "Cultist",
		type: ["Attack","Looter"],
		pointsChangeFn: null
	},
	"Graverobber": {
		name: "Graverobber",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Junk Dealer": {
		name: "Junk Dealer",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Knights": {
		name: "Knights",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Mystic": {
		name: "Mystic",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Pillage": {
		name: "Pillage",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Rebuild": {
		name: "Rebuild",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Rogue": {
		name: "Rogue",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Altar": {
		name: "Altar",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Hunting Grounds": {
		name: "Hunting Grounds",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Dame Anna": {
		name: "Dame Anna",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Dame Josephine": {
		name: "Dame Josephine",
		type: ["Attack","Knight","Victory"],
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Dame Molly": {
		name: "Dame Molly",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Dame Natalie": {
		name: "Dame Natalie",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Dame Sylvia": {
		name: "Dame Sylvia",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Sir Bailey": {
		name: "Sir Bailey",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Sir Destry": {
		name: "Sir Destry",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Sir Martin": {
		name: "Sir Martin",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Sir Michael": {
		name: "Sir Michael",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Sir Vander": {
		name: "Sir Vander",
		type: ["Attack","Knight"],
		pointsChangeFn: null
	},
	"Madman": {
		name: "Madman",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Mercenary": {
		name: "Mercenary",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Spoils": {
		name: "Spoils",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Hovel": {
		name: "Hovel",
		type: ["Reaction","Shelter"],
		pointsChangeFn: null
	},
	"Necropolis": {
		name: "Necropolis",
		type: ["Action","Shelter"],
		pointsChangeFn: null
	},
	"Overgrown Estate": {
		name: "Overgrown Estate",
		type: ["Victory","Shelter"],
		pointsChangeFn: null
	},
	"Candlestick Maker": {
		name: "Candlestick Maker",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Stonemason": {
		name: "Stonemason",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Doctor": {
		name: "Doctor",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Masterpiece": {
		name: "Masterpiece",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Advisor": {
		name: "Advisor",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Plaza": {
		name: "Plaza",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Taxman": {
		name: "Taxman",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Herald": {
		name: "Herald",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Baker": {
		name: "Baker",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Butcher": {
		name: "Butcher",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Journeyman": {
		name: "Journeyman",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Merchant Guild": {
		name: "Merchant Guild",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Soothsayer": {
		name: "Soothsayer",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Coin of the Realm": {
		name: "Coin of the Realm",
		type: ["Treasure","Reserve"],
		pointsChangeFn: null
	},
	"Page": {
		name: "Page",
		type: ["Action","Traveller"],
		pointsChangeFn: null
	},
	"Peasant": {
		name: "Peasant",
		type: ["Action","Traveller"],
		pointsChangeFn: null
	},
	"Ratcatcher": {
		name: "Ratcatcher",
		type: ["Action","Reserve"],
		pointsChangeFn: null
	},
	"Raze": {
		name: "Raze",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Amulet": {
		name: "Amulet",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Caravan Guard": {
		name: "Caravan Guard",
		type: ["Action","Duration","Reaction"],
		pointsChangeFn: null
	},
	"Dungeon": {
		name: "Dungeon",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Gear": {
		name: "Gear",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Guide": {
		name: "Guide",
		type: ["Action","Reserve"],
		pointsChangeFn: null
	},
	"Duplicate": {
		name: "Duplicate",
		type: ["Action","Reserve"],
		pointsChangeFn: null
	},
	"Magpie": {
		name: "Magpie",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Messenger": {
		name: "Messenger",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Miser": {
		name: "Miser",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Port": {
		name: "Port",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Ranger": {
		name: "Ranger",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Transmogrify": {
		name: "Transmogrify",
		type: ["Action","Reserve"],
		pointsChangeFn: null
	},
	"Artificer": {
		name: "Artificer",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Bridge Troll": {
		name: "Bridge Troll",
		type: ["Attack","Duration"],
		pointsChangeFn: null
	},
	"Distant Lands": {
		name: "Distant Lands",
		type: ["Action","Reserve","Victory"],
		pointsChangeFn: null
	},
	"Giant": {
		name: "Giant",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Haunted Woods": {
		name: "Haunted Woods",
		type: ["Attack","Duration"],
		pointsChangeFn: null
	},
	"Lost City": {
		name: "Lost City",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Relic": {
		name: "Relic",
		type: ["Treasure","Attack"],
		pointsChangeFn: null
	},
	"Royal Carriage": {
		name: "Royal Carriage",
		type: ["Action","Reserve"],
		pointsChangeFn: null
	},
	"Storyteller": {
		name: "Storyteller",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Swamp Hag": {
		name: "Swamp Hag",
		type: ["Attack","Duration"],
		pointsChangeFn: null
	},
	"Treasure Trove": {
		name: "Treasure Trove",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Wine Merchant": {
		name: "Wine Merchant",
		type: ["Action","Reserve"],
		pointsChangeFn: null
	},
	"Hireling": {
		name: "Hireling",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Treasure Hunter": {
		name: "Treasure Hunter",
		type: ["Action","Traveller"],
		pointsChangeFn: null
	},
	"Warrior": {
		name: "Warrior",
		type: ["Attack","Traveller"],
		pointsChangeFn: null
	},
	"Hero": {
		name: "Hero",
		type: ["Action","Traveller"],
		pointsChangeFn: null
	},
	"Champion": {
		name: "Champion",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Soldier": {
		name: "Soldier",
		type: ["Attack","Traveller"],
		pointsChangeFn: null
	},
	"Fugitive": {
		name: "Fugitive",
		type: ["Action","Traveller"],
		pointsChangeFn: null
	},
	"Disciple": {
		name: "Disciple",
		type: ["Action","Traveller"],
		pointsChangeFn: null
	},
	"Teacher": {
		name: "Teacher",
		type: ["Action","Reserve"],
		pointsChangeFn: null
	},
	"Alms": {
		name: "Alms",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Borrow": {
		name: "Borrow",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Quest": {
		name: "Quest",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Save": {
		name: "Save",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Scouting Party": {
		name: "Scouting Party",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Travelling Fair": {
		name: "Travelling Fair",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Bonfire": {
		name: "Bonfire",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Expedition": {
		name: "Expedition",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Ferry": {
		name: "Ferry",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Plan": {
		name: "Plan",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Mission": {
		name: "Mission",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Pilgrimage": {
		name: "Pilgrimage",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Ball": {
		name: "Ball",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Raid": {
		name: "Raid",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Seaway": {
		name: "Seaway",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Trade": {
		name: "Trade",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Lost Arts": {
		name: "Lost Arts",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Training": {
		name: "Training",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Inheritance": {
		name: "Inheritance",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Pathfinding": {
		name: "Pathfinding",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Engineer": {
		name: "Engineer",
		type: ["Action"],
		pointsChangeFn: null
	},
	"City Quarter": {
		name: "City Quarter",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Overlord": {
		name: "Overlord",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Royal Blacksmith": {
		name: "Royal Blacksmith",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Encampment": {
		name: "Encampment",
		type: ["Action"],
		splitWith: "Plunder",
		pointsChangeFn: null
	},
	"Plunder": {
		name: "Plunder",
		type: ["Treasure"],
		splitWith: "^",
		pointsChangeFn: null
	},
	"Patrician": {
		name: "Patrician",
		type: ["Action"],
		splitWith: "Emporium",
		pointsChangeFn: null
	},
	"Emporium": {
		name: "Emporium",
		type: ["Action"],
		splitWith: "^",
		pointsChangeFn: null
	},
	"Settlers": {
		name: "Settlers",
		type: ["Action"],
		splitWith: "Bustling Village",
		pointsChangeFn: null
	},
	"Bustling Village": {
		name: "Bustling Village",
		type: ["Action"],
		splitWith: "^",
		pointsChangeFn: null
	},
	"Castles": {
		name: "Castles",
		type: ["Victory"],
		pointsChangeFn: null
	},
	"Catapult": {
		name: "Catapult",
		type: ["Action"],
		splitWith: "Rocks",
		pointsChangeFn: null
	},
	"Rocks": {
		name: "Rocks",
		type: ["Treasure"],
		splitWith: "^",
		pointsChangeFn: null
	},
	"Chariot Race": {
		name: "Chariot Race",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Enchantress": {
		name: "Enchantress",
		type: ["Attack","Duration"],
		pointsChangeFn: null
	},
	"Gladiator": {
		name: "Gladiator",
		type: ["Action"],
		splitWith: "Fortune",
		pointsChangeFn: null
	},
	"Fortune": {
		name: "Fortune",
		type: ["Treasure"],
		splitWith: "^",
		pointsChangeFn: null
	},
	"Sacrifice": {
		name: "Sacrifice",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Temple": {
		name: "Temple",
		type: ["Action","Gathering"],
		pointsChangeFn: null
	},
	"Villa": {
		name: "Villa",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Archive": {
		name: "Archive",
		type: ["Action","Duration"],
		pointsChangeFn: null
	},
	"Capital": {
		name: "Capital",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Charm": {
		name: "Charm",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Crown": {
		name: "Crown",
		type: ["Action","Treasure"],
		pointsChangeFn: null
	},
	"Forum": {
		name: "Forum",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Groundskeeper": {
		name: "Groundskeeper",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Legionary": {
		name: "Legionary",
		type: ["Attack"],
		pointsChangeFn: null
	},
	"Wild Hunt": {
		name: "Wild Hunt",
		type: ["Action","Gathering"],
		pointsChangeFn: null
	},
	"Humble Castle": {
		name: "Humble Castle",
		type: ["Treasure","Victory","Castle"],
		splitWith: "Crumbling Castle",
		pointsChangeFn: function(deck) {
			var castleCount = 0;
			for (var typeKey in deck) {
				for (var cardKey in deck[typeKey]) {
					var card = deck[typeKey][cardKey];
					if (card.type.indexOf('Castle') > -1) {
						castleCount += card.count;
					}
				}
			}

			return { vp: castleCount };
		}
	},
	"Crumbling Castle": {
		name: "Crumbling Castle",
		type: ["Victory","Castle"],
		splitWith: "Small Castle",
		pointsChangeFn: function(deck) { return {vp: 1}; }
	},
	"Small Castle": {
		name: "Small Castle",
		type: ["Action","Victory","Castle"],
		splitWith: "Haunted Castle",
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Haunted Castle": {
		name: "Haunted Castle",
		type: ["Victory","Castle"],
		splitWith: "Opulent Castle",
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Opulent Castle": {
		name: "Opulent Castle",
		type: ["Action","Victory","Castle"],
		splitWith: "Sprawling Castle",
		pointsChangeFn: function(deck) { return {vp: 3}; }
	},
	"Sprawling Castle": {
		name: "Sprawling Castle",
		type: ["Victory","Castle"],
		splitWith: "Grand Castle",
		pointsChangeFn: function(deck) { return {vp: 4}; }
	},
	"Grand Castle": {
		name: "Grand Castle",
		type: ["Victory","Castle"],
		splitWith: "King's Castle",
		pointsChangeFn: function(deck) { return {vp: 5}; }
	},
	"King's Castle": {
		name: "King's Castle",
		type: ["Victory","Castle"],
		splitWith: "^",
		pointsChangeFn: function(deck) {
			var castleCount = 0;
			for (var cardKey in deck['Victory']) {
				var card = deck['Victory'][cardKey];
				if (card.type.indexOf('Castle') > -1) {
					castleCount += card.count;
				}
			}

			return { vp: 2 * castleCount};
		}
	},
	"Triumph": {
		name: "Triumph",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Annex": {
		name: "Annex",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Donate": {
		name: "Donate",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Advance": {
		name: "Advance",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Delve": {
		name: "Delve",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Tax": {
		name: "Tax",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Banquet": {
		name: "Banquet",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Ritual": {
		name: "Ritual",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Salt the Earth": {
		name: "Salt the Earth",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Wedding": {
		name: "Wedding",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Windfall": {
		name: "Windfall",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Conquest": {
		name: "Conquest",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Dominate": {
		name: "Dominate",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Aqueduct": {
		name: "Aqueduct",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Arena": {
		name: "Arena",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Bandit Fort": {
		name: "Bandit Fort",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var silverGoldCount = (deck['Treasure']['Silver'] ? deck['Treasure']['Silver'].count : 0) + 
				(deck['Treasure']['Gold'] ? deck['Treasure']['Gold'].count : 0);
			return { vp: silverGoldCount * -2 };
		}
	},
	"Basilica": {
		name: "Basilica",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Baths": {
		name: "Baths",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Battlefield": {
		name: "Battlefield",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Colonnade": {
		name: "Colonnade",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Defiled Shrine": {
		name: "Defiled Shrine",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Fountain": {
		name: "Fountain",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var copperCount = deck['Treasure']['Copper'] ? deck['Treasure']['Copper'].count : 0;
			return { vp: copperCount >= 10 ? 15 : 0 };
		}
	},
	"Keep": {
		name: "Keep",
		type: ["Landmark"],
		pointsChangeFn: function(deck, moreData) {
			var otherDecks = moreData.otherDecks;
			var bonus = 0;
			// 5 per differently named treasure you have that you have the most copies of (or tied)
			for (var cardKey in deck['Treasure']) {
				var myCount = deck['Treasure'][cardKey].count;
				var mostCopiesOrTied = true;
				for (var i = 0; i < otherDecks.length; i++) {
					var theirCount = otherDecks[i].cards['Treasure'] && otherDecks[i].cards['Treasure'][cardKey] ? otherDecks[i].cards['Treasure'][cardKey].count : 0;
					if (theirCount > myCount) {
						mostCopiesOrTied = false;
					}
				}
				if (mostCopiesOrTied) {
					bonus += 5;
				}
			}

			return { vp: bonus };
		}
	},
	"Labyrinth": {
		name: "Labyrinth",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Mountain Pass": {
		name: "Mountain Pass",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Museum": {
		name: "Museum",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var differentlyNamedCardsCount = 0;
			for (var typeKey in deck) {
				for (var cardKey in deck[typeKey]) {
					if (deck[typeKey][cardKey].count > 0) {
						differentlyNamedCardsCount++;
					}
				}
			}
			return { vp: differentlyNamedCardsCount * 2 };
		}
	},
	"Obelisk": {
		name: "Obelisk",
		type: ["Landmark"],
		pointsChangeFn: function(deck, moreData) {
			// TODO obelisk is broken with split piles
			var obeliskPile = moreData.obeliskPile;
			return { vp: 2 * (deck['Action'] && deck['Action'][obeliskPile.name] ? deck['Action'][obeliskPile.name].count : 0) }
		}
	},
	"Orchard": {
		name: "Orchard",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var differentlyNamedActionCardThreePlusCopiesCount = 0;
			for (var cardKey in deck['Action']) {
				if (deck['Action'][cardKey].count >= 3) {
					differentlyNamedActionCardThreePlusCopiesCount++;
				}
			}
			return { vp: differentlyNamedActionCardThreePlusCopiesCount * 4 };
		}
	},
	"Palace": {
		name: "Palace",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var countGold = deck['Treasure']['Gold'] ? deck['Treasure']['Gold'].count : 0;
			var countSilver = deck['Treasure']['Silver'] ? deck['Treasure']['Silver'].count : 0;
			var countCopper = deck['Treasure']['Copper'] ? deck['Treasure']['Copper'].count : 0;
			// looking for number of sets of Copper-Silver-Gold, which will be equal to the min count
			return { vp: Math.min(countGold, countSilver, countCopper) * 3 }
		}
	},
	"Tomb": {
		name: "Tomb",
		type: ["Landmark"],
		pointsChangeFn: null
	},
	"Tower": {
		name: "Tower",
		type: ["Landmark"],
		pointsChangeFn: function(deck, moreData) {
			// for this card, rather than calculating points ourselves we just read
			// the data passed in from the Chrome Ext. this will obvs be unavailable if not using extension.
			// to calculate it ourselves would require us to know the state of the supply piles at the start of and throughout the game

			// problem with this is we don't change it for each turn, only the end
			if (! moreData.scoreTable || ! moreData.isFinalTurn) {
				return {};
			}

			for (var rowIndex = 0; rowIndex < moreData.scoreTable.length; rowIndex++) {
				var row = moreData.scoreTable[rowIndex];
				if (row[0] === "Tower") {
					try {
						return { vp: parseInt(row[2]) };
					} catch(e) {
						return {};
					}
				}
			}
			return {};
		}
	},
	"Triumphal Arch": {
		name: "Triumphal Arch",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var actionCardCounts = [];
			for (var cardKey in deck['Action']) {
				actionCardCounts.push(deck['Action'][cardKey].count);
			}
			actionCardCounts.sort();
			var secondMostCommonActionCardCount = actionCardCounts[actionCardCounts.length-2] ? actionCardCounts[actionCardCounts.length-2] : 0;
			return { vp: secondMostCommonActionCardCount * 3 };
		}
	},
	"Wall": {
		name: "Wall",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var totalCardsCount = 0;
			for (var typeKey in deck) {
				for (var cardKey in deck[typeKey]) {
					var card = deck[typeKey][cardKey];
					totalCardsCount += card.count;
				}
			}
			// penalty is -1 per card over 15
			var penalty = Math.min(0, 15 - totalCardsCount);
			// TODO should this and Gardens use deck.numCards? is it available at runtime?
			return { vp: penalty };
		}
	},
	"Wolf Den": {
		name: "Wolf Den",
		type: ["Landmark"],
		pointsChangeFn: function(deck) {
			var oneCopyCardCount = 0;
			for (var typeKey in deck) {
				for (var cardKey in deck[typeKey]) {
					var card = deck[typeKey][cardKey];
					if (card.count === 1) {
						oneCopyCardCount++;
					}
				}
			}

			return { vp: oneCopyCardCount * -3 };
		}
	},
	"Black Market": {
		name: "Black Market",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Envoy": {
		name: "Envoy",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Sauna": {
		name: "Sauna",
		type: ["Action"],
		splitWith: "Avanto",
		pointsChangeFn: null
	},
	"Avanto": {
		name: "Avanto",
		type: ["Action"],
		splitWith: "^",
		pointsChangeFn: null
	},
	"Walled Village": {
		name: "Walled Village",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Governor": {
		name: "Governor",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Stash": {
		name: "Stash",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Prince": {
		name: "Prince",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Summon": {
		name: "Summon",
		type: ["Event"],
		pointsChangeFn: null
	},
	"Philosopher's Stone": {
		name: "Philosopher's Stone",
		type: ["Treasure"],
		pointsChangeFn: null
	},
	"Worker's Village": {
		name: "Worker's Village",
		type: ["Action"],
		pointsChangeFn: null
	},
	"King's Court": {
		name: "King's Court",
		type: ["Action"],
		pointsChangeFn: null
	},
	"Fool's Gold": {
		name: "Fool's Gold",
		type: ["Treasure","Reaction"],
		pointsChangeFn: null
	},
	"Farmers' Market": {
		name: "Farmers' Market",
		type: ["Action","Gathering"],
		pointsChangeFn: null
	}
}

module.exports = DeckData;