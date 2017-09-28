import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';
export default class Level2 extends React.Component {
  constructor(){
    super()
    this.state={
      name: 'Abigail Thelin',
      safehavenTitle:'',
      editName: '',
      newSafeHaven: '',
      icon: false,
      addedSafeHaven: false,
      safeHaven: false,
      inputBeingShown: false
    }
    this.changeName = this.changeName.bind(this)
    this.saveName = this.saveName.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showSafeHaven = this.showSafeHaven.bind(this)
    this.changeSafeHavenTitle = this.changeSafeHavenTitle.bind(this)
    this.toggleSafeHavenLocation = this.toggleSafeHavenLocation.bind(this)
  }
  changeName(){
    this.setState({
      name: '',
      icon: true
    })
  }
  saveName(){
    this.setState({
      name: this.state.editName,
      icon: false,
      editName: ''
    })
  }
  handleChange(val){
    this.setState({
      editName: val
    })
  }
  safehavenChange(val){
    this.setState({
      newSafeHaven: val,

    })
  }
  showSafeHaven(){
    this.setState({
      safeHaven: true
    })
  }
  changeSafeHavenTitle(){
    this.setState({
      addedSafeHaven: true,
      safehavenTitle: this.state.newSafeHaven,
      inputBeingShown: true
    })
  }

  toggleSafeHavenLocation(){
      this.setState({
          addedSafeHaven: false
      })
  }

  static navigationOptions = {
    title: 'profile',
    headerStyle: { backgroundColor: '#111' },
    headerTitleStyle: { color: '#ffe8af' }
  };
  
  render() {
      console.log(this.state.safehavenTitle)
      console.log(this.state.newSafeHaven)
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={styles.headWrapper}>
          <Text style={styles.name}>{this.state.name}</Text>
{/*showing the edit icon  */}
          {
            !this.state.icon
            ?
          <TouchableHighlight onPress={this.changeName}>
            <Image source={require('./../images/edit.png')} style={{height: 15, width: 15, marginTop: 22}}/>
          </TouchableHighlight>
          : 
            <View style={styles.toggledHead}>
              <TextInput style={{height: 25, width: '50%', borderColor: 'grey', borderWidth: 1, color: 'white'}} onChangeText={this.handleChange} value={this.state.editName} />
              <Button style={{paddingLeft: 10, color: 'white'}} onPress={this.saveName}>Add</Button>
            </View>
          }
          </View>
{/* after you click the add button it'll pop up your safe haven input*/}

{/*showing the edit icon  */}
            {
              this.state.addedSafeHaven
              ?
              <View style={{justifyContent: 'center'}}>
              <Text style={{height: '20%', letterSpacing: 1, fontSize: 22, color: 'white'}}>SAFE HAVEN: {this.state.safehavenTitle} </Text>
                <TouchableHighlight onPress={this.toggleSafeHavenLocation}>
                    <Image source={require('./../images/edit.png')} style={{height: 15, width: 15, marginTop: 22}}/>
                </TouchableHighlight>

              </View>
              :
              <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', width: "100%", height: '20%'}}>  
                <TextInput style={{height: 30, width: '70%', borderColor: 'grey', borderWidth: .5, letterSpacing: 1, color: 'white'}} placeholder="CHANGE SAFEHAVEN" onChangeText={(val, input) =>this.safehavenChange(val, input)} value={this.state.newSafeHaven}/>
                <Button style={{marginLeft: 10}} onPress={this.changeSafeHavenTitle}>Add</Button>
              </View>
            }


            <View style={{justifyContent: 'flex-end'}}>
              <Button onPress={() => navigate('Contacts')} style={styles.button}>GO TO CONTACTS</Button>
              <Button onPress={() => navigate('Contacts')} style={styles.button}>GO TO GROUPS</Button>
            <Button onPress={() => navigate('Home')} style={styles.deletebutton}>DELETE YOUR ACCOUNT</Button>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headWrapper:{
    flexDirection: 'row'
  },
  name:{
    fontSize: 22,
    padding: 20,
    letterSpacing: 1,
    color: '#ffe8af'
  },
  button:{
    color: '#111111',
    height: 45,
    justifyContent: 'center',
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
    letterSpacing: 1,
    color: 'white'
  },
  deletebutton:{
    color: 'red',
    height: 45,
    justifyContent: 'center',
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
    letterSpacing: 1
  },
  showSafeHaven:{
    color: 'white'
  },
  toggledHead:{
    width: '100%',
    height: '50',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeHaven:{
    width: '80%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  AddingTxt:{
    letterSpacing: 1,
    alignSelf: 'center',
    padding: 22,
    textAlign: 'center',
    color: 'white'
  },
  btn:{
    width: '100%',
    marginTop: 20,
    height: 90,
    alignSelf: 'center',
    color: 'white'
  }
});