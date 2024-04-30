const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    //avatar: Buffer,
    name: String,
    surname: String,
    age: Number,
    email: String,
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);

module.exports = User;