const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    "firstName": {
        type: String,
        require: true
    },
    "lastName": {
        type: String,
        require: true
    },
    "username": {
        type: String,
        require: true
    },
    "password": {
        type: String,
        require: true
    },
    "role": {
        type: String,
        default: 'Instructor'
    },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account; 