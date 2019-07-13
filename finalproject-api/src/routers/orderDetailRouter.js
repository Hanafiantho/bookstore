const router = require('express').Router()
const conn = require('../connection/connection')

router.post('/addOrderdetail', (req, res) => {
    const sqlQuery = 'INSERT INTO order_detail SET ?'
    const data = req.body

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router