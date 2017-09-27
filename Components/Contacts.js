import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, flatList } from 'react-native';
import Button from 'react-native-button';

export default class Contacts extends React.Component {

  constructor(){
    super()
    this.state={
      friendName: [{name: 'joe', id: 1}, {name: 'ash', id: 2}, {name: 'bob', id: 3}, {name: 'rob', id: 4}],
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

    return (

        <View>
            <View style={styles.head}>
                <Text style={{letterSpacing: 3, fontSize: 25, margin: 10}}>FRIENDS</Text>
            </View>
           {
            this.state.showModal
            ?
            <ScrollView style={{width: '86%', height: '50%', backgroundColor: 'orange', padding: 20, margin: 20}}>
              <Text>MODAL</Text>
                <TouchableHighlight onPress={this.exitModal}>
                  <Image source={require('./../images/x.png')}/>
                </TouchableHighlight>
            </ScrollView>
            :
            null
          } 

            {
              !this.state.showModal
              ?
             <ScrollView style={styles.list}>
              <Text style={{letterSpacing: 1, fontSize: 18, backgroundColor:'yellow'}}>
                {
                  this.state.friendName
                  ?
                  this.state.friendName.map(friend=>{
                    return <Text>{friend.name}</Text>
                  })
                  : 
                  null
                }
                </Text>
              <Button style={{backgroundColor: 'pink'}} onPress={this.showModalMethod}>SEE MORE</Button>
            </ScrollView> 
              :
              null
            }

{/* show the details about friends */}
             
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'flex-start',
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
    flexDirection: 'row',
    height: 900
  }
});