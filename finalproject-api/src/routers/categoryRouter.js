const router = require('express').Router()
const conn = require('../connection/connection')

// Add Category
router.post('/addCategory', (req, res) => {
    const sqlQuery = 'INSERT INTO book_categories SET ?;'
    const data = req.body

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log(result);
        console.log('Category successfully added')
    })
})

// Get Category
router.get('/getCategory', (req, res) => {
    const sqlQuery = `SELECT * FROM book_categories`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log(result)
    })
})

module.exports = router