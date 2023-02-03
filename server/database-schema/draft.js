const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const draftSchema = new Schema({
    "courseCode": {
        type: String,
        require: true
    },
    "year": {
        type: String,
        require: true
    },
});

const Draft = mongoose.model('Draft', draftSchema);

module.exports = Account; 