import React from "react";
import { StyleSheet, Text, View} from 'react-native'
import ItemConseil from './ItemConseil'

class DataRenderer extends React.Component {

  //function eachConseils() {
  render() {
    const data = this.props.conseils;
    console.log("Ma data de DataRenderer :"+data);
    for (let item of data) {
    //data.map((item) => {
      return (
          <ItemConseil conseil={item}/>
        )
    }//);
  }

}

export default DataRenderer
