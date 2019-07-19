app.post('/path', upload.single('avatar'), function(req, res, next) {


});

var express = require("express");

var router = express.Router();


var example = require("../models/example.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    example.all(function(data) {
        var hbsObject = {
            example: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/examples", function(req, res) {
    example.create([
        "", ""
    ], [
        req.body.name, req.body.sleepy
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/examples/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("", product);

    example.update({
        product: req.body.product
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/example/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;