const DominionAnalyzer = require('../controller/dominionAnalyzer');

class Routes {
	init(server) {
		server.post('/analyze',
			function(req, res, next) {
				var output = DominionAnalyzer.parse(req.body.input);
				res.send(200, output);	// TODO - without stringify we are losing the maps, why?
				return next();
			}
		);
	}
}

module.exports = new Routes();