import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Button, FlatList, Text, Linking} from 'react-native'
import ItemConseil from './ItemConseil'
//import DataConseils from './DataConseils'

class ListConseil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      conseils: [/*
        {id: 1, pseudo:'Pseudo1', name_manga:"LALA"},
        {id: 2, pseudo:'Pseudo2', name_manga:"LOLO"}
      */]
    };
  }

  async UNSAFE_componentWillMount() {
    /*
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
    */
    console.log("UNSAFE_componentWillMount launch");
    try {
     const response = await fetch('https://victorlouvet.fr/Conseils');//http://10.200.100.21:3000/getconseils  http://192.168.1.203:8080/cv/Test_API/Conseils
     console.log("After response");
     console.log(response);
     const json = await response.json();
     console.log("json : " + json);
     console.log("json[0] : " + json[0]);
     this.setState({
       conseils: json[0]
     });
   } catch (error) {
     console.error(error);
   }

  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <FlatList
            data={this.state.conseils}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ItemConseil conseil={item}/>}
          />
        </View>
        <View style={[styles.container, styles.outside]}>
          <Button title='Se connecter' onPress={()=> Linking.openURL('http://victorlouvet.fr/connexion')}/>
        </View>
        <StatusBar style="auto" />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'orange',
    paddingBottom: 50,
    paddingTop: 50,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: '#ffd54b',
    alignItems: 'center',
    margin: 10,
  },
  outside: {
    width: 'auto',
    position: 'absolute',
    bottom: 20,
  },
});

export default ListConseil
