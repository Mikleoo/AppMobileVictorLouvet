const express = require('express'); // It's a Node framework, which will create our server routes.
const bodyParser = require('body-parser'); // It will help us getting data from our request's body.
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'victorlouvet_db'
});

// Starting our app.
const app = express();

// Creating a GET route that returns data.
app.get('/getconseils', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query.
    connection.query('CALL getPassion("Manga", 0)', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/getconseils so you can see the data.');
});
