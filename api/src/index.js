const restify = require('restify');
const Routes = require('./routing/analyzer-routing');
const winston = require('winston');


/* first setup logging */
winston.setLevels(winston.config.syslog.levels);

winston.add(winston.transports.File, {
	name: 'info-file',
	filename: '/opt/log/dominion-analyzer/info.log',
	level: 'info',
	handleExceptions: true
});

winston.add(winston.transports.File, {
	name: 'error-file',
	filename: '/opt/log/dominion-analyzer/error.log',
	level: 'error',
	handleExceptions: true
});

winston.handleExceptions(new (winston.transports.File)({
	name: 'exceptions-file',
	filename: '/opt/log/dominion-analyzer/exceptions.log'
}));

winston.exitOnError = false;
winston.emitErrs = false;


/* then launch api on port 8088 */
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

server.listen(8088, '127.0.0.1', ()=>{});
