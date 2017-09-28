import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, ListView, Animated } from 'react-native';

import Button from 'react-native-button';

export default class Contacts extends React.Component {

  constructor(){
    super()
    this.state={
      friendName: [{name: 'ash', id: 2}, {name: 'bob', id: 3}, {name: 'rob', id: 4}, {name: 'robert', id: 5}, {name: 'nina', id: 6}, {name: 'Lynda', id: 7}, {name: 'Abby', id: 8}, {name: 'ash', id: 200}, {name: 'bob', id: 30}, {name: 'rob', id: 40}, {name: 'robert', id: 50}, {name: 'nina', id: 60}, {name: 'Lynda', id: 70}, {name: 'Abby', id: 80}],
      groups: ['starWars', 'Pokemon', 'Dev', 'BLAHHHHH'],
      showModal: false,
      addToGroupsModal: false,
      addFriendModal: false
    }
    this.showModalMethod = this.showModalMethod.bind(this)
    this.exitModal = this.exitModal.bind(this)
    this.addContactToGroup = this.addContactToGroup.bind(this)
    this.addFriendModal = this.addFriendModal.bind(this)
  }

  showModalMethod(name){
    console.log(name)
    this.setState({
      name: name
    })
  }

  exitModal(){
    this.setState({
      showModal: false,
      addFriendModal: false,
    })
  }

  addContactToGroup(){
    this.setState({
      addToGroupsModal: true
    })
  }

  addFriendModal(){
    this.setState({
      addFriendModal: true
    })
  }

  static navigationOptions = {
    title: 'Contacts',
    headerStyle: { backgroundColor: '#111' },
    headerTitleStyle: { color: '#ffe8af' }
  };

  render() {

    const {navigate} = this.props.navigation;

    const allFriends = this.state.friendName.map((friends, i)=>{
      return(

          <ScrollView style={styles.listItems} key={i}>
            <Text style={{fontSize: 18, letterSpacing: 1, color: '#EFEFEF'}}>{friends.name}</Text>
            <Button style={{fontSize: 12, color: '#ffe8af'}} onPress={_=>this.showModalMethod(friends.name)}>SEE INFO</Button>
          </ScrollView>
      )
    })

    console.log(this.state)
    return (

        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={{letterSpacing: 3, fontSize: 30, margin: 10, color: '#EFEFEF'}}>FRIENDS</Text>
                <TouchableHighlight onPress={this.addFriendModal}>
                  <Image style={{height: 15, width: 15, marginLeft: 10}}  source={require('../images/addFriendIconReal.png')} />
                </TouchableHighlight>
            </View>

{/*View add friend modal  */}
            {
              this.state.addFriendModal
              ?
              <View style={{width: '100%', height:'70%', alignItems: 'center', alignContent: 'center', marginTop: 30}}>
                <View style={{width: '90%', height: '80%', backgroundColor: '#EFEFEF', marginTop: 30}}>
                  <TouchableHighlight onPress={this.exitModal}>
                    <Image style={{width: 15,  height: 15, margin: 20}} source={require('../images/x.png')}/>
                  </TouchableHighlight>
                </View> 
              </View>
              :
              null
            }

{/* View Contact modal */}
            {
              this.state.name
              ?
              <friendInfoStuff name={this.state.name}/>
              :
              null
            }

          

{/* exit modal */}
            {
              !this.state.showModal
              ?
              <ScrollView>
              {allFriends}
              </ScrollView>
              :
              null
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    // alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  head:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list:{
    // flex: 1,
    width: '100%',
    padding: 20,
    // flexDirection: 'row',
    height: 'auto'
  },
  listItems:{
    padding: 20,
    width: '100%',
    height: '130%',
    flexDirection:'row'
  }
});

const friendInfoStuff =(props)=>{
  console.log(props)
  return(
                <View style={{width: '86%', height: '80%', backgroundColor: '#D6D6D6', padding: 20, margin: 20,  }}>
                <TouchableHighlight onPress={this.exitModal}>
                  <Image style={{width: 13, height: 13}} source={require('./../images/x.png')}/>
                </TouchableHighlight>

                <View style={{justifyContent: 'space-around', height: '100%', width: '100%'}}>
                  <View>
                    <Text style={{letterSpacing: 1, margin: 20, fontSize: 18, color: '#111'}}>NAME: {props.name}</Text>
                    <Text style={{letterSpacing: 1, margin: 20, fontSize: 18, color: '#111'}}>SAFEHAVEN: {}</Text>
                    <Text style={{letterSpacing: 1, margin: 20, fontSize: 18, color: '#111'}}>EMAIL: {}</Text>
                  </View>

                    <View style={{width: '100%', height: '50%', alignItems: 'center', justifyContent:'center'}}>
                      <Text style={{}}>ADD CONTACT TO GROUPS</Text>
                      <View style={{width: '90%', height: '80%', backgroundColor:'black', borderWidth: 2, borderColor: '#ffe8af'}}>
                        {this.state.groups}
                      </View>
                    </View>

                </View>
            </View>
  )
}