const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseOutlineSchema = new Schema({
    "courseCode": {
        type: String,
        require: true
    },
    "year": {
        type: String,
        require: true
    }
    
});

const CourseOutline = mongoose.model('CourseOutline', courseOutlineSchema);

module.exports = CourseOutline; 