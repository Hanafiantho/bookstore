const router = require('express').Router()
const conn = require('../connection/connection')

router.get('/getPayment', (req, res) => {
    const sqlQuery = `SELECT * FROM payment_method`

    conn.query(sqlQuery, (err, result) => {
        if (err) { 
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router