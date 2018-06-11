var path = require("path");

module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/index.html"));
})

app.get("/user_registration", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/user_registration.html"));

})







};