const express = require('express')
const dbConnection = require('./config/config.js')
const app = express()
require('dotenv').config()
//añadir CORS

const PORT = process.env.PORT
const routes = require('./routes/postsRoutes')  //terminar path de routes

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', routes);

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:3000`)
})