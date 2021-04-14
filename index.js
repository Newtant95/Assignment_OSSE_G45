// Import express
let express = require('express')
// Import routes
//let apiRoutes = require("./api-routes")
// Import Mongoose
let mongoose = require('mongoose');

const bodyParser = require('body-parser');

// Initialize the app
let app = express();

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//DB Connect Optimized

mongoose.connect('mongodb://localhost/student_management', { useNewUrlParser: true }).then(() => console.log("MongoDB connected...")).catch(() => console.log("not connected"));

//const db = mongoose.connection();


// Use Api routes in the App
app.use('/', apiRoutes)
// Setup server port
const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log("Running Student Management Api on port " + port);
});