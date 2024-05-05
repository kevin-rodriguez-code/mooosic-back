const express = require('express')
const router = express.Router()
//const Post = require('../models/Posts')
const Controller = require('../controllers/Controller.js')

router.post('/create', Controller.createPost)
router.get('/', Controller.getAll)
router.get('/id/:_id', Controller.getPostById)
router.put('/id/:_id', Controller.updatePost)
router.delete('/id/:_id', Controller.deletePost)
router.post('/user/createUser', Controller.createUser)
router.get('/user/id/:_id', Controller.getUserById)
router.put('/user/id/:_id', Controller.updateUser)
router.delete('/user/id/:_id', Controller.deleteUser)
//router.get('/', Controller.getAllMusic)
//router.get('/', Controller.getMusicById)


module.exports = router

