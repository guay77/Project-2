var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("addpage", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });

    app.get("/rent", (req, res) => {
        res.sendFile("rentpage.html", {
            root: "./public"
        })
    })

    app.get("/add", (req, res) => {
        res.sendFile("addpage.html", {
            root: "./public"
        })
    })


    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    //app.get("*", function(req, res) {
    //  console.log(process.cwd());
    //  res.render("404");
    //});
};