import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, ListView, Animated } from 'react-native';
import Button from 'react-native-button';

export default class Contacts extends React.Component {

  constructor(){
    super()
    this.state={
      friendName: [{name: 'ash', id: 2}, {name: 'bob', id: 3}, {name: 'rob', id: 4}, {name: 'robert', id: 5}, {name: 'nina', id: 6}, {name: 'Lynda', id: 7}, {name: 'Abby', id: 8}, {name: 'ash', id: 200}, {name: 'bob', id: 30}, {name: 'rob', id: 40}, {name: 'robert', id: 50}, {name: 'nina', id: 60}, {name: 'Lynda', id: 70}, {name: 'Abby', id: 80}],
      showModal: false
    }
    this.showModalMethod = this.showModalMethod.bind(this)
    this.exitModal = this.exitModal.bind(this)
  }

  showModalMethod(){
    this.setState({
      showModal: true
    })
  }

  exitModal(){
    this.setState({
      showModal: false
    })
  }

  render() {

    const {navigate} = this.props.navigation;

    const allFriends = this.state.friendName.map((friends, i)=>{
      return(

          <ScrollView style={styles.listItems} key={i}>
            <Text style={{fontSize: 28, letterSpacing: 1}}>{friends.name}</Text>
            <Button style={{fontSize: 18}} onPress={this.showModalMethod}>SEE INFO</Button>
          </ScrollView>
      )
    })

    return (

        <View>
            <View style={styles.head}>
                <Text style={{letterSpacing: 3, fontSize: 25, margin: 10}}>FRIENDS</Text>
            </View>

{/* View modal */}
           {
            this.state.showModal
            ?
            <View style={{width: '86%', height: '80%', backgroundColor: '#D6D6D6', padding: 20, margin: 20,  }}>
                <TouchableHighlight onPress={this.exitModal}>
                  <Image style={{width: 13, height: 13}} source={require('./../images/x.png')}/>
                </TouchableHighlight>
                <View>
                  <Text style={{letterSpacing: 1, margin: 20, fontSize: 18}}>NAME: </Text>
                  <Text style={{letterSpacing: 1, margin: 20, fontSize: 18}}>SAFEHAVEN: </Text>
                  <Text style={{letterSpacing: 1, margin: 20, fontSize: 18}}>EMAIL: </Text>
                  <Text style={{letterSpacing: 1, margin: 20, fontSize: 18}}>NUMBER: </Text>
                </View>
            </View>
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
    backgroundColor: '#EFEFEF',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  head:{
    flexDirection: 'row',
    width: '100%'
  },
  list:{
    // flex: 1,
    width: '100%',
    padding: 20,
    // flexDirection: 'row',
    height: 'auto'
  },
  listItems:{
    padding: 40,
    width: '100%',
    height: '130%',
    flexDirection:'row'
  }
});