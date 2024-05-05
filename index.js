const express = require('express')
const dbConnection = require('./config/config.js')
const app = express()
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 3000
const routes = require('./routes/postsRoutes.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/', routes);

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:3000`)
}) 