const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companies.controller');
const authMiddleware = require('../middlewares/auth.middleware.js');


router.get('/create', authMiddleware.authenticateUser, companiesController.create);
router.post('/docreate', authMiddleware.authenticateUser, companiesController.doCreate);
router.get('/edit/:id', authMiddleware.authenticateUser, companiesController.edit);
router.post('/:id/doedit', authMiddleware.authenticateUser, companiesController.doEdit);
router.post('/:id/delete', authMiddleware.authenticateUser, companiesController.delete);
router.get('/', authMiddleware.authenticateUser, companiesController.list);
router.get('/:id', authMiddleware.authenticateUser, companiesController.get);

module.exports = router;