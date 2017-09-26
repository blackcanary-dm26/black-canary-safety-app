import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Level3 extends React.Component {
  render() {

    const {navigate} = this.props.navigation;

    return (
        <View>
            <Text>This is Level THREE</Text>
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
  }
});