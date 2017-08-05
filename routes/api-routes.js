var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/", function(req, res) {
        db.Burger.findAll({})
            .then(function(dbBurger) {
                var hbsObject = {
                    burgers: dbBurger
                }
                res.render("index", hbsObject);
            });
    });

    app.post("/", function(req, res) {
        db.Burger.create({
            burger_name: req.body.name,
            devoured: false
        }).then(function(dbBurger) {
            res.redirect("/");
        })
    });

    app.put("/:id", function(req, res) {
        db.Burger.update({
          devoured: true
        },{
          where:{
            id: req.params.id
          }
        }).then(function(dbBurger){
          res.redirect("/");
        })
    });
};