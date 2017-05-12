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
                            if (err) throw err;
                            console.log("inserted record");
                            resolve(result);
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
                                throw err;
                            }
                        )
                    ;
                };  // end findUniqueKeyThenAdd fn dec
                findUniqueKeyThenAdd();
            }); // end _connect callback
        }); // end return new promise
    }

    getGame(key) {
        return new Promise((resolve, reject) => {
            this._connect((db, callback) => {
                db.collection('gameData').findOne(
                    {
                        key
                    },
                    (err, result) => {
                        if (err) throw err;
                        console.log("record found");
                        resolve(result);
                    }
                );
            })
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