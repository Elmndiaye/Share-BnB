var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var db = require("./models");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Hamsters communicating with server via port " + PORT);
    });
});
