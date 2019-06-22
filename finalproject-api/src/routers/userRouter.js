const router = require('express').Router()
const conn = require('../connection/connection')
const bcrypt = require('bcrypt')
const isEmail = require('validator/lib/isEmail')
const multer = require('multer')
const path = require('path')

// Register
router.post('/addUsers', async (req, res) => {
    const sqlQuery = 'INSERT INTO users SET ?;'
    const data = req.body

    console.log(data)

    // Hashing password
    data.password = await bcrypt.hash(data.password, 8)

    // Email Validator
    if(!isEmail(data.email)) {
        return res.send('Email is not valid')
    }

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Data successfully added')
    })
})

// Login
router.get('/users', (req, res) => {
    const sqlQuery = `SELECT * FROM users WHERE username = "${req.query.username}"`

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

// Keep Login
router.get('/keepLogin', (req, res) => {
    const sqlQuery = `SELECT * FROM users WHERE username = "${req.query.username}"`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log(result)
    })
})

// Upload User Avatar
const uploadDir = path.join(__dirname + '/../uploads/' )

const storage = multer.diskStorage({
    // Destination
    destination : function(req, file, cb) {
        cb(null, uploadDir)
    },
    // Filename
    filename : function(req, file, cb) {
        cb(null, Date.now() + file.fieldname + path.extname(file.originalname))
    }
})
const upstore = multer ({
    storage: storage,
    limits: {
        fileSize: 2000000 // Byte
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload image file (jpg, jpeg, or png)')) 
        }

        cb(undefined, true)
    }
})

router.patch('/addAvatar/:id', upstore.single('avatar'), (req, res) => {
    const sqlQuery = `UPDATE users SET avatar = '${req.file.filename}' WHERE id = ${req.params.id}`
    
        conn.query(sqlQuery, (err, result) => {
            if (err) return res.send(err)
            
            res.send(result)
        })
})

// Get Avatar
router.get("/getAvatar", (req, res) => {
    const sqlQuery = `SELECT * FROM users WHERE username = "${req.query.username}"`
    
    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }
        
        const avatar = result[0].avatar
        console.log(avatar);
        
        
        res.send(`http://localhost:9000/getAvatar/${avatar}`)
        console.log(`http://localhost:9000/getAvatar/${avatar}`);
    })
});

router.get('/getAvatar/:avatar', (req, res) => {
    res.sendFile(uploadDir + '/' + req.params.avatar)
})

// Edit User Data
router.patch('/editUsers/:username', (req, res) => {
    const data = [req.body, req.params.username]
    const sqlQuery = `UPDATE users SET ? WHERE username = ?`

    conn.query(sqlQuery, data, (err, result) => {
        if (err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

// Edit Password
router.get('/getPassword', (req, res) => {
    const sqlQuery = `SELECT password FROM users WHERE username = '${req.query.username}'`

    conn.query(sqlQuery, async (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }
        // res.send(result[0].password)
        
        const hashpass = await bcrypt.compare(req.query.password, result[0].password)
        if(hashpass === false) {
            res.send('your password is incorrect')
        }

        res.send(hashpass)
    })
})

router.patch('/editPassword/:username', async (req,res) => {
    const data = [req.body, req.params.username]
    const sqlQuery = `UPDATE users SET ? WHERE username = ?`

    req.body.password = await bcrypt.hash(req.body.password, 8)

    conn.query(sqlQuery, data, (err, result) => {
        if (err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router