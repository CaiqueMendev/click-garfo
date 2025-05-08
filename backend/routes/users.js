const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.post('/create', controller.createUser);
router.delete('/:id', controller.deleteUserById);
router.put('/:id', controller.updateUser);

module.exports = router;