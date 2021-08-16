const express = require('express');
const app = express();
const PORT = 3001;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/register", (req, res)=>{
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h1>Hello ${fullName}! Your are just ${age} years old.</h1>`);
    
});

// app.post("/user", (req, res)=>{
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`Welcome ${name}! You are ${age}.`);
    
// });

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});