const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'devuser',
    password: 'hanafiantho301190',
    host: 'localhost',
    database: 'finalproject',
    port: '3306'
})

module.exports = conn