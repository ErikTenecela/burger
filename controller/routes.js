const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
router.get("/", (req, res) => {
  burger.all(function(burger_data) {
    console.log(burger_data);
    res.render("index", { burger_data });
  });
});

router.put("/burgers/update", (req, res) => {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create", (req, res) => {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

module.exports = router;
