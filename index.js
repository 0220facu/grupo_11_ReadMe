
const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log('Servidor Levantado. http//localhost:3000');
});
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/html/index.html');
});
app.get('/articulo', (req,res) => {
    res.sendFile(__dirname + '/html/articulo.html');
});
app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/html/IniciarSesion.html');
});
app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/html/Registrarse.html');
});
app.get('/carrito', (req,res) => {
    res.sendFile(__dirname + '/html/carrito.html');
});