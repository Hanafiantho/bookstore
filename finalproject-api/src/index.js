const express = require('express')
const port = 9000
const userRouter = require('./routers/userRouter')
const addressRouter = require('./routers/addressRouter')
const adminRouter = require('./routers/adminRouter')
const categoryRouter = require('./routers/categoryRouter')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(addressRouter)
app.use(adminRouter)
app.use(categoryRouter)

app.listen(port, () => {
    console.log('App running on port ' + port)
})