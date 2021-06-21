var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
var homeRouter = require("./routes/home");
app.use("/", homeRouter);

app.use(bodyParser.urlencoded({
    extended: true
})); //setting body parser to get HTML form data
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.writeHead(200, {
        'Permission-Policy': `otp-credentials=(self "https://web-otp-demo.herokuapp.com")`,
    });
    return next();
});

app.listen(3000, function () { //setting up the server on port PORT
    console.log("server started")
});