const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

const connectDB = require('./config/db')

const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')
const usersRoutes = require('./routes/usersRoutes')

//establecer config
dotenv.config({
    path: './config/.env'

})

//crear el objeto express
const app = express()

//dependencia de forma de body json
app.use(express.json())

//ejecutar conexion a db
connectDB()

// url prueba   
app.get('/prueba' , (req , res)=>{
    //ejemplo de response basico
    res.send("ERROR")
})

//uri de bootcamps
app.use('/bootcamps' , bootcampsRoutes)



//uri para cuorses
app.use('/courses' , coursesRoutes)



//uri para reviews


//uri para users

app.use('/auth' , usersRoutes)



//definir puerto de servidor
const puerto = process.env.PUERTO

//definir servidor
app.listen( puerto , 
            console.log(`servidor ejecutando en ${ puerto }` .bgMagenta.green.bold ))