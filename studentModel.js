var mongoose = require('mongoose');



// Setup schema
var studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },


});

module.exports = mongoose.model("student", studentSchema);