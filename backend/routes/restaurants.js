const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantsController');

router.get('/', controller.getAllRestaurants);
router.get('/:id', controller.getRestaurantById);
router.post('/create', controller.createRestaurant);
router.delete('/:id', controller.deleteRestaurantById);
router.put('/:id', controller.updateRestaurant);

module.exports = router;