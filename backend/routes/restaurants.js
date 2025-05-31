const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurantsController');
const authMiddleware = require('../middleware/authMiddleware');

// Rotas públicas
router.get('/', restaurantsController.getAllRestaurants);
router.get('/popular', restaurantsController.getPopularRestaurants);
router.get('/category/:categoryId', restaurantsController.getRestaurantsByCategory);
router.get('/:id', restaurantsController.getRestaurantById);
router.get('/:id/products', restaurantsController.getRestaurantProducts);

// Rotas de favoritos
router.get('/favorites', authMiddleware, restaurantsController.getFavoriteRestaurants);
router.post('/favorites/:id', authMiddleware, restaurantsController.toggleFavorite);

// Rotas protegidas
router.post('/', authMiddleware, restaurantsController.createRestaurant);
router.put('/:id', authMiddleware, restaurantsController.updateRestaurant);
router.delete('/:id', authMiddleware, restaurantsController.deleteRestaurantById);

module.exports = router;