import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';
export default class Level2 extends React.Component {
  constructor(){
    super()
    this.state={
      name: 'BLAH BLAH',
      safehavenTitle:'',
      editName: '',
      newSafeHaven: '',
      icon: false,
      addedSafeHaven: false,
      safeHaven: false,
      inputBeingShown: false,
      deleteYourAccount: false
    }
    this.changeName = this.changeName.bind(this)
    this.saveName = this.saveName.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showSafeHaven = this.showSafeHaven.bind(this)
    this.changeSafeHavenTitle = this.changeSafeHavenTitle.bind(this)
    this.toggleSafeHavenLocation = this.toggleSafeHavenLocation.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
    this.exitDeleteScreen = this.exitDeleteScreen.bind(this)
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
          addedSafeHaven: false,
          safehavenTitle: ''
      })
  }
  deleteAccount(){
    this.setState({
      deleteYourAccount: true
    })
  }
  exitDeleteScreen(){
    this.setState({
      deleteYourAccount: false
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
{/* DELETE YOUR ACCOUNT */}
            {
              this.state.deleteYourAccount
              ?
              <View style={{width: '90%', height: '90%', backgroundColor: '#EFEFEF'}}>
                <TouchableHighlight onPress={this.exitDeleteScreen}>
                  <Image style={{height: 15, width: 15, margin: 20}} source={require('../images/x.png')}/>
                </TouchableHighlight>

                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 22, letterSpacing: 1, color: 'black'}}>ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?</Text>
                  <View style={{justifyContent: 'space-around', width: '60%', height: '80%', alignContent:'center', marginTop: 80}}>
                    <Button onPress={this.exitDeleteScreen} style={{color: 'black', backgroundColor: '#ffe8af', width: '100%', height: '50%', padding: 30}}>No, I want to continue feeling safe</Button>
                    <Button style={{color: 'white', backgroundColor: '#d13030', width: '100%', height: '50%', padding: 30}}>Yes, I want to delete my account and feel unsafe</Button>
                  </View>
                </View>
              </View>
              :
              null
            }
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
            {
              this.state.addedSafeHaven
              ?
              <View style={{justifyContent: 'center', alignItems: 'center', height: '50%', flexDirection: 'column'}}>
                <Text style={{height: '10%', letterSpacing: 1, fontSize: 22, color: 'white'}}>SAFE HAVEN:</Text>
                <View style={{flexDirection: 'row', height: '10%', width: '55%', justifyContent: 'flex-start', alignItems:'flex-start'}}>
                    <Text style={{color: 'white'}}>{this.state.safehavenTitle}</Text>
                    <TouchableHighlight onPress={this.toggleSafeHavenLocation}>
                        <Image source={require('./../images/edit.png')} style={{height: 15, width: 15, marginLeft: 15}}/>
                    </TouchableHighlight>
                </View>

              </View>
              :
              <View style={{flexDirection: 'column', height: '50%',justifyContent:'center', alignItems: 'center'}}>
                <Text style={{color: 'white', paddingLeft: '10%'}}>ADD SAFE HAVEN:</Text>
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', width: "100%", height: '20%'}}>  
                  <TextInput style={{height: 30, width: '70%', borderColor: '#ffe8af', borderWidth: .5, letterSpacing: 1, color: 'white'}} placeholder="CHANGE SAFEHAVEN" onChangeText={(val, input) =>this.safehavenChange(val, input)} value={this.state.newSafeHaven}/>
                  <Button style={{marginLeft: 10}} onPress={this.changeSafeHavenTitle}>Add</Button>
                </View>
              </View>
            }



            <View style={{justifyContent: 'flex-end'}}>
              <Button onPress={() => navigate('Contacts')} style={styles.button}>GO TO CONTACTS</Button>
              <Button onPress={() => navigate('Contacts')} style={styles.button}>GO TO GROUPS</Button>
              <Button onPress={this.deleteAccount} style={styles.deletebutton}>DELETE YOUR ACCOUNT</Button>
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
    color: 'white'
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