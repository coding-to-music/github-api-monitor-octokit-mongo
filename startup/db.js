const mongoose = require("mongoose");

let db = process.env.MONGO_URI;
module.exports = function () {
  mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));
};
