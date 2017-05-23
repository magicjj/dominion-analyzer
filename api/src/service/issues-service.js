const https = require('https');
const winston = require('winston');

class IssuesService {

    log(issue) {
        if (! issue.title || ! issue.body) {
            // these fields are required
            return;
        }
        if (! issue.labels) {
            issue.labels = ["bug"];
        }
        if (! issue.assignees) {
            issue.assignees = ["magicjj"];
        }
		let options = {
			host: "api.github.com",
			path: "/repos/magicjj/dominion-analyzer/issues",
            method: 'POST',
			auth: 'windominion:giggle1',
            headers: {
				'User-Agent': 'dominion-analyzer',
                'Content-Type': 'application/json',
				'Accept': 'application/vnd.github.v3+json'
            },
		}
        try {
            let req = https.request(options, res => {
                if (res.statusCode !== 201) {
                    winston.crit('Error posting issue to GitHub: ');
                    res.setEncoding('utf8');
                    res.on('data', function (chunk) {
                        winston.crit('\tchunk: ' + chunk);
                    });
                } else {
                    winston.info("Posted issue to GitHub", issue);
                }
            });
            // post the data
            req.write(JSON.stringify(issue));
            req.end();
        } catch(e) {
            // log it but fail silently
            winston.crit('Error posting issue to GitHub: ', e);
        }
    }
}

module.exports = new IssuesService();