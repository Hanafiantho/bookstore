const router = require('express').Router()
const conn = require('../connection/connection')

// Add Address
router.post('/addAddress', (req, res) => {
    const sqlQuery = 'INSERT INTO address SET ?;'
    const data = req.body

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log(result);
        console.log('Address successfully added')
    })
})

// Get Address
router.get('/getAddress', (req, res) => {
    const sqlQuery = `SELECT * FROM address WHERE user_id = "${req.query.user_id}"`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log(result)
    })
})

// Edit Address
router.patch('/editAddress/:id', (req, res) => {
    const data = [req.body, req.params.id]
    const sqlQuery = `UPDATE address SET ? WHERE id = ?`

    conn.query(sqlQuery, data, (err, result) => {
        if (err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

// Delete Address
router.delete('/deleteAddress/:id', (req, res) => {    

    const data = req.params.id
    const sqlQuery = 'DELETE FROM address WHERE id = ?'

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Data successfully deleted');
        
    })
})

module.exports = router