const router = require('express').Router()
const conn = require('../connection/connection')
const bcrypt = require('bcrypt')

// Register
router.post('/addAdmin', async (req, res) => {
    const sqlQuery = 'INSERT INTO admins SET ?;'
    const data = req.body

    console.log(data)

    // Hashing password
    data.password = await bcrypt.hash(data.password, 8)

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Data successfully added')
    })
})

// Login
router.get('/getAdmin', (req, res) => {
    const sqlQuery = `SELECT * FROM admins WHERE username = "${req.query.username}"`

    conn.query(sqlQuery, async (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        if(!result[0]) {
            res.send('user not found')
        }

        const hashpass = await bcrypt.compare(req.query.password, result[0].password)
        if(hashpass === false) {
            res.send('your password is incorrect')
        }

        res.send(result)
        console.log(result);
        
    })
})

module.exports = router