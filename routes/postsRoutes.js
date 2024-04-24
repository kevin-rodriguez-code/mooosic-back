const express = require('express')
const router = express.Router()
const Post = require('../models/Posts')
const PostController = require('../controllers/PostController.js')

//router.post('/create', PostController.createPost)
router.get('/', PostController.getAll)

module.exports = router
