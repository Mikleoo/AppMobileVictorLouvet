import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Button, FlatList, Text, Linking} from 'react-native'
import ItemConseil from './ItemConseil'

class ListConseil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      conseils: []
    };
  }

  async UNSAFE_componentWillMount() {
    
    console.log("UNSAFE_componentWillMount launch");
    try {
     const response = await fetch('https://victorlouvet.fr/Conseils');
     const json = await response.json();
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
