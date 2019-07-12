const router = require('express').Router()
const conn = require('../connection/connection')
const path = require('path')

const uploadDir = path.join(__dirname + '/../uploads/books_cover/' )

// Add To Product
router.get('/checkCart', (req, res) => {
    const sqlQuery = `SELECT * FROM cart WHERE book_id = ${req.query.book_id} and user_id = ${req.query.user_id}`

    conn.query(sqlQuery, (err, result) => {
        if (err) { 
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

router.post('/addCart', async (req, res) => {
    const sqlQuery = 'INSERT INTO cart SET ?;'
    const sqlQuery1 = `SELECT quantity FROM books WHERE id = ${req.body.book_id}`
    const data = req.body

    await conn.query(sqlQuery, data, async (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        await conn.query(sqlQuery1, (err, result) => {
            if(err) {
                return res.send(err.sqlMessage)
            }
            res.send(result)

            console.log(result);

            var book_quantity = result[0].quantity
            console.log(book_quantity);
            var item_quantity = req.body.quantity
            console.log(item_quantity);
            book_quantity = book_quantity - item_quantity
            console.log(book_quantity);

            const sqlQuery2 = `UPDATE books SET quantity = ${book_quantity} WHERE id = ${req.body.book_id}`
            conn.query(sqlQuery2, (err, result) => {
                if(err) {
                    return res.send(err.sqlMessage)
                }
            })
        })
        console.log('Cart successfully added')
    })
})

// Get Cart Data From Spesific User
router.get('/getCart/:user_id', (req, res) => {
    console.log(req.params.user_id);
    
    const sqlQuery = `select a.id, a.user_id, b.cover, b.title, b.writer, b.price, a.quantity, a.totprice from cart a
    join books b on b.id = a.book_id where user_id = ${req.params.user_id}`

    conn.query(sqlQuery, (err, result) => {
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


router.patch('/totPriceEachItem/:id', (req, res) => {
    const sqlQuery = `UPDATE cart SET totprice = ${req.body.totprice} WHERE id = ${req.params.id}`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        return res.send(result)
    })
})

// router.get('/totalAllPrice', (req, res) => {
//     const sqlQuery = `SELECT SUM(totprice) AS total_price FROM cart WHERE user_id = ${req.query.user_id}`

//     conn.query(sqlQuery, (err, result) => {
//         if(err) {
//             res.send(err.sqlMessage)
//         }

//         res.send(result)
//     })
// })

module.exports = router