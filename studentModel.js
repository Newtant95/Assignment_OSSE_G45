var mongoose = require('mongoose');



// Setup schema
var studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,


});

module.exports = mongoose.model("student", studentSchema);