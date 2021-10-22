const express = require('express'); // It's a Node framework, which will create our server routes.
const bodyParser = require('body-parser'); // It will help us getting data from our request's body.
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',//'victorlouvet.fr',
  user     : 'root',//'ouwb8630_mikleo',
  password : '',//'/LVbasededonnee94/',
  database : 'victorlouvet_db'//'ouwb8630_victorlouvet_db',
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

/*
async function getConseils(){
  await fetch('http://10.200.100.21:3000/getconseils')
  .then(response => response.json())
  .then(conseils => console.log(conseils))
}
*/
/*
async setConseils(){
  await fetch('http://10.200.100.21:3000/ValidateConseil', {
    method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
    headers: '', // You can specify your requisition headers here. That line is optional.
    body: { // Here's the fun part. Put your data here.
      "id": this.state.id,
      "passion": this.state.passion
    }
  })
  .then(response => response.json())
  .then(serverResponse => console.warn(serverResponse))
}
*/
