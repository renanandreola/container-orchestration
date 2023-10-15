const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// const database_init = require('./src/database/mongodb');
// database_init();

app.use("/container-orchestration", require("./src/server"));

const port = 443;
app.listen(port, () => {
    console.log("Listen on port: " + port);
});