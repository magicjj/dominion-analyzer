var app = require('express')(),
    winston = require('winston'),
    logger;

logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            filename: '/opt/log/dominion-analyzer/info.log'
        })
    ]
});

require('winston-logs-display')(app, logger);

app.listen(8089, function () {
    console.log('server started on port 8089');
});
