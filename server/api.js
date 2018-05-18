var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;




var db;



const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/node_db', (err, db) => {
        if(err) {
            return console.log(err);
        }
        closure(db);
    });
}

    let response = {
        status : 200,
        message: null,
        data: []
    }

    var sendError = (err, res) => {
        response.status = 501;
        response.message = typeof err == "object" ? err.message : err;
        res.status(501).json(response);
    }

    router.get('/car', (req, res) => {
        connection((db) => {
            console.log('data', db);
            db.collection('vehical').find().toArray().then((vehical) => {
                response.data = vehical;
                res.json(response);
            })
        })
    })

    // router.get('/acura', (req, res) => {
    //     connection((db) => {
    //         db.collection('vehical').find({"car" : "Acura"}).toArray().then((vehical) => {
    //             response.data = vehical;
    //             res.json(response);
    //         })
    //     })
    // })
    module.exports = router;