const Student = require('./StudentModel');

exports.create = async (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body)
        return res.status(400).send({
            message: "Student can not be empty"
        });

    // Create a student 
    const student = new Student({
        name: req.body.name,
        studentId: req.body.studentId,
        email: req.body.email,
        gender: req.body.gender,
        mobile: req.body.mobile,
    });

    // Save student in the database
    try {
        const result = await student.save();
        res.send(result);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    }
}

exports.getAllStudents = async (req, res) => {
    // Get all student in the database
    try {
        const result = await Student.find();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send({

            message: err.message || "Some error occurred while retriving the student details."
        });
    }
}

exports.getStudent = async (req, res) => {

}


exports.update = async (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body)
        return res.status(400).send({
            message: "Student can not be empty"
        });

    // Create a student 
    const student = new Student({
        name: req.body.name,
        studentId: req.body.studentId,
        email: req.body.email,
        gender: req.body.gender,
        mobile: req.body.mobile,
    });

    // Save student in the database
    try {
        const result = await student.save();
        res.send(result);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    }
}