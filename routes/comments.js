const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments.controler');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.post('/comment', authMiddleware.authenticateUser, commentsController.doCreate);

module.exports = router;