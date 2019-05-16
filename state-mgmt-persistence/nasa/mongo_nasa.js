"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/nasa";

MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        console.error(`Failed to connect: ${MONGODB_URI}`);
        throw err;
    }

    console.log(`Connected to mongodb: ${MONGODB_URI}`);

    function getPeople(callback) {
        db.collection("people_in_space").find().toArray(callback);
    }

    getPeople((err, people) => {
        if (err) throw err;

        console.log("Each person:");
        for (let person of people) {
            console.log(person);
        }

        db.close();
    });
})