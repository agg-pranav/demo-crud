const mongoose = require('mongoose');
const debug = require('debug')('model:alien');

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    tech: {
        type: String,
        require: true
    },
    sub: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Aliens',alienSchema);