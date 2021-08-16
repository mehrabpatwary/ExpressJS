const express = require('express');
const app = express();
const userRouter = require('./routes/user.route');

app.use("/api/user", userRouter);

app.use("/register", (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html");
    // res.status(200).json({
    //     message: "Hi i'm register page",
    //     statusCode: 200,
    // });
    // res.redirect("/login");
});

app.use("/login", (req, res)=>{
    // res.cookie("name", "Mehrab");
    // res.cookie("age", 25);
    res.clearCookie("name");
    res.append("id", 172);
    res.end();
});

app.use("/", (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html");
});

app.use((req, res)=>{
    res.send("<h1>404 !!! Not a valid url</h1>");
})


module.exports = app;