const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const Promise = require('promise');
const winston = require('winston');

const url = 'mongodb://win:tickletickle@localhost:27017/windominion';

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
                                if (err) {
                                    _reject(err);
                                    return;
                                }
                                winston.info("Record inserted to MongoDB", {key: gameData.key, game: gameData.game, players: Object.keys(gameData.playerNameToIndex)});
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
                })  // end _connect callback
                .then(
                res => {
                    // this is never resolved, only rejected
                },
                err => {
                    // if rejected pass error up
                    reject(err)
                });
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
                            if (err) {
                                reject(err);
                                return;
                            }
                            if (result === null) {
                                winston.info("Record not found in MongoDB", {key: key});
                            } else {
                                winston.info("Record retrieved from MongoDB", {key: result.key, game: result.game, players: Object.keys(result.playerNameToIndex)});
                            }
                            resolve(result);
                        }
                    );
                }).then(
                res => {
                    // this is never resolved, only rejected
                },
                err => {
                    // if rejected pass error up
                    reject(err)
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    _connect(callback) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function(err, db) {
                if (err !== null) {
                    reject(err);
                    return;
                }
                callback(db, function() {
                    db.close();
                });
            })
        });
    }

}

module.exports = new AnalyzerDbService();