const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const favoriteSchema = new Schema({
  user: {
    type: String,
    default: "",
  },
  campsites: {
    type: String,
    default: "",
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Favorite", favoriteSchema);
