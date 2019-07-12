const router = require('express').Router()
const conn = require('../connection/connection')

router.get('/getShipping', (req, res) => {
    const sqlQuery = `SELECT * FROM shipping_method`

    conn.query(sqlQuery, (err, result) => {
        if (err) { 
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router