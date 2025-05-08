const db = require('../database/database');

module.exports = {
    getAll(callback) {
        db.all("SELECT * FROM users", callback);
    },

    getById(id, callback) {
        db.get("SELECT * FROM users WHERE id = ?", [id], callback);
    },

    create(user, callback) {
        const { name, email, phone, password } = user;
        const stmt = db.prepare("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)");
        stmt.run([name, email, phone, password], function(err) {
            callback(err, this);
        });
        stmt.finalize();
    },

    deleteById(id, callback) {
        const stmt = db.prepare("DELETE FROM users WHERE id = ?");
        stmt.run([id], function(err) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { changes: this.changes });
            }
        });
        stmt.finalize();
    },

    update(id, user, callback) {
        const { name, email, phone, password } = user;
        
        let sql = "UPDATE users SET ";
        const updates = [];
        const params = [];

        if (name) {
            updates.push("name = ?");
            params.push(name);
        }
        if (email) {
            updates.push("email = ?");
            params.push(email);
        }
        if (phone) {
            updates.push("phone = ?");
            params.push(phone);
        }
        if (password) {
            updates.push("password = ?");
            params.push(password);
        }

        if (updates.length === 0) {
            return callback(new Error("No fields to update"), null);
        }

        sql += updates.join(", ") + " WHERE id = ?";
        params.push(id);

        db.run(sql, params, function(err) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { changes: this.changes });
            }
        });
    }
};