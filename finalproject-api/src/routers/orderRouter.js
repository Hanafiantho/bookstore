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

module.exports = router