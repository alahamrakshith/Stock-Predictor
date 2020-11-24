const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const expressLayouts = require('express-ejs-layouts');

router.use(expressLayouts);

router.route('/')
    .get(dashboardController.index);

module.exports = router;