const Restaurant = require('../models/restaurantModel');
const bcrypt = require('bcrypt');

module.exports = {
    getAllRestaurants(req, res) {
        Restaurant.getAll((err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    },

    getRestaurantById(req, res) {
        Restaurant.getById(req.params.id, (err, row) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!row) return res.status(400).json({ message: "Restaurant not found" });
            res.json(row);
        });
    },

    getPopularRestaurants(req, res) {
        Restaurant.getPopular((err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    },

    getRestaurantsByCategory(req, res) {
        Restaurant.getByCategory(req.params.categoryId, (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    },

    createRestaurant(req, res) {
        const { name, phone, password, category_id } = req.body;
        if (!name || !phone || !password || !category_id) {
            return res.status(400).json({ message: "name, phone, password and category_id are required." });
        }

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ message: 'Error encrypting password.' });

            Restaurant.create({ name, phone, password: hashedPassword, category_id }, (err, result) => {
                if (err) return res.status(500).json({ message: "Error creating Restaurant" });
                res.status(201).json({ message: "Restaurant Created", restaurantId: result.lastID });
            });
        });
    },

    deleteRestaurantById(req, res) {
        Restaurant.deleteById(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: "Restaurant Deleted" });
        });
    },

    updateRestaurant(req, res) {
        const { name, phone, password, category_id, stars } = req.body;
        const { id } = req.params;

        if (!name && !phone && !password && !category_id && !stars) {
            return res.status(400).json({ message: "At least one field is required for update" });
        }

        const updateRestaurant = {
            name: name || undefined,
            phone: phone || undefined,
            password: password || undefined,
            category_id: category_id || undefined,
            stars: stars || undefined
        };

        if (password) {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) return res.status(500).json({ message: 'Error encrypting password.' });
                updateRestaurant.password = hashedPassword;

                Restaurant.update(id, updateRestaurant, (err, result) => {
                    if (err) return res.status(500).json({ error: err.message });
                    if (result.changes === 0) {
                        return res.status(400).json({ message: "Restaurant not found or no fields updated" });
                    }
                    res.json({ message: "Restaurant updated", restaurantId: id });
                });
            });
        } else {
            Restaurant.update(id, updateRestaurant, (err, result) => {
                if (err) return res.status(500).json({ error: err.message });
                if (result.changes === 0) {
                    return res.status(400).json({ message: "Restaurant not found or no fields updated" });
                }
                res.json({ message: "Restaurant updated", restaurantId: id });
            });
        }
    },

    getRestaurantProducts(req, res) {
        Restaurant.getProducts(req.params.id, (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    },

    getFavoriteRestaurants(req, res) {
        Restaurant.getFavorites(req.user.id, (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    },

    toggleFavorite(req, res) {
        Restaurant.toggleFavorite(req.user.id, req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: result.isFavorite ? "Restaurante adicionado aos favoritos" : "Restaurante removido dos favoritos" });
        });
    }
};
