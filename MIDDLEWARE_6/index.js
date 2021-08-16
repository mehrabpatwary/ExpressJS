const express = require('express');
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {

    req.currentTime = new Date(Date.now());
    next();

}
app.use(myMiddleWare);

app.use((req,res,next) => {
    res.send("404 Bad url request");
});

app.use((err,req,res,next) => {
    res.status(500).send("Something broke!");
})

app.get("/", (req, res)=>{
    console.log("I am home " + req.currentTime);
    res.send("<h1>Welcome Home</h1>");
});
app.get("/about", (req, res)=>{
    console.log("I am about " + req.currentTime);
    res.send("<h1>Welcome About</h1>");
});

app.listen(PORT, ()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
});