const express = require("express");
const app = express();
var caminho = require("./rotas/rota");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", 'ejs');

app.use("/ir", caminho);

app.listen("2000", function() {
    console.log("Funfo");
})