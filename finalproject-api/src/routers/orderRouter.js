const router = require('express').Router()
const conn = require('../connection/connection')

router.post(`/addOrder`, (req, res) => {
    const sqlQuery = `INSERT INTO orders SET ?`
    const data = req.body

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            res.send(err.sqlMessage )
        }
        
        res.send(result)
    })
})

router.get(`/getOrder`, (req, res) => {
    const sqlQuery = `SELECT * FROM orders WHERE user_id = ${req.query.user_id} and bank_id = ${req.query.bank_id} and address_id = ${req.query.address_id} and order_total = ${req.query.order_total}`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router