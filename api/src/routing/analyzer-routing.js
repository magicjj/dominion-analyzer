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
							res.send(500, err.ERROR);
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
							if (dbRes === null) {
								res.send(404, null);
								return;
							}
							res.send(dbRes.gameData);
						},
						err => {
							res.send(500, err.ERROR);
						}
					)
				;
			}
		);
	}
}

module.exports = new Routes();