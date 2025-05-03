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

    
};