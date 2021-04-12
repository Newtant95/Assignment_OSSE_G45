var mongoose = require('mongoose');



// Setup schema
var studentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    studentId: {
        type: String,
    }

});

module.exports = mongoose.model("student", studentSchema);