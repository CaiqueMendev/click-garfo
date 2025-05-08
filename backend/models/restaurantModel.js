const db = require('../database/database');

module.exports = {
    getAll(callback) {
        db.all("SELECT * FROM restaurants", callback);
    },

    getById(id, callback) {
        db.get("SELECT * FROM restaurants WHERE id = ?", [id], callback);
    },

    create(restaurant, callback) {
        const { name, phone, password, category_id } = restaurant;
        const stmt = db.prepare("INSERT INTO restaurants (name, phone, password, category_id) VALUES (?, ?, ?, ?)");
        stmt.run([name, phone, password, category_id], function(err) {
            callback(err, this);
        });
        stmt.finalize();
    },

    deleteById(id, callback) {
        const stmt = db.prepare("DELETE FROM restaurants WHERE id = ?");
        stmt.run([id], function(err) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { changes: this.changes });
            }
        });
        stmt.finalize();
    },

    update(id, restaurant, callback) {
        const { name, phone, password, category_id, stars } = restaurant;
        
        let sql = "UPDATE restaurants SET ";
        const updates = [];
        const params = [];

        if (name) {
            updates.push("name = ?");
            params.push(name);
        }
        if (phone) {
            updates.push("phone = ?");
            params.push(phone);
        }
        if (password) {
            updates.push("password = ?");
            params.push(password);
        }
        if (category_id) {
            updates.push("category_id = ?");
            params.push(category_id);
        }
        if (stars) {
            updates.push("stars = ?");
            params.push(stars);
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
}