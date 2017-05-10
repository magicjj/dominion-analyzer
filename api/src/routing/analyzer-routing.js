const DominionAnalyzer = require('../controller/dominion-analyzer');

class Routes {
	init(server) {
		server.post('/analyze',
			function(req, res, next) {
				let buffer = new Buffer(10);
				res.send(200, buffer);
				DominionAnalyzer.parse(req.body.input)
					.then(
						(gdo) => {
							buffer.write("TEST");
						},
						(err) => {
							throw err;
						}
					)
				;
				return next();
			}
		);
	}
}

module.exports = new Routes();