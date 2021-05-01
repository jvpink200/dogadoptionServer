//for all documents in the dogItems collection

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const dogItem = mongoose.model('DogItem', dogItemSchema); //creates a Model named DogItem

module.exports = dogItem;