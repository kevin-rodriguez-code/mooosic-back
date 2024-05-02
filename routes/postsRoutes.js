const express = require('express')
const router = express.Router()
//const Post = require('../models/Posts')
const Controller = require('../controllers/Controller.js')

router.post('/create', Controller.createPost)
router.get('/', Controller.getAll)
router.put('/id/:_id', Controller.updatePost)
router.delete('/id/:_id', Controller.deletePost)


module.exports = router

