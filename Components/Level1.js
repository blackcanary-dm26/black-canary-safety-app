import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';


export default class Level1 extends React.Component {
  render() {
    constructor() {
        super();
        
        this.state = {
          text: ''
        }
    }
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
            <View>
              <Text>MESSAGE</Text>
              {/* <TextInput multiline={true}
                         numberOfLines={4}
                         onChangeText={(text) => this.setState({text})}
                         value={this.state.text}/> */}
            </View>
            <View>
              <Text>TO</Text>              
              {/* <TextInput/> */}
            </View>
            <View>
              <Text>TIME ACTIVE</Text>              
              {/* <TextInput/> */}
            </View>
            <View>
              <Button>SEND</Button>
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
  }
});