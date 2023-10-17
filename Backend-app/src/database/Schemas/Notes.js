const { Schema } = require('mongoose');

module.exports = new Schema({
    email: String,
    note: String
});