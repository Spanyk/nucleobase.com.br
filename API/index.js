const express = require("express");
const app = express();


//Configurar Rotas da API
app.get('/gay', (req, res) => { // Get&Post
    res.send("Hello Gay!")
})

app.listen(3000);