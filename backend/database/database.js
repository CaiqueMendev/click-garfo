const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT, 
        email TEXT UNIQUE, 
        phone TEXT, 
        password TEXT, 
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
        )`);

    db.run(`CREATE TABLE IF NOT EXISTS restaurants (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT, 
        phone TEXT, 
        password TEXT, 
        category_id INTEGER, 
        stars FLOAT, 
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
        )`)

    db.run(`CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT, 
        subtitle TEXT, 
        description TEXT, 
        photo TEXT 
        )`)

    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT, 
        subtitle TEXT, 
        description TEXT, 
        photo TEXT, 
        price FLOAT, 
        category_id INTEGER, 
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
        )`)

    db.run(`CREATE TABLE IF NOT EXISTS carts (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        products_id
        )`)
});

module.exports = db;