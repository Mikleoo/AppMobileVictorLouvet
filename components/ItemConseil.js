import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

class ItemConseil extends React.Component {

  render() {
    const conseil = this.props.conseil
    return (
        <View style={styles.container}>
          <Text style={styles.txt}>{conseil.pseudo}</Text>
          <Text style={styles.txt} numberOfLines={6}>{conseil.name_manga}</Text>
        </View>
      )
    }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  txt: {
    alignItems: 'center',
    margin: 10,
  },
});

export default ItemConseil
