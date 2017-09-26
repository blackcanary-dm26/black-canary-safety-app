import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Contacts extends React.Component {

  constructor(){
    super()
    this.state={
      
    }
  }

  render() {

    const {navigate} = this.props.navigation;

    return (
        <View>

            <View style={styles.head}>
                <Text>Name</Text>
                <Text>Email</Text>
                <Text>Number</Text>
            </View>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  }
});