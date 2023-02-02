// Do not call this schema, it is only used as a temp


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempSchema = new Schema({
    
});

const Temp = mongoose.model('Temp', tempSchema);

module.exports = Temp; 