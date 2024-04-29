const Post =  require('../models/Posts')

const Controller = {
    async createPost (req, res) {
        try {
            const post = await Post.create({...req.body})
            res.status(201).send(post)
        } catch (error) {
            console.log(error)
        }
    },
    async getAll (req, res) {
        try {
            const post = await Post.find()
            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    async updatePost (req, res) {
        try {
            const id = req.params._id
            const post = {...req.body} 
            const update = await Post.findByIdAndUpdate(id, post)
            res.json({mensaje:"Post updated", post})
        } catch(error) {
            console.log(error)
        } 
    },
    async deletePost (req, res) {
        try {
            const id = req.params._id
            const post = await Post.findByIdAndDelete(id)
            if(!post) {
                return res.json(404).json({message:"Post doesn't exist"})
            }
            res.json({message:"Post has been deleted", post})
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = Controller