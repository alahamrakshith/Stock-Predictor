const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController')


router.route('/')
    .get(defaultController.index)

router.route('/login')
    .get(defaultController.loginGET)
    .post(defaultController.loginPOST);

router.route('/signup')
    .get(defaultController.signupGET)
    .post(defaultController.signupPOST);

module.exports = router;