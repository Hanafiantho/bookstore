const router = require('express').Router()
const conn = require('../connection/connection')
const multer = require('multer')
const path = require('path')

// Add Books
const uploadDir = path.join(__dirname + '/../uploads/books_cover/' )

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

router.post('/addBook', upstore.single('cover'), (req, res) => {
    const {
        categories,
        title, 
        writer,
        price,
        quantity,
        synopsis
    } = req.body

    const sqlQuery = `INSERT INTO books SET cover='${req.file.filename}', categories=${categories}, title='${title}', writer='${writer}', price=${price}, quantity=${quantity}, synopsis='${synopsis}'`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log('Successfully Added Books');
        
    })
})

// Get All Books
router.get('/getBooks' , (req, res) => {
    const sqlQuery = 'SELECT b.id, b.cover, bc.category, b.title, b.writer, b.price, b.quantity, b.synopsis from books b join book_categories bc on bc.id = b.categories;'

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }
        
        res.send(result)
    })
})

router.get('/getBooks/:cover', (req, res) => {
    res.sendFile(uploadDir + '/' + req.params.cover)
})

// Delete Books
router.delete('/deleteBooks/:id', (req, res) => {
    const sqlQuery = `DELETE FROM books WHERE id = ?`
    const data = req.params.id

    conn.query(sqlQuery, data, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
    })
})

module.exports = router