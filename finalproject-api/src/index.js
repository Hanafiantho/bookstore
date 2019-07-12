const express = require('express')
const port = 9000
const userRouter = require('./routers/userRouter')
const addressRouter = require('./routers/addressRouter')
const adminRouter = require('./routers/adminRouter')
const categoryRouter = require('./routers/categoryRouter')
const booksRouter = require('./routers/booksRouter')
const cartRouter = require('./routers/cartRouter')
const paymentRouter = require('./routers/paymentRouter')
const shippingRouter = require('./routers/shippingRouter')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(addressRouter)
app.use(adminRouter)
app.use(categoryRouter)
app.use(booksRouter)
app.use(cartRouter)
app.use(paymentRouter)
app.use(shippingRouter)

app.listen(port, () => {
    console.log('App running on port ' + port)
})