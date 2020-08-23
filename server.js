
const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express()



// 데이터베이스 연결
const dbAdress = "mongodb+srv://bangnany:4275@cluster0.kgd8x.mongodb.net/Shoppingmall?retryWrites=true&w=majority"

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose
    .connect(dbAdress, dbOptions)
    .then(() => console.log("MongoDB Connected ..."))
    .catch(err => console.log(err))




app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))


const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')


app.use('/product', productRoute)
app.use('/order', orderRoute)



const port = 8282




app.listen(port, console.log('server started'))