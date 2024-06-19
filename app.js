const express = require("express");
const app = express();

app.use(express.json());

const users = require('./controllers/users');
app.use('/',users);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});


module.exports=roouter;