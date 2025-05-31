const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');
const restaurantRoutes = require('./routes/restaurants');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/cart');
const ratingsRoutes = require('./routes/ratings');
const orderCategoryRoutes = require('./routes/orderCategories');
const paymentMethodRoutes = require('./routes/paymentMethods');
const categoryRoutes = require('./routes/categories');
const { initializeDatabase } = require('./database/database');

const app = express();
const port = process.env.PORT || 3000;

console.log('Iniciando servidor...');

// Configuração do CORS
app.use(cors());

app.use(bodyParser.json());

// Middleware para log de requisições
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

// Rotas
app.use('/users', userRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/cart', cartRoutes);
app.use('/ratings', ratingsRoutes);
app.use('/order-categories', orderCategoryRoutes);
app.use('/payment-methods', paymentMethodRoutes);
app.use('/categories', categoryRoutes);

// Inicializar banco de dados e iniciar servidor
async function startServer() {
    try {
        console.log('Inicializando banco de dados...');
        await initializeDatabase();
        console.log('Banco de dados inicializado com sucesso!');

        // Iniciar servidor apenas se não estiver em ambiente de teste
        if (process.env.NODE_ENV !== 'test') {
            app.listen(port, () => {
                console.log(`Servidor rodando na porta ${port}`);
            });
        }
    } catch (error) {
        console.error('Erro ao inicializar servidor:', error);
        process.exit(1);
    }
}

startServer();

module.exports = app;