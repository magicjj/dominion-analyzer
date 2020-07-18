import 'whatwg-fetch';
import * as parser from './Parser';


class AnalyzerService {
    contextUrl = window.location.protocol + "//" + window.location.hostname + ":8088/";

    analyze(input) {
        return parser.default.parse(input);
    }

    getSavedAnalysis(key) {
        return fetch(this.contextUrl + 'getSavedAnalysis/' + encodeURIComponent(key), {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
    }
}


export default new AnalyzerService();




/*
    analyze(formInput) {
        return fetch(this.contextUrl + 'analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: formInput
            })
        });
    }
*/