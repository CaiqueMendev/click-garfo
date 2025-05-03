const db = require('../database/database');

module.exports = {
    getAll(callback) {
        db.all("SELECT * FROM restaurants", callback);
    },

    getById(id, callback) {
        db.get("SELECT * FROM restaurants WHERE id = ?", [id], callback);
    },

    create(restaurant, callback) {
        const { name, category, adress, phone, cnpj } = restaurant;
        const stmt = db.prepare("INSERT INTO restaurants (name, category, adress, phone, cnpj) VALUES (?, ?, ?, ?, ?)");
        stmt.run([name, category, adress, phone, cnpj], function(err) {
            callback(err, this);
        });
    },

    update(restaurant, callback) {
        const { id, name, category, adress, phone, cnpj } = restaurant;
        const stmt = db.prepare("UPDATE restaurants SET name = ?, category = ?, adress = ?, phone = ?, cnpj = ? WHERE id = ?");
        stmt.run([name, category, adress, phone, cnpj, id], function(err) {
            callback(err, this);
        });
    },

    delete(id, callback) {
        const stmt = db.prepare("DELETE FROM restaurants WHERE id = ?", [id], callback);
    }
}