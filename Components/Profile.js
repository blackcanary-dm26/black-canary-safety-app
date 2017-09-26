import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';

export default class Level2 extends React.Component {

  constructor(){
    super()
    this.state={
      name: 'Abigail Thelin',
      icon: false,
      editName: '',
      safeHaven: false,
      addedSafeHaven: false,
      saferHaven:''
    }
    this.changeName = this.changeName.bind(this)
    this.changeState = this.changeState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showSafeHaven = this.showSafeHaven.bind(this)
    this.changeSafeHavenState = this.changeSafeHavenState.bind(this)
  }

  changeName(){
    this.setState({
      name: '',
      icon: true
    })
  }

  changeState(){
    this.setState({
      name: this.state.editName,
      icon: false,
      editName: ''
    })
    {this.state.name}
  }

  handleChange(val){
    this.setState({
      editName: val
    })
  }

  showSafeHaven(){
    this.setState({
      safeHaven: true
    })
  }

  changeSafeHavenState(){
    this.setState({
      addedSafeHaven: true,
      safeHaven: false
    })
  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>

          <View style={styles.headWrapper}>
          <Text style={styles.name}>{this.state.name}</Text>

          {
            !this.state.icon
            ?
          <TouchableHighlight onPress={this.changeName}>
            <Image source={require('./../images/7H.png')} style={{height: 15, width: 15, marginTop: 22}}/>
          </TouchableHighlight>
          : 
          null
          }

            {
              this.state.icon
              ?
              <View style={styles.toggledHead}>
                <TextInput style={{height: 25, width: '50%', borderColor: 'gray', borderWidth: 1}} onChangeText={this.handleChange} value={this.state.editName} />
                <Button style={{paddingLeft: 10}} onPress={this.changeState}>Add</Button>
              </View>
              :
              null
            }
          </View>

          <View style={styles.imgPlaceholder}></View>

            {
              !this.state.safeHaven
              ?
              <View style={styles.safeHaven}>
                <Text style={styles.addingTxt}>ADD YOUR SAFEHAVEN TO LET YOUR FRIENDS KNOW YOU'RE SAFE</Text>
                <Button onPress={this.showSafeHaven} style={styles.btn}>ADD</Button>
              </View>
              :
              <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', width: "100%", height: '20%'}}>  
                <TextInput style={{height: 30, width: '70%', borderColor: 'grey', borderWidth: .5}} placeholder="CHANGE SAFEHAVEN"onChangeText={(text) => this.setState({text})} />
                <Button style={{marginLeft: 10}} onPress={this.changeSafeHavenState}>Add</Button>
              </View>
            }



            <Button onPress={() => navigate('Contacts')} style={styles.button}>GO TO CONTACTS</Button>

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
  },
  safeHaven:{
    width: '90%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddingTxt:{
    letterSpacing: 1
  },
  btn:{
    width: '100%',
    marginTop: 20,
    height: 90,
    alignSelf: 'center'
  }
});
