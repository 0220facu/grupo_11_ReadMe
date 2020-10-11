const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=> {
    console.log('Servidor Levantado. http//localhost:3000');
});
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/html/index.html');
});