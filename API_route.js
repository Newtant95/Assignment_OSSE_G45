// Initialize express router
const router = require('express').Router();
const controller = require('./studentController');
// Set default API response

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub dfdf with love!'
    });
});
router.post('/student', controller.create);

router.get('/students', controller.getAllStudents)

// Export API routes
module.exports = router;