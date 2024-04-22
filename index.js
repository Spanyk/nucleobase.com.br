const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    res.send("Olá mundo");
}); 

app.listen(3000, () => {
    console.log("Escutando na porta 3000!")
})