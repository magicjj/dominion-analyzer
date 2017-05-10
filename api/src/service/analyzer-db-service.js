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

module.exports = {

    addGameLog(gameLog, gameData) {
        return new Promise(function(resolve, reject) {
            this._connect((db, callback) => {
                db.collection('gameData').insertOne(
                    {
                        createTime: Date.now(),
                        gameLog,
                        gameData,
                        key: makeKey()
                    },
                    (err, result) => {
                        if (err) throw err;
                        console.log("inserted record");
                        resolve(result);
                    }
                );
            })
        });
    },

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