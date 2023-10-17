const express = require("express");
const router = express.Router();

const insertNotes = require('./database/operations/insertNotes');
const getNotes = require('./database/operations/getNotes');

// Testing route
router.get("/testing", async (req, res) => {
    console.log("Chatterbot test routing in running!");

    return res.json({ 
        status: 200, 
        message: "test routing in running!" 
    });
});

// Notes
router.post('/note', async (req, res) => {
    async function insertNewNotes() {
        console.log(req.body);
        try {
            const resultOpNewNotes = await insertNotes(req.body);
    
            if (resultOpNewNotes && resultOpNewNotes.insertedId) {
                res.send({
                    status: 200
                });
            } else {
                res.send({
                    status: 500
                });
            }
    
        } catch (error) {
            console.log("Error at insertNewNotes: ", error);
        }
    }
  
    insertNewNotes();
});

// Get all notes
router.get('/allNotes', async (req, res) => {
    async function getAllNotes() {
        try {
            const resultOpGetNotes = await getNotes();
    
            if (resultOpGetNotes && resultOpGetNotes.length > 0) {
                return res.json({ 
                    status: 200, 
                    notes: resultOpGetNotes,
                    message: "Get all notes ok" 
                });
            } else {
                return res.json({ 
                    status: 500, 
                    message: "Error on get all notes" 
                });
            }
    
        } catch (error) {
            console.log("Error at getAllNotes: ", error);
        }
    }
  
    getAllNotes();
});

module.exports = router;