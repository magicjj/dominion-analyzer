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
            try {
                this._connect((db, callback) => {
                    let add = (thisKey) => {
                        gameData.key = thisKey;
                        let gameDataToAdd = {};
                        /* the playerNameToIndex and playerFlToIndex maps contain user input in the keys of the objects
                         * MongoDB does not allow periods or $ in object keys, but they can exist in the player's names in Dominion Online
                         * As such, rather than persisting this data (which is redundant anyway), we will  remove these maps before storing them
                         * and recreate them when we retrieve the data */
                        for (let key in gameData) {
                            if (key !== "playerNameToIndex" && key !== "playerFlToIndex") {
                                gameDataToAdd[key] = gameData[key];
                            }
                        }
                        db.collection('gameData').insertOne(
                            {
                                createTime: Date.now(),
                                gameLog,
                                gameData: gameDataToAdd,
                                key: thisKey
                            },
                            (err, result) => {
                                if (err) {
                                    reject(err);
                                    return;
                                }
                                winston.info("Record inserted to MongoDB", {key: gameData.key, game: gameData.game, players: Object.keys(gameData.playerNameToIndex)});
                                resolve(result);
                            }
                        );
                        let purgeTime = Date.now() - (1000*60*60*24*7); // purge everything older than a week
                        db.collection('gameData').remove({ $and: [{ createTime: { $lt: purgeTime } }, { key: { $ne: "yczCerB" } }, { key: { $ne: "Hfvaqjy" } }, { key: { $ne: "ig4umGh" } }] });
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
                                if (! result.gameData.playerNameToIndex || ! result.gameData.playerFlToIndex) {
                                    /* if the maps already exist, do nothing as this was stored before we stopped persisting the maps.
                                     * otherwise, we are create them below by simply looping through the players array */
                                    result.gameData.playerNameToIndex = {};
                                    result.gameData.playerFlToIndex = {};
                                    for (var i = 0; i < result.gameData.players.length; i++) {
                                        result.gameData.playerNameToIndex[result.gameData.players[i].name] = i;
                                        result.gameData.playerFlToIndex[result.gameData.players[i].fl] = i;
                                    }
                                }
                                winston.info("Record retrieved from MongoDB", {key: result.key, game: result.game, players: Object.keys(result.gameData.playerNameToIndex)});
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