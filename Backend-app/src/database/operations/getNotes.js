const { MongoClient } = require('mongodb');
const ACCESS_DB = require('../../config/envDB')

const URI = "mongodb+srv://" + ACCESS_DB.DB_Credentials.Username + ":" + ACCESS_DB.DB_Credentials.Password + "@clustercontainer.jvmcqej.mongodb.net/notes?retryWrites=true&w=majority";

async function getNotes() {
    return new Promise(async (resolve, reject) => {

        const client = new MongoClient(URI, { 
            useUnifiedTopology: true
        });

        try {
            await client.connect();
            
            const database = client.db('notes');
            const collectionNotes = database.collection('notes');

            const result = await collectionNotes.find().toArray();
   
            resolve(result);

        } catch (error) {
            console.error('Error on get actions:', error);
            reject(error);

        } finally {
            await client.close();
        }
    });
}

module.exports = getNotes;