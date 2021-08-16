const express = require('express');
const app = express();
const PORT = 3001;

// app.get("/", (req, res) => {
//     const {id, name} = req.query;
//     res.send(`Student name is: ${name}, id is : ${id}`);
// }); //Query


// app.get("/userId/:id/userAge/:age", (req, res) => {
//     const {id, age} = req.params;
//     res.send(`Student id is: ${id}, age is : ${age}`);
// }); // Route

app.get("/", (req, res) => {
    const id = req.header('id');
    const age = req.header('age');
    res.send(`Student id is: ${id}, age is : ${age}`);
}); // header

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});