// todo fix types

let DeckData = {
	"Estate": {
		name: "Estate",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 1}; }
	},
	"Copper": {
		name: "Copper",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Curse": {
		name: "Curse",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Silver": {
		name: "Silver",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Duchy": {
		name: "Duchy",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 3}; }
	},
	"Gold": {
		name: "Gold",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Province": {
		name: "Province",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 6}; }
	},
	"Cellar": {
		name: "Cellar",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Chapel": {
		name: "Chapel",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Moat": {
		name: "Moat",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Harbinger": {
		name: "Harbinger",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Merchant": {
		name: "Merchant",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Vassal": {
		name: "Vassal",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Village": {
		name: "Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Workshop": {
		name: "Workshop",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bureaucrat": {
		name: "Bureaucrat",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Gardens": {
		name: "Gardens",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {
			var totalCardsCount = 0;
			for (var typeKey in deck) {
				for (var cardKey in deck[typeKey]) {
					var card = deck[typeKey][cardKey];
					totalCardsCount += card.count;
				}
			}

			return { vp: Math.floor(totalCardsCount / 10) }
		}
	},
	"Militia": {
		name: "Militia",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Moneylender": {
		name: "Moneylender",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Poacher": {
		name: "Poacher",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Remodel": {
		name: "Remodel",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Smithy": {
		name: "Smithy",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Throne Room": {
		name: "Throne Room",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bandit": {
		name: "Bandit",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Council Room": {
		name: "Council Room",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Festival": {
		name: "Festival",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Laboratory": {
		name: "Laboratory",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Library": {
		name: "Library",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Market": {
		name: "Market",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mine": {
		name: "Mine",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sentry": {
		name: "Sentry",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Witch": {
		name: "Witch",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Artisan": {
		name: "Artisan",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Courtyard": {
		name: "Courtyard",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Lurker": {
		name: "Lurker",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Pawn": {
		name: "Pawn",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Masquerade": {
		name: "Masquerade",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Shanty Town": {
		name: "Shanty Town",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Steward": {
		name: "Steward",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Swindler": {
		name: "Swindler",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wishing Well": {
		name: "Wishing Well",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Baron": {
		name: "Baron",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bridge": {
		name: "Bridge",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Conspirator": {
		name: "Conspirator",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Diplomat": {
		name: "Diplomat",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ironworks": {
		name: "Ironworks",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mill": {
		name: "Mill",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 1}; }
	},
	"Mining Village": {
		name: "Mining Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Secret Passage": {
		name: "Secret Passage",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Courtier": {
		name: "Courtier",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Duke": {
		name: "Duke",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {return { vp: deck['v']['Duchy']};}
	},
	"Minion": {
		name: "Minion",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Patrol": {
		name: "Patrol",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Replace": {
		name: "Replace",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Torturer": {
		name: "Torturer",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Trading Post": {
		name: "Trading Post",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Upgrade": {
		name: "Upgrade",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Harem": {
		name: "Harem",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Nobles": {
		name: "Nobles",
		type: 'a',
		subtype: null,
		pointsChangeFn: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Embargo": {
		name: "Embargo",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Haven": {
		name: "Haven",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Lighthouse": {
		name: "Lighthouse",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Native Village": {
		name: "Native Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Pearl Diver": {
		name: "Pearl Diver",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ambassador": {
		name: "Ambassador",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Fishing Village": {
		name: "Fishing Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Lookout": {
		name: "Lookout",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Smugglers": {
		name: "Smugglers",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Warehouse": {
		name: "Warehouse",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Caravan": {
		name: "Caravan",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Cutpurse": {
		name: "Cutpurse",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Island": {
		name: "Island",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Navigator": {
		name: "Navigator",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Pirate Ship": {
		name: "Pirate Ship",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Salvager": {
		name: "Salvager",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sea Hag": {
		name: "Sea Hag",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Treasure Map": {
		name: "Treasure Map",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bazaar": {
		name: "Bazaar",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Explorer": {
		name: "Explorer",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ghost Ship": {
		name: "Ghost Ship",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Merchant Ship": {
		name: "Merchant Ship",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Outpost": {
		name: "Outpost",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Tactician": {
		name: "Tactician",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Treasury": {
		name: "Treasury",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wharf": {
		name: "Wharf",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Potion": {
		name: "Potion",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Transmute": {
		name: "Transmute",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Vineyard": {
		name: "Vineyard",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {
			var actionCardsCount = 0;
			for (var cardKey in deck['a']) {
				var card = deck['a'][cardKey];
				actionCardsCount += card.count;
			}

			return { vp: Math.floor(actionCardsCount / 3) }
		}
	},
	"Herbalist": {
		name: "Herbalist",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Apothecary": {
		name: "Apothecary",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Scrying Pool": {
		name: "Scrying Pool",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"University": {
		name: "University",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Alchemist": {
		name: "Alchemist",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Familiar": {
		name: "Familiar",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Golem": {
		name: "Golem",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Apprentice": {
		name: "Apprentice",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Possession": {
		name: "Possession",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Platinum": {
		name: "Platinum",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Colony": {
		name: "Colony",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 10}; }
	},
	"Loan": {
		name: "Loan",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Trade Route": {
		name: "Trade Route",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Watchtower": {
		name: "Watchtower",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bishop": {
		name: "Bishop",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Monument": {
		name: "Monument",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Quarry": {
		name: "Quarry",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Talisman": {
		name: "Talisman",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"City": {
		name: "City",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Contraband": {
		name: "Contraband",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Counting House": {
		name: "Counting House",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mint": {
		name: "Mint",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mountebank": {
		name: "Mountebank",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Rabble": {
		name: "Rabble",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Royal Seal": {
		name: "Royal Seal",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Vault": {
		name: "Vault",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Venture": {
		name: "Venture",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Goons": {
		name: "Goons",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Grand Market": {
		name: "Grand Market",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hoard": {
		name: "Hoard",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bank": {
		name: "Bank",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Expand": {
		name: "Expand",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Forge": {
		name: "Forge",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Peddler": {
		name: "Peddler",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hamlet": {
		name: "Hamlet",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Fortune Teller": {
		name: "Fortune Teller",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Menagerie": {
		name: "Menagerie",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Farming Village": {
		name: "Farming Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Horse Traders": {
		name: "Horse Traders",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Remake": {
		name: "Remake",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Tournament": {
		name: "Tournament",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Young Witch": {
		name: "Young Witch",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Harvest": {
		name: "Harvest",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Horn of Plenty": {
		name: "Horn of Plenty",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hunting Party": {
		name: "Hunting Party",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Jester": {
		name: "Jester",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Fairgrounds": {
		name: "Fairgrounds",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {
			var uniqueNamesCount = 0;
			for (var typeKey in deck) {
				uniqueNamesCount += deck[typeKey].keys().length;
			}

			return { vp: Math.floor(uniqueNamesCount / 5) }
		}
	},
	"Bag of Gold": {
		name: "Bag of Gold",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Diadem": {
		name: "Diadem",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Followers": {
		name: "Followers",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Princess": {
		name: "Princess",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Trusty Steed": {
		name: "Trusty Steed",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Crossroads": {
		name: "Crossroads",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Duchess": {
		name: "Duchess",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Develop": {
		name: "Develop",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Oasis": {
		name: "Oasis",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Oracle": {
		name: "Oracle",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Scheme": {
		name: "Scheme",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Tunnel": {
		name: "Tunnel",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Jack of all Trades": {
		name: "Jack of all Trades",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Noble Brigand": {
		name: "Noble Brigand",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Nomad Camp": {
		name: "Nomad Camp",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Silk Road": {
		name: "Silk Road",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {
			var victoryCardsCount = 0;
			for (var cardKey in deck['v']) {
				var card = deck['v'][cardKey];
				if (card.type === 'castle') {
					victoryCardsCount += card.count;
				}
			}

			return { vp: Math.floor(victoryCardsCount / 4) }
		}
	},
	"Spice Merchant": {
		name: "Spice Merchant",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Trader": {
		name: "Trader",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Cache": {
		name: "Cache",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Cartographer": {
		name: "Cartographer",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Embassy": {
		name: "Embassy",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Haggler": {
		name: "Haggler",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Highway": {
		name: "Highway",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ill-Gotten Gains": {
		name: "Ill-Gotten Gains",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Inn": {
		name: "Inn",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mandarin": {
		name: "Mandarin",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Margrave": {
		name: "Margrave",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Stables": {
		name: "Stables",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Border Village": {
		name: "Border Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Farmland": {
		name: "Farmland",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Abandoned Mine": {
		name: "Abandoned Mine",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ruined Library": {
		name: "Ruined Library",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ruined Market": {
		name: "Ruined Market",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ruined Village": {
		name: "Ruined Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Survivors": {
		name: "Survivors",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Poor House": {
		name: "Poor House",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Beggar": {
		name: "Beggar",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Squire": {
		name: "Squire",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Vagrant": {
		name: "Vagrant",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Forager": {
		name: "Forager",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hermit": {
		name: "Hermit",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Market Square": {
		name: "Market Square",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sage": {
		name: "Sage",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Storeroom": {
		name: "Storeroom",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Urchin": {
		name: "Urchin",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Armory": {
		name: "Armory",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Death Cart": {
		name: "Death Cart",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Feodum": {
		name: "Feodum",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {return { vp: Math.floor(deck['c']['Silver'] / 3) }}
	},
	"Fortress": {
		name: "Fortress",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ironmonger": {
		name: "Ironmonger",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Marauder": {
		name: "Marauder",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Procession": {
		name: "Procession",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Rats": {
		name: "Rats",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Scavenger": {
		name: "Scavenger",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wandering Minstrel": {
		name: "Wandering Minstrel",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Band of Misfits": {
		name: "Band of Misfits",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bandit Camp": {
		name: "Bandit Camp",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Catacombs": {
		name: "Catacombs",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Count": {
		name: "Count",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Counterfeit": {
		name: "Counterfeit",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Cultist": {
		name: "Cultist",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Graverobber": {
		name: "Graverobber",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Junk Dealer": {
		name: "Junk Dealer",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Knights": {
		name: "Knights",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mystic": {
		name: "Mystic",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Pillage": {
		name: "Pillage",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Rebuild": {
		name: "Rebuild",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Rogue": {
		name: "Rogue",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Altar": {
		name: "Altar",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hunting Grounds": {
		name: "Hunting Grounds",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Dame Anna": {
		name: "Dame Anna",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Dame Josephine": {
		name: "Dame Josephine",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Dame Molly": {
		name: "Dame Molly",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Dame Natalie": {
		name: "Dame Natalie",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Dame Sylvia": {
		name: "Dame Sylvia",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sir Bailey": {
		name: "Sir Bailey",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sir Destry": {
		name: "Sir Destry",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sir Martin": {
		name: "Sir Martin",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sir Michael": {
		name: "Sir Michael",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sir Vander": {
		name: "Sir Vander",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Madman": {
		name: "Madman",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mercenary": {
		name: "Mercenary",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Spoils": {
		name: "Spoils",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hovel": {
		name: "Hovel",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Necropolis": {
		name: "Necropolis",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Overgrown Estate": {
		name: "Overgrown Estate",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Candlestick Maker": {
		name: "Candlestick Maker",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Stonemason": {
		name: "Stonemason",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Doctor": {
		name: "Doctor",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Masterpiece": {
		name: "Masterpiece",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Advisor": {
		name: "Advisor",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Plaza": {
		name: "Plaza",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Taxman": {
		name: "Taxman",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Herald": {
		name: "Herald",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Baker": {
		name: "Baker",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Butcher": {
		name: "Butcher",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Journeyman": {
		name: "Journeyman",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Merchant Guild": {
		name: "Merchant Guild",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Soothsayer": {
		name: "Soothsayer",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Coin of the Realm": {
		name: "Coin of the Realm",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Page": {
		name: "Page",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Peasant": {
		name: "Peasant",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ratcatcher": {
		name: "Ratcatcher",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Raze": {
		name: "Raze",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Amulet": {
		name: "Amulet",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Caravan Guard": {
		name: "Caravan Guard",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Dungeon": {
		name: "Dungeon",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Gear": {
		name: "Gear",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Guide": {
		name: "Guide",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Duplicate": {
		name: "Duplicate",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Magpie": {
		name: "Magpie",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Messenger": {
		name: "Messenger",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Miser": {
		name: "Miser",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Port": {
		name: "Port",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ranger": {
		name: "Ranger",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Transmogrify": {
		name: "Transmogrify",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Artificer": {
		name: "Artificer",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bridge Troll": {
		name: "Bridge Troll",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Distant Lands": {
		name: "Distant Lands",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Giant": {
		name: "Giant",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Haunted Woods": {
		name: "Haunted Woods",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Lost City": {
		name: "Lost City",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Relic": {
		name: "Relic",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Royal Carriage": {
		name: "Royal Carriage",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Storyteller": {
		name: "Storyteller",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Swamp Hag": {
		name: "Swamp Hag",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Treasure Trove": {
		name: "Treasure Trove",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wine Merchant": {
		name: "Wine Merchant",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hireling": {
		name: "Hireling",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Treasure Hunter": {
		name: "Treasure Hunter",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Warrior": {
		name: "Warrior",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Hero": {
		name: "Hero",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Champion": {
		name: "Champion",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Soldier": {
		name: "Soldier",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Fugitive": {
		name: "Fugitive",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Disciple": {
		name: "Disciple",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Teacher": {
		name: "Teacher",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Alms": {
		name: "Alms",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Borrow": {
		name: "Borrow",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Quest": {
		name: "Quest",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Save": {
		name: "Save",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Scouting Party": {
		name: "Scouting Party",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Travelling Fair": {
		name: "Travelling Fair",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bonfire": {
		name: "Bonfire",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Expedition": {
		name: "Expedition",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ferry": {
		name: "Ferry",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Plan": {
		name: "Plan",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mission": {
		name: "Mission",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Pilgrimage": {
		name: "Pilgrimage",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ball": {
		name: "Ball",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Raid": {
		name: "Raid",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Seaway": {
		name: "Seaway",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Trade": {
		name: "Trade",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Lost Arts": {
		name: "Lost Arts",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Training": {
		name: "Training",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Inheritance": {
		name: "Inheritance",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Pathfinding": {
		name: "Pathfinding",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Engineer": {
		name: "Engineer",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"City Quarter": {
		name: "City Quarter",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Overlord": {
		name: "Overlord",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Royal Blacksmith": {
		name: "Royal Blacksmith",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Encampment": {
		name: "Encampment",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Plunder": {
		name: "Plunder",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Patrician": {
		name: "Patrician",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Emporium": {
		name: "Emporium",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Settlers": {
		name: "Settlers",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bustling Village": {
		name: "Bustling Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Castles": {
		name: "Castles",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Catapult": {
		name: "Catapult",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Rocks": {
		name: "Rocks",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Chariot Race": {
		name: "Chariot Race",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Enchantress": {
		name: "Enchantress",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Gladiator": {
		name: "Gladiator",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Fortune": {
		name: "Fortune",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sacrifice": {
		name: "Sacrifice",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Temple": {
		name: "Temple",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Villa": {
		name: "Villa",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Archive": {
		name: "Archive",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Capital": {
		name: "Capital",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Charm": {
		name: "Charm",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Crown": {
		name: "Crown",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Forum": {
		name: "Forum",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Groundskeeper": {
		name: "Groundskeeper",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Legionary": {
		name: "Legionary",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wild Hunt": {
		name: "Wild Hunt",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Humble Castle": {
		name: "Humble Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {
			var castleCount = 0;
			for (var cardKey in deck['v']) {
				var card = deck['v'][cardKey];
				if (card.type === 'castle') {
					castleCount += card.count;
				}
			}

			return { vp: castleCount}
		}
	},
	"Crumbling Castle": {
		name: "Crumbling Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Small Castle": {
		name: "Small Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Haunted Castle": {
		name: "Haunted Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 2}; }
	},
	"Opulent Castle": {
		name: "Opulent Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 3}; }
	},
	"Sprawling Castle": {
		name: "Sprawling Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 4}; }
	},
	"Grand Castle": {
		name: "Grand Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) { return {vp: 5}; }
	},
	"Triumph": {
		name: "Triumph",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Annex": {
		name: "Annex",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Donate": {
		name: "Donate",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Advance": {
		name: "Advance",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Delve": {
		name: "Delve",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Tax": {
		name: "Tax",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Banquet": {
		name: "Banquet",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Ritual": {
		name: "Ritual",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Salt the Earth": {
		name: "Salt the Earth",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wedding": {
		name: "Wedding",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Windfall": {
		name: "Windfall",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Conquest": {
		name: "Conquest",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Dominate": {
		name: "Dominate",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Aqueduct": {
		name: "Aqueduct",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Arena": {
		name: "Arena",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Bandit Fort": {
		name: "Bandit Fort",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Basilica": {
		name: "Basilica",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Baths": {
		name: "Baths",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Battlefield": {
		name: "Battlefield",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Colonnade": {
		name: "Colonnade",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Defiled Shrine": {
		name: "Defiled Shrine",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Fountain": {
		name: "Fountain",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Keep": {
		name: "Keep",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Labyrinth": {
		name: "Labyrinth",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Mountain Pass": {
		name: "Mountain Pass",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Museum": {
		name: "Museum",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Obelisk": {
		name: "Obelisk",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Orchard": {
		name: "Orchard",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Palace": {
		name: "Palace",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Tomb": {
		name: "Tomb",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Tower": {
		name: "Tower",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Triumphal Arch": {
		name: "Triumphal Arch",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wall": {
		name: "Wall",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Wolf Den": {
		name: "Wolf Den",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Black Market": {
		name: "Black Market",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Envoy": {
		name: "Envoy",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Sauna": {
		name: "Sauna",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Avanto": {
		name: "Avanto",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Walled Village": {
		name: "Walled Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Governor": {
		name: "Governor",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Stash": {
		name: "Stash",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Prince": {
		name: "Prince",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Summon": {
		name: "Summon",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Philosopher's Stone": {
		name: "Philosopher's Stone",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Worker's Village": {
		name: "Worker's Village",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"King's Court": {
		name: "King's Court",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Fool's Gold": {
		name: "Fool's Gold",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"Farmers' Market": {
		name: "Farmers' Market",
		type: 'a',
		subtype: null,
		pointsChangeFn: null
	},
	"King's Castle": {
		name: "King's Castle",
		type: 'a',
		subtype: null,
		pointsChangeFn: function(deck) {
			var castleCount = 0;
			for (var cardKey in deck['v']) {
				var card = deck['v'][cardKey];
				if (card.type === 'castle') {
					castleCount += card.count;
				}
			}

			return { vp: 2 * castleCount}
		}
	},
}

module.exports = DeckData;