import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Level1 extends React.Component {
  render() {

    const {navigate} = this.props.navigation;

    return (
        <View>
            <Text>This is Level One</Text>
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