const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "Primeiro",
            message: "Tarefa 1"
        },
        {
            title: "Segundo",
            message: "Tarefa 2"
        },
        {
            title: "Terceiro",
            message: "Tarefa 3"
        },
        {
            title: "Quarto",
            message: "Tarefa 4"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML"

    res.render("pages/index", {
        messagesHome: items,
        subtitle: subtitle
    });
});

app.get("/about", function(req, res){
    res.render("pages/about");
});

app.listen(8080);
console.log('Executando na porta 8080')