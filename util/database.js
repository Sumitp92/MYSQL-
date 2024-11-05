const mysql = require('mysql2') ;

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "world" ,
    password: 876722
}) ;

module.exports = pool ;