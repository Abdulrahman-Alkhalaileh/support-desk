const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware') 
const PORT = process.env.PORT || 5000

//Connect to DB
connectDB()

const app = express()

//middleware for the body 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.json({
        message:'welcome to support desk'
    })
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server is started on port ${PORT}`))
