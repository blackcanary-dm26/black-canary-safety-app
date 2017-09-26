import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
            title="Out With Friends"
            onPress={() =>
                navigate('Situations')
            }
        />
        <Button
            title="On a Date"
            onPress={() =>
                navigate('Situations')
            }
        />
        <Button
            title="Running"
            onPress={() =>
                navigate('Situations')
            }
        />
        <Button
            title="Traveling"
            onPress={() =>
                navigate('Situations')
            }
        />

        <Button
            title="In a Bad Area"
            onPress={() =>
                navigate('Situations')
            }
        />
        <Button
            title="Uncomfortable Situation"
            onPress={() =>
                navigate('Situations')
            }
        />

        <Button
            title="Emergency"
            onPress={() =>
                navigate('Situations')
            }
        />
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
});