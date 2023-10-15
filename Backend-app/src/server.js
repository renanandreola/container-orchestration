const express = require("express");
const router = express.Router();

// Testing route
router.get("/testing", async (req, res) => {
    console.log("Chatterbot test routing in running!");

    return res.json({ 
        status: 200, 
        message: "test routing in running!" 
    });
});

module.exports = router;