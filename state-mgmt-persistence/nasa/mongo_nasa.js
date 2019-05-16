"use strict"

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/nasa";

MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        console.log(`Failed to connect: ${MONGODB_URI}`)
        throw err;
    }
    console.log(`Connected to mongodb: ${MONGODB_URI}`)

    db.collection("people").find().toArray((err, result) => {
        if (err) {
            throw err
        }

        console.log("find result", result)
        db.close()
    })

})