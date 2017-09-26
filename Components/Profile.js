import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';

export default class Level2 extends React.Component {

  constructor(){
    super()
    this.state={
      name: 'Abigail Thelin',
      icon: false
    }
    this.changeName = this.changeName.bind(this)
    this.changeState = this.changeState.bind(this)
  }

  changeName(){
    this.setState({
      name: '',
      icon: true
    })
  }

  changeState(){

  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>

          <View style={styles.headWrapper}>
            <Text style={styles.name}>{this.state.name}</Text>


          <TouchableHighlight onPress={this.changeName}>
            <Image source={require('./../images/7H.png')} style={{height: 15, width: 15, marginTop: 22}}/>
          </TouchableHighlight>

            {
              this.state.icon
              ?
              <View style={styles.toggledHead}>
                <TextInput
                style={{height: 20, width: '50%', textAlign: 'center', borderWidth: 5, alignSelf: 'center'}}
                placeholder="CHANGE NAME"
                onChangeText={(text) => this.setState({text})}
                value={this.state.name}
                />
                <Button style={{paddingLeft: 10}} onPress={this.changeState}>Add</Button>
                
              </View>
              :
              null
            }
          </View>

            <View style={styles.imgPlaceholder}></View>


            <View style={{flexDirection: 'row', alignItems:'center'}}>  
              <TextInput
                style={{height: 120, width: '70%', borderColor: 'grey', borderRadius: 2}}
                placeholder="CHANGE SAFEHAVEN"
                onChangeText={(text) => this.setState({text})}
              />
              <Button style={{}} onPress={this.changeState}>Add</Button>
            </View>


            <Button onPress={() => navigate('Contacts')} style={styles.button}>CONTACTS</Button>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headWrapper:{
    flexDirection: 'row'
  },
  name:{
    fontSize: 22,
    padding: 20
  },
  imgPlaceholder:{
    width: '50%',
    height: '30%',
    backgroundColor: 'grey'
  },
  button:{
    color: '#111111',
    height: 45,
    justifyContent: 'center',
    paddingTop: 30,
    alignItems: 'center',
    letterSpacing: 1
  },
  toggledHead:{
    width: '100%',
    height: '50',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
