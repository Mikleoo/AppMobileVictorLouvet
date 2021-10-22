import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ItemConseil from './ItemConseil'

class DataConseils extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      conseils: []
    };
  }

  fetchData = async () => {
    console.log("ok");

       try {
        const response = await fetch('http://192.168.1.203:3000/getconseils');//http://192.168.1.203:8080/cv/Test_API/Conseils
        const json = await response.json();
        console.log(json);
        this.setState({
          conseils: json[0]
        });
      } catch (error) {
        console.error(error);
      }
      return (
          <FlatList
            data={this.state.conseils}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ItemConseil conseil={item}/>}
          />
      )

  }

  render() {
    return (
      <View>
        {this.fetchData}
      </View>
    )
  }

}
/*
export default function DataConseils({}) {

  const tab = [
    {id: 3, pseudo:'Pseudo3', conseil:"LILI"},
    {id: 4, pseudo:'Pseudo4', conseil:"LULU"}
  ];

  //const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getConseils = async () => {
     try {
      const response = await fetch('http://10.200.100.21:3000/getconseils');
      const json = await response.json();
      setData(json[0]);
      //console.log("Mon json : ---------- "+ json);
      //console.log("Ma data : ---------- "+ data);
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }
  }

  useEffect(() => {
    getConseils();
  }, []);

  return (
    <FlatList
      data={this.tab}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <ItemConseil conseil={item}/>}
    />
  )

}

  //<ItemConseil conseil={item}/>}
  /*
  <FlatList
    data={data}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => (
      <Text>{item.id}, {item.pseudo}</Text>
    )}
  />

  //{isLoading ? <ActivityIndicator/> : ()}
  render () {
    /*
    //const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getConseils = async () => {
       try {
        //console.log(fetch('http://10.200.100.21:3000/getconseils'));
        const response = await fetch('http://10.200.100.21:3000/getconseils');
        const json = await response.json();
        setData(json[0]);
        //console.log("Mon json : ---------- "+ json);
        console.log("Ma data : ---------- "+ data);
      } catch (error) {
        console.error(error);
      } finally {
        //setLoading(false);
      }
    }

    useEffect(() => {
      getConseils();
    }, []);
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }

}
*/

export default DataConseils
