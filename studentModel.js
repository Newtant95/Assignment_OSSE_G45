var mongoose = require('mongoose');



// Setup schema
var studentSchema = mongoose.Schema({
    name: {
        type: String,
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
    mobile: String,
    create_date: {
        type: Date,
        default: string
    }

});

module.exports = mongoose.model("student", studentSchema);