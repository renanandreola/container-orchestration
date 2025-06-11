const { MongoClient, ServerApiVersion } = require('mongodb');
const ACCESS_DB = require('../config/envDB')
const uri = "";

const client = new MongoClient(uri, { 
    serverApi: ServerApiVersion.v1 
});

const databaseConn = async () => {
    try {
        await client.connect().then(() => {
            console.log('Connected successfully to MongoDB');
        }).catch((err) => {
            console.log('Error on connect to MongoDB: ', err);
        });
    } catch (err) {
        client.close();
        console.log("Error on connect database: ", err);
    }
}

module.exports = databaseConn;
