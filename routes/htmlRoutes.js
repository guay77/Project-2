var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Example.findAll({}).then(function(clothesSwitch_db) {
            res.render("index", {
                msg: "Welcome!",
                examples: "clothesSwitch_db"
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function(clothesSwitch_db) {
            res.render("example", {
                examples: "clothesSwitch_db"
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};