const Post = require('../models/Posts')

const PostController = {
   // async createPost (req, res) {
   //     try {
   //         const post = await Post.create({...req.body})
   //     } catch(error) {
   //         console.log(error)
   //     }
   // },
    async getAll (req, res) {
        try {
            const post = await Post.find()
        } catch(error) {
            console.log (error)
        }
    },
    async updatePost (req, res) {
        
    }
}

module.exports = PostController