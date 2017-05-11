const DominionAnalyzer = require('../controller/dominion-analyzer');

class Routes {
	init(server) {
		server.post('/analyze',
			function(req, res, next) {
				DominionAnalyzer.parse(req.body.input)
					.then(
						(gdo) => {
							res.send(gdo);
							next();
						},
						(err) => {
							throw err;
						}
					)
				;
			}
		);
	}
}

module.exports = new Routes();