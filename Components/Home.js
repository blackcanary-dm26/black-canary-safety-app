import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import map from './../images/placeholder_map.gif'

export default class Home extends React.Component {
  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* <Text>Difficult difficult lemon difficult</Text> */}
        {/* <Text>Hello Harry Potter my name is Tom Riddle.</Text>
        <Text>How did you come by my iPhone?</Text> */}
        <Button
        title="Select Situation"
        onPress={() =>
            navigate('Situations')
        }
        />
        <Image source={require('./../images/placeholder_map.gif')} style={ styles.mapContainer }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
      width: '80%',
      height: '70%'
  }
});