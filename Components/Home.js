import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import map from './../images/placeholder_map.gif';
import Button from 'react-native-button';

export default class Home extends React.Component {
  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* <Text>Difficult difficult lemon difficult</Text> */}
        {/* <Text>Hello Harry Potter my name is Tom Riddle.</Text>
        <Text>How did you come by my iPhone?</Text> */}
        <View style={styles.button}><Button onPress={() => navigate('Situations') } style={styles.buttonText}>SELECT SITUATION</Button></View>
        <View style={styles.button}><Button onPress={() => navigate('Profile') } style={styles.buttonText}>PROFILE</Button></View>
        <View style={styles.button}><Button onPress={() => navigate('Situations') } style={styles.buttonText}>LOGOUT</Button></View>
        <Image source={require('./../images/placeholder_map.gif')} style={ styles.mapContainer }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
      width: '100%',
      height: '75%',
      position: 'relative',
      bottom: 0
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    // borderWidth: 1,
    // borderColor: '#111111'
  },
  buttonText: {
      color: '#111111',
      height: 45,
      justifyContent: 'center',
      paddingTop: 10,
      alignItems: 'center',
      letterSpacing: 1,
  }
});