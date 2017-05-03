var controller = require('../controller/dominionAnalyzer').instance;

function route(server) {
	server.post('/analyze',
		function(req, res, next) {
			var output = controller.parse(req.body.input);
			res.send(200, output);	// TODO - without stringify we are losing the maps, why?
			return next();
		}
	);
}

exports.route = route;