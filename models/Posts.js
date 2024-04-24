const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userName: String,
    content: String
}, { timestamps: true});

const Post = mongoose.model('Post', PostSchema)

module.exports = Post;