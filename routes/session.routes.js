const express = require('express');
const router = express.Router();
const sessionsController = require('../controllers/session.controller');

const authMiddleware = require('../middlewares/auth.middleware')

router.get(
  '/create',
  authMiddleware.userNotAuthenticated,
  sessionsController.create
);

router.post(
  '/create',
  authMiddleware.userNotAuthenticated,
  sessionsController.doCreate
);

router.post(
  '/delete',
  authMiddleware.authenticateUser,
  sessionsController.delete
);

module.exports = router;