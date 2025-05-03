const db = require("../database/database");


module.exports = {
    getAll(callback) {
        db.all("SELECT * FROM orders", callback);
    },

    getById(id, callback) {
        db.get("SELECT * FROM orders WHERE id = ?", [id], callback);
    },

    create(order, callback) {
        const { userId, restaurantId, cartId } = order;
        const stmt = db.prepare("INSERT INTO orders (user_id, restaurant_id, cart_id) VALUES (?, ?, ?)");
        stmt.run([userId, restaurantId, cartId], function(err) {
            callback(err, this);
        });
    },

    update(order, callback) {
        const { id ,userId, restaurantId, cartId } = order;
        const stmt = db.prepare("UPDATE orders SET user_id = ?, restaurant_is = ?, cart_id = ? WHERE id = ?");
        stmt.run([userId, restaurantId, cartId, id], function(err) {
            callback(err, this);
        });
    },

    delete(id, callback) {
        
    }
}