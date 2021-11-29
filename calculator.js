// Importing all the module that we'll use in this project
const express = require("express");
// const bodyParser = require("body-parser")
var app = express();

// allows us to access the variables in the body
app.use(express.urlencoded({
    extended: true
}));

// the GET request from the client
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// the POST request from the client
app.post('/index.html', (req, res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var ans = num1 + num2;

    res.send("The answer is " + ans);

    // console.log(req.body);
    // res.send("Thanks for sending that!");
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight + height;

    res.send("Your BMI is " + bmi);
});
// Makes sure our server is back online
app.listen(3000, (req, res) => {
    // res.send("<p>Hello world</p>");
});