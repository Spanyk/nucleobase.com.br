const express = require("express");
const app = express();


//Configurar Rotas da API
app.get('/gay', (req, res) => { // Get&Post
    res.send("Hello ")
})

app.listen(3000);