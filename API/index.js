const express = require("express");
const app = express();

app.get('/gay', (req, res) => { // Get&Post
    res.send("Hello ")
})

app.listen(3000);