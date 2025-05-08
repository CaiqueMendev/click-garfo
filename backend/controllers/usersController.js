const User = require('../models/userModel');

module.exports = {
    getAllUsers(req, res) {
        User.getAll((err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    },

    getUserById(req, res) {
        User.getById(req.params.id, (err, row) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!row) return res.status(400).json({ message: "User not found" });
            res.json(row);
        });
    },

    createUser(req, res) {
        const { name, email, phone, password } = req.body;
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: "name, email, phone, and password are required." });
        }

        User.create({ name, email, phone, password }, (err, result) => {
            if (err) return res.status(500).json({ message: "Error creating user" });
            res.status(201).json({ message: "User Created", userId: result.lastID });
        });
    },

    deleteUserById(req, res) {
        User.deleteById(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "User Deleted" });
        });
    },

    updateUser(req, res) {
        const { name, email, phone, password } = req.body;
        const { id } = req.params;

        if (!name && !email && !phone && !password) {
            return res.status(400).json({ message: "At least one field is required for update" });
        }

        const updateUser = {
            name: name || undefined,
            email: email || undefined,
            phone: phone || undefined,
            password: password || undefined
        };

        User.update(id, updateUser, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if(result.changes === 0) {
                return res.status(400).json({ message: "User not found or no fields updated" });
            }
            res.json({ message: "User updated", userId: id });
        });
    }
};