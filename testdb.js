 var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '104.199.214.50',
    user: 'punitha',
    password: 'Punitha@Laurel553',
    database: 'narayanadb'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
});

module.exports = connection;