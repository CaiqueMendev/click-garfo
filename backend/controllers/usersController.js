const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const SECRET = 'key';

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

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ message: 'Error encrypting password.' });

            User.create({ name, email, phone, password: hashedPassword }, (err, result) => {
                if (err) return res.status(500).json({ message: "Error creating user" });
                res.status(201).json({ message: "User Created", userId: result.lastID });
            });
        })

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
            phone: phone || undefined
        };

        if (password) {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) return res.status(500).json({ message: 'Error encrypting password.' });

                updateUser.password = hashedPassword;
                
                User.update(id, updateUser, (err, result) => {
                    if (err) return res.status(500).json({ error: err.message });
                    if(result.changes === 0) {
                        return res.status(400).json({ message: "User not found or no fields updated" });
                    }
                    res.json({ message: "User updated", userId: id });
                });
            })
        } else {
            User.update(id, updateUser, (err, result) => {
                if (err) return res.status(500).json({ error: err.message });
                if (result.changes === 0) {
                    return res.status(400).json({ message: "User not found or no fields updated" });
                }
                res.json({ message: "User updated", userId: id });
            });
        }

    },

    loginUser(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'email and password are required.' });
        }

        User.findByEmail(email, (err, user) => {
            if (err) return res.status(500).json({ message: 'Internal error.' });
            if (!user) return res.status(401).json({ message: 'User not found.' });

            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ id: user.id, email:user.email }, SECRET, { expiresIn: '1h' });
                    return res.json({ message: 'Success', token });
                } else {
                    return res.status(401).json({ message: 'Wrong password.' });
                }
            });
        });
    }
};