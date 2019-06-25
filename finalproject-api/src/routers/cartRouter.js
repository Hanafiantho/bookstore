const router = require('express').Router()
const conn = require('../connection/connection')
const path = require('path')

const uploadDir = path.join(__dirname + '/../uploads/books_cover/' )

// Add To Product
router.get('/checkCart', (req, res) => {
    const sqlQuery = `SELECT * FROM cart WHERE book_id = ${req.query.book_id}`

    conn.query(sqlQuery, (err, result) => {
        if (err) { 
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

router.post('/addCart', (req, res) => {
    const sqlQuery = 'INSERT INTO cart SET ?;'
    const data = req.body

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log(result);
        console.log('Cart successfully added')
    })
})

// Get Cart Data From Spesific User
router.get('/getCart/:user_id', async (req, res) => {
    console.log(req.params.user_id);
    
    const sqlQuery = `select a.id, a.user_id, b.cover, b.title, b.price, a.quantity from cart a
    join books b on b.id = a.book_id where user_id = ${req.params.user_id}`

    await conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        console.log(result)
        res.send(result)
    })
})

router.get('/getBookCover/:cover', (req, res) => {
    res.sendFile(uploadDir + '/' + req.params.cover)
})

// Add Product Quantity
router.patch('/editQuantity/:id', (req, res) => {
    // const data = [req.body, req.params.id]
    const sqlQuery = `UPDATE cart SET quantity = ${req.body.quantity} WHERE id = ${req.params.id}`

    conn.query(sqlQuery, (err, result) => {
        if (err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

// Remove Item on Cart
router.delete('/deleteItemCart/:id', (req, res) => {
    const sqlQuery = `DELETE FROM cart WHERE id = ?`
    const data = req.params.id

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router