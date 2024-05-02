const Post =  require('../models/Posts')
const User = require('../models/Users')


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
    async getPostById (req, res) {
        try {
            const id = req.params._id
            const post = await Post.findById(id)
            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    async updatePost (req, res) {
        try {
            const id = req.params._id
            const post = {...req.body} 
            console.log("ID recibido:", id);
            console.log("Post recibido:", post);
            const update = await Post.findByIdAndUpdate(id, post,{new:true})
            console.log("Post actualizado en la base de datos:", update);
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
    }, 
    async createUser (req, res) {
        try {
            const user = await User.create({...req.body})
            res.status(201).send(user)
        } catch (error) {
            console.log(error)
        }
    },
    async getUserById (req, res) {
        try {
            const id = req.params._id
            const user = await User.findById(id)
            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }, 
    async updateUser (req, res) {
        try {
            const id = req.params._id
            const user = {...req.body} 
            const update = await User.findByIdAndUpdate(id, user,{new:true})
            res.json({mensaje:"User updated", user})
            console.log("ID recibido:", req.params._id);
        } catch(error) {
            console.log(error)
        } 
   },
   async deleteUser (req, res) {
        try {
            const id = req.params._id
            const user = await User.findByIdAndDelete(id)
            if(!user) {
                return res.json(404).json({message:"User doesn't exist"})
            }
            res.json({message:"User has been deleted", user})
        } catch (error) {
            console.log(error)
        }
   },
  /* async getAllMusic (req, res){
    try {
        const music = await music.find()
        res.json(music)
    } catch (error) {
        console.log(error)
    }
   }, 
   async getMusicById (req, res) {
    try {
        const id = req.params._id
        const music = await music.findById(id)
        res.json(music)
    } catch (error) {
        console.log(error)
    }*/
    }

module.exports = Controller