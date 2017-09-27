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
      safeyHaven: '',
      safeHaven: false,
      addedSafeHaven: false,
      saferHaven:'blah',
      inputBeingShown: false
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

  handlerChange(val){
    this.setState({
      safeyHaven: val
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
      // safeyHaven: '',
      inputBeingShown: true
    })
  }

  changeSafeHaven(){
    this.setState({
      saferHaven: this.state.safeyHaven
    })
  }
  
  render() {
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
            <Image source={require('./../images/7H.png')} style={{height: 15, width: 15, marginTop: 22}}/>
          </TouchableHighlight>
          : 
          null
          }

{/* allowing users to put in their new name */}
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

{/* after you click the add button it'll pop up your safe haven input*/}
            {
              !this.state.safeHaven
              ?
              null
              :
              <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', width: "70%", height: '20%'}}>
                <Text style={styles.addingTxt}>ADD YOUR SAFEHAVEN TO LET YOUR FRIENDS KNOW YOU'RE SAFE</Text>
                <Button onPress={this.showSafeHaven} style={styles.btn}>ADD</Button>
              </View>
            }

{/* toggles off the input feild*/}
             {
              this.state.inputBeingShown
              ?

              null
              :
              <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', width: "100%", height: '20%'}}>  
                <TextInput style={{height: 30, width: '70%', borderColor: 'grey', borderWidth: .5, letterSpacing: 1,}} placeholder="CHANGE SAFEHAVEN"onChangeText={this.handlerChange} value={this.state.changeSafeHaven}/>
                <Button style={{marginLeft: 10}} onPress={this.changeSafeHavenState}>Add</Button>
              </View>
            } 

{/*showing the edit icon  */}
            {
              this.state.addedSafeHaven
              ?
              <View style={{justifyContent: 'center'}}>
              <Text style={{height: '20%', letterSpacing: 1, fontSize: 22}}>SAFE HAVEN: {this.state.saferHaven}</Text>
              </View>
              :
              null
            }



            <View style={{justifyContent: 'flex-end'}}>
              <Button onPress={() => navigate('Contacts')} style={styles.button}>GO TO CONTACTS</Button>
                <Button onPress={() => navigate('Home')} style={styles.deletebutton}>DELETE YOUR ACCOUNT</Button>
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
    justifyContent: 'flex-start',
  },
  headWrapper:{
    flexDirection: 'row'
  },
  name:{
    fontSize: 22,
    padding: 20,
    letterSpacing: 1,
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
    width: '100%',
    alignItems: 'center',
    letterSpacing: 1
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
    textAlign: 'center'
  },
  btn:{
    width: '100%',
    marginTop: 20,
    height: 90,
    alignSelf: 'center',
  }
});
