const DominionAnalyzer = require('../controller/dominion-analyzer');
const AnalyzerDbService = require('../service/analyzer-db-service');

class Routes {
	init(server) {
		server.post('/analyze',
			function(req, res, next) {
				DominionAnalyzer.parse(req.body.input)
					.then(
						(gdo) => {
							res.send(gdo);
						},
						(err) => {
							throw err;
						}
					)
				;
			}
		);

		server.get('/getSavedAnalysis/:key',
			function(req, res, next) {
				AnalyzerDbService.getGame(req.params.key)
					.then(
						dbRes => {
							res.send(dbRes.gameData);
						},
						err => {
							throw err;
						}
					)
				;
			}
		);
	}
}

module.exports = new Routes();