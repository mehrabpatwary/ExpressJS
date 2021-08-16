const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.get("/circle", (req, res) => {
    res.sendFile(__dirname+"/circle.html");
});

app.get("/triangle", (req, res) => {
    res.sendFile(__dirname+"/triangle.html");
});
app.post("/triangle", (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    const result = 0.5 * base * height;
    res.send(`<h1>Area of Triangle is : ${result}</h1>`);
});
app.post("/circle", (req, res) => {
    const radius = req.body.radius;
    const result = Math.PI * radius * radius;
    res.send(`<h1>Area of Circle is : ${result}</h1>`);
});

app.listen(PORT, (req, res) => {
    console.log(`Server running at http://localhost:${PORT}`);
})