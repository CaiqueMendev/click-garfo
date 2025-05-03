const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usersRoutes = require('./routes/users');

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('API esta funcionando');
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});