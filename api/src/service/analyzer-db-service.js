const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const Promise = require('promise');

const url = 'mongodb://localhost:27017/windominion';

const makeKey = function() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < 7; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

class AnalyzerDbService {

    addGame(gameLog, gameData) {
        return new Promise((resolve, reject) => {
            let _resolve = resolve, _reject = reject;
            try {
                this._connect((db, callback) => {
                    let add = (thisKey) => {
                        gameData.key = thisKey;
                        db.collection('gameData').insertOne(
                            {
                                createTime: Date.now(),
                                gameLog,
                                gameData,
                                key: thisKey
                            },
                            (err, result) => {
                                if (err) _reject(err);
                                console.log("inserted record");
                                _resolve(result);
                            }
                        );
                    }
                    let findUniqueKeyThenAdd = () => {
                        let thisKey = makeKey();
                        this.getGame(thisKey)
                            .then(
                                dupCheckRes => {
                                    if (dupCheckRes === null) {
                                        add(thisKey);
                                    } else {
                                        findUniqueKeyThenAdd();
                                    }
                                },
                                err => {
                                    if (err) reject(err);
                                }
                            )
                        ;
                    };  // end findUniqueKeyThenAdd fn dec
                    findUniqueKeyThenAdd();
                }); // end _connect callback
                } catch (e) {
                reject(e);
            }
        }); // end return new promise
    }

    getGame(key) {
        return new Promise((resolve, reject) => {
            try {
                this._connect((db, callback) => {
                    db.collection('gameData').findOne(
                        {
                            key
                        },
                        (err, result) => {
                            if (err) reject(err);
                            if (result === null) {
                                console.log("record not found");
                            } else {
                                console.log("record found");
                            }
                            resolve(result);
                        }
                    );
                })
            } catch (e) {
                reject(e);
            }
        });
    }

    _connect(callback) {
        return MongoClient.connect(url, function(err, db) {
            if (err !== null) {
                throw err;
            }
            callback(db, function() {
                db.close();
            });
        });
    }

}

module.exports = new AnalyzerDbService();