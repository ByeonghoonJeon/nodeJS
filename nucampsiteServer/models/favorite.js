const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const favoriteSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  campsites: [{ type: Schema.Types.ObjectId, ref: "Campsite" }],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Favorite", favoriteSchema);
