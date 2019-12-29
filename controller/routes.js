const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
router.get("/", (req, res) => {
  burger.all(function(burger_data) {
    console.log(burger_data);
    res.render("index", { burger_data });
  });
});

router.put("/burger/update", (req, res) => {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
