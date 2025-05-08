const Restaurant = require('../models/restaurantModel');

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

    createRestaurant(req, res) {
        const { name, phone, password, category_id } = req.body;
        if (!name || !phone || !password || !category_id) {
            return res.status(400).json({ message: "name, phone, password and category_id are required." });
        }

        Restaurant.create({ name, phone, password, category_id }, (err, result) => {
            if (err) return res.status(500).json({ message: "Error creating Restaurant" });
            res.status(201).json({ message: "Restaurant Created", restaurantId: result.lastID });
        });
    },

    deleteRestaurantById(req, res) {
        Restaurant.deleteById(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Restaurant Deleted" });
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
            stars : stars || undefined
        };

        Restaurant.update(id, updateRestaurant, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.changes === 0) {
                return res.status(400).json({ message: "Restaurant not found or no fields updated" });
            }
            res.json({ message: "Restaurant updated", restaurantId: id });
        });
    }
}