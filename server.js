
const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express()



app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))


const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')


app.use('/product', productRoute)
app.use('/order', orderRoute)



const port = 8282




app.listen(port, console.log('server started'))