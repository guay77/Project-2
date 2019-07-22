var ClothesItem = require("../models");

var Loan = require(".../models");
var User = require(".../models");

// Routes
// =============================================================
module.exports = function(app) {
    // Get all items
    app.get("/api/clothesItem", function(req, res) {
        db.ClothesItem.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    // Get an item by id
    app.get("/api/clothesItem/:id", function(req, res) {
        db.ClothesItem.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    // Get an item by size.
    app.get("/api/clothesItem/:size", function(req, res) {
        db.ClothesItem.findAll({
            where: {
                size: req.params.size
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    // Get all items by 
    app.get("/api/clothesItem/:itemType", function(req, res) {
        db.ClothesItem.findAll({
            where: {
                itemType: req.params.itemType
            }
        }).then(function(results) {
            res.json(results);
        });
    });


    app.get("/api/clothesItem/:availability", function(req, res) {
        db.ClothesItem.findAll({
            where: {
                availability: req.params.availability ===
            },
            order: [
                ["DESC"]
            ]
        }).then(function(results) {
            res.json(results);
        });
    });



    // Add a book
    app.post("/api/clothesItem/new", function(req, res) {
        console.log("Clothes Data:");
        console.log(req.body);
        db.ClothesItem.create({
            description: req.body.description,
            itemType: req.body.itemType,
            size: req.body.size,
            availability: req.body.availability
        }).then(function(results) {
            res.json(results);
        });
    });

    // Delete a book
    app.delete("/api/clothesItem/:id", function(req, res) {
        console.log("Clothes Item ID:");
        console.log(req.params.id);
        db.ClothesItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.end();
        });
    });
};



app.get("/api/Loan", function(req, res) {
    db.Loan.findAll({}).then(function(results) {
        res.json(results);
    });
});

// Get an item by id
app.get("/api/Loan/:id", function(req, res) {
    db.Loan.findAll({
        where: {
            id: req.params.id
        }
    }).then(function(results) {
        res.json(results);
    });
});

// Get an item by size.
app.get("/api/Loan/:size", function(req, res) {
    db.Loan.findAll({
        where: {
            size: req.params.size
        }
    }).then(function(results) {
        res.json(results);
    });
});

// Get all items by 
app.get("/api/Loan/:itemType", function(req, res) {
    db.Loan.findAll({
        where: {
            itemType: req.params.itemType
        }
    }).then(function(results) {
        res.json(results);
    });
});


app.get("/api/Loan/:availability", function(req, res) {
    db.Loan.findAll({
        where: {
            itemType: req.params.availability
        }
    }).then(function(results) {
        res.json(results);
    });
});



app.get("/api/Loan/:email", function(req, res) {
    db.Loan.findAll({
        where: {
            itemType: req.params.email
        }
    }).then(function(results) {
        res.json(results);
    });
});


app.get("/api/Loan/:address", function(req, res) {
    db.Loan.findAll({
        where: {
            itemType: req.params.address
        }
    }).then(function(results) {
        res.json(results);
    });
});

app.post("/api/Loan/new", function(req, res) {
    console.log("Loan Data:");
    console.log(req.body);
    db.ClothesItem.create({
        description: req.body.description,
        itemType: req.body.itemType,
        size: req.body.size,
        availability: req.body.availability,
        email: req.body.email,
        address: req.body.address

    }).then(function(results) {
        res.json(results);
    });
});

// Delete a book
app.delete("/api/Loan/:id", function(req, res) {
    console.log("Clothes Item ID:");
    console.log(req.params.id);
    db.Loan.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.end();
    });
});


app.get("/api/User/:id", function(req, res) {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then(function(results) {
        res.json(results);
    });
});

// Get an item by size.
app.get("/api/User/:email", function(req, res) {
    db.User.findAll({
        where: {
            size: req.params.email
        }
    }).then(function(results) {
        res.json(results);
    });
});

// Get all items by 
app.get("/api/User/:address", function(req, res) {
    db.User.findAll({
        where: {
            itemType: req.params.address
        }
    }).then(function(results) {
        res.json(results);
    });
});


app.get("/api/User/:zipcode", function(req, res) {
    db.User.findAll({
        where: {
            itemType: req.params.zipcode
        }
    }).then(function(results) {
        res.json(results);
    });
});



app.get("/api/User/:city", function(req, res) {
    db.User.findAll({
        where: {
            itemType: req.params.city
        }
    }).then(function(results) {
        res.json(results);
    });
});


app.get("/api/User/:name", function(req, res) {
    db.User.findAll({
        where: {
            itemType: req.params.name
        }
    }).then(function(results) {
        res.json(results);
    });
});

app.get("/api/User/:lastname", function(req, res) {
    db.User.findAll({
        where: {
            itemType: req.params.lastname
        }
    }).then(function(results) {
        res.json(results);
    });
});




app.post("/api/User/new", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    db.User.create({
        id: req.body.id,
        email: req.body.email,
        address: req.body.address,
        availability: req.body.zipcode,
        city: req.body.city,
        name: req.body.name,
        lastname: req.body.lastname

    }).then(function(results) {
        res.json(results);
    });
});

// Delete a book
app.delete("/api/User/:id", function(req, res) {
    console.log("User by ID:");
    console.log(req.params.id);
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.end();
    });
});