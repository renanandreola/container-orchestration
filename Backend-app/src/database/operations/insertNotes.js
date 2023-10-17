const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
const ACCESS_DB = require('../../config/envDB')
const NotesScheema = require('../../database/Schemas/Notes');

const URI = "mongodb+srv://" + ACCESS_DB.DB_Credentials.Username + ":" + ACCESS_DB.DB_Credentials.Password + "@clustercontainer.jvmcqej.mongodb.net/notes?retryWrites=true&w=majority";

const Notes = mongoose.model('Notes', NotesScheema);

async function insertNotes(newNote) {
    return new Promise(async (resolve, reject) => {

        const client = new MongoClient(URI, { 
            // useUnifiedTopology: true
        });

        try {
            await client.connect();

            let user = new Notes(newNote);
            
            const database = client.db('notes');
            const collection = database.collection('notes');

            const result = await collection.insertOne(user);
            
            console.log('Note saved with success:', result.insertedId);
            
            resolve(result);

        } catch (error) {
            console.error('Error on save note:', error);
            reject(error);

        } finally {
            await client.close();
        }
    });
}

module.exports = insertNotes;