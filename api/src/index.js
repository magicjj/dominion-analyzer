const restify = require('restify');
const Routes = require('./routing/analyzer-routing');

let server = restify.createServer({
  name: 'analyzerapi',
  handleUpgrades: true
});

server.pre(function(req, res, next) {
	req.headers.accept = 'application/json';
	res.setHeader('X-XSS-Protection', 0);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Content-Type', 'application/json');
	return next();
});

server.use(restify.bodyParser({ mapParams: false }));

Routes.init(server);

server.listen(8088);
