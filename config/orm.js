const connection = require("./connection");

const orm = {
  all: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  }
};
module.exports = orm;
