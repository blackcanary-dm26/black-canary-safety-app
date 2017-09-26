import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Keyboard, Picker } from 'react-native';
import Button from 'react-native-button';
// import CheckBox from 'react-native-checkbox';


export default class Level1 extends React.Component {
  constructor() {
      super();
      
      this.state = {
        message: '',
        timeActive: 0,
        contacts: [
          {
            firstName: 'Janise',
            lastName: 'Suski',
            username: 'janises',
            userID: 1,            
            socketID: '98734jbfhljabh38y7r8734oybfjsdhbfwp495bfuijfsgnk547',
            email: 'janises@janises.janises'
          },
          {
            firstName: 'Andi',
            lastName: 'Platter',
            username: 'meatGap',
            userID: 2,                        
            socketID: '98asjdfhauiwefnkjfgskrguroybfjsdhbf8734y534hgsdf63g263',
            email: 'andi@meat.gap'
          },
          {
            firstName: 'Abby',
            lastName: 'Thelin',
            username: 'noBats',
            userID: 3,                                    
            socketID: '732h5bd672bdhu5489dhj834hf743ihfbfjsdhbfwp495bfuijfsgnk547',
            email: 'abby@noBats.tuna'
          },
          {
            firstName: 'Alan',
            lastName: 'Miller',
            username: 'alien',
            userID: 4,                                    
            socketID: '732h98234f59e7634asdghf2946msndfblrehfsdhbfwp495bfuijfsgnk547',
            email: 'alan@theystillthinkimhuman.mothership'
          },
          {
            firstName: 'Mom',
            lastName: '',
            username: 'knk',
            userID: 35,                                    
            socketID: '732kasjdhf74qbafjlhskf7q98234hfkjdff743ihfbfjsdhbfwp495bfuijfsgnk547',
            email: 'mom@mom.mom'
          },
          {
            firstName: 'Jake',
            lastName: 'Keator',
            username: 'jakeSnake',
            userID: 44,                                    
            socketID: '7akjsdafhlao723hflakhf34fbajshfs3784kufhibfblrehfsdhbfwp495bfuijfsgnk547',
            email: 'brother@brother.brother'
          },
          {
            firstName: 'Andrew',
            lastName: 'Skywalker',
            username: 'darthEquitus',
            userID: 49,                                    
            socketID: '7akj69afhlaskdjhflaiuwehfa93783784kufhibwi34y89iljbdf8wp495bfuijfsgnk547',
            email: 'boyfriend@boyfriend.boyfriend'
          },
          {
            groupName: 'Family',
            groupID: '1',
            groupMembers: [
              {
                firstName: 'Mom',
                lastName: '',
                username: 'knk',
                userID: 35,                                    
                socketID: '732kasjdhf74qbafjlhskf7q98234hfkjdff743ihfbfjsdhbfwp495bfuijfsgnk547',
                email: 'mom@mom.mom'
              },
              {
                firstName: 'Jake',
                lastName: 'Keator',
                username: 'jakeSnake',
                userID: 44,                                    
                socketID: '7akjsdafhlao723hflakhf34fbajshfs3784kufhibfblrehfsdhbfwp495bfuijfsgnk547',
                email: 'brother@brother.brother'
              },
            ]
          },
          {
            groupName: 'Emergency Contacts',
            groupID: '2',
            groupMembers: [
              {
                firstName: 'Mom',
                lastName: '',
                username: 'knk',
                userID: 35,                                    
                socketID: '732kasjdhf74qbafjlhskf7q98234hfkjdff743ihfbfjsdhbfwp495bfuijfsgnk547',
                email: 'mom@mom.mom'
              },
              {
                firstName: 'Jake',
                lastName: 'Keator',
                username: 'jakeSnake',
                userID: 44,                                    
                socketID: '7akjsdafhlao723hflakhf34fbajshfs3784kufhibfblrehfsdhbfwp495bfuijfsgnk547',
                email: 'brother@brother.brother'
              },
              {
                firstName: 'Andrew',
                lastName: 'Skywalker',
                username: 'darthEquitus',
                userID: 49,                                    
                socketID: '7akj69afhlaskdjhflaiuwehfa93783784kufhibwi34y89iljbdf8wp495bfuijfsgnk547',
                email: 'boyfriend@boyfriend.boyfriend'
              },
            ]
          },
        ]
      }
  }

  componentDidMount(){
    let x = this.state.contacts.slice(0);
    x.map((e, index, array) => {
        e.isRecipient = false
        array[index] = e
    })
    this.setState({
        contacts: x
    })
  }

  toggleRecipients(event, contact) {
    event.preventDefault();

    let cont = this.state.contacts.slice(0);
    
    if(contact.isRecipient) {
      contact.isRecipient = false;
      cont.map((e, index, array) => {
        if((e.hasOwnProperty('userID') && e.userID === contact.userID) || (e.hasOwnProperty('groupName') && e.groupName === contact.groupName)) {
          array[index] = contact;
        }
      })
      //make false
      //update contact
    } else {
      contact.isRecipient = true;
      cont.map((e, index, array) => {
        if((e.hasOwnProperty('userID') && e.userID === contact.userID) || (e.hasOwnProperty('groupName') && e.groupName === contact.groupName)) {
          array[index] = contact;
        }
      })
      
      //make true
      //update contact
    }

    this.setState({
        contacts: cont
    })

  }

  render() {
    
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
          <ScrollView style={{width: '100%', borderWidth: 1, borderColor: 'red'}}>
            <View style={styles.textViewsHeader}>
              <Text style={styles.pageHeader}>SITUATION</Text>
            </View>
            <View style={styles.textViewsMessage}>
              <Text style={styles.infoHeaders}>MESSAGE:</Text>
              <View style={styles.message}><TextInput ref="message" autoCapitalize={'characters'} blurOnSubmit={true} style={{color: '#EFEFEF', fontSize: 18}} multiline={true} numberOfLines={4} editable={true} maxLength = {180} onChangeText={(text) => this.setState({message: text})} value={this.state.message}/></View>
            </View>
            <View style={styles.textViewsTo}>
              <Text style={styles.infoHeadersTo}>TO: {this.state.contacts.map((e, index) => {
                if (e.isRecipient) {
                  if(e.hasOwnProperty('firstName')){
                    return e.firstName.toUpperCase() + ' ' + e.lastName.toUpperCase() + '; '
                  } else {
                    return e.groupName.toUpperCase() + '; '
                  }
                }
                  
                })}</Text>
              <ScrollView style={styles.scrollContacts}>              
              {
                this.state.contacts.map(contact => {
                  if(contact.hasOwnProperty('firstName')){
                    return <Button key={contact.username} ref={contact.username} style={{color: contact.isRecipient? '#111' : '#EFEFEF', backgroundColor: contact.isRecipient? '#E8BE59':'rgba(17,17,17,0.65)', height: 35, paddingTop: 5, paddingBottom: 5}} onPress={(e) => this.toggleRecipients(e,contact)}>{contact.firstName.toUpperCase() + ' ' + contact.lastName.toUpperCase()}</Button>
                  } else {
                    return <Button key={contact.groupName} ref={contact.groupName} style={{color: contact.isRecipient? '#111' : '#EFEFEF', backgroundColor: contact.isRecipient? '#E8BE59':'rgba(17,17,17,0.65)', height: 35, paddingTop: 5, paddingBottom: 5}} onPress={(e) => this.toggleRecipients(e,contact)}>{contact.groupName.toUpperCase()}</Button>                    
                  }
                })
              }
              </ScrollView>
            </View>
            <View style={styles.textViews}>
              <Text style={styles.infoHeaders}>TIME ACTIVE (HOURS)</Text>              
              <Picker
                selectedValue={this.state.timeActive}
                onValueChange={(itemValue, itemIndex) => this.setState({timeActive: itemValue})}>
                <Picker.Item label="1" value={3600000} />
                <Picker.Item label="2" value={2 * 3600000} />
                <Picker.Item label="3" value={3 * 3600000} />
                <Picker.Item label="5" value={5 * 3600000} />
                <Picker.Item label="10" value={10 * 3600000} />
                <Picker.Item label="18" value={18 * 3600000} />                                                
                <Picker.Item label="24" value={24 * 3600000} />                          
              </Picker>             
            </View>
            <View>
              <Button style={styles.button}>SEND</Button>
            </View>
          </ScrollView>
          
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
  },
  button:{
      color: '#111111',
      height: 45,
      justifyContent: 'center',
      paddingTop: 10,
      alignItems: 'center',
      letterSpacing: 1, 
  },
  textViewsMessage: {
    width: '100%',
    height: '23%',
    backgroundColor: '#EFEFEF',
    paddingLeft: 40,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: 'blue'
  },
  textViewsTo: {
    width: '100%',
    height: '30%',
    backgroundColor: '#EFEFEF',
    paddingLeft: 40,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: 'blue'
  },
  textViewsHeader: {
    width: '100%',
    height: '10%',
    backgroundColor: '#EFEFEF',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: 'blue'
  },
  textViews: {
    width: '100%',
    height: '23%',
    backgroundColor: '#EFEFEF',
    paddingLeft: 40,
    paddingRight: 40,
  },
  infoHeaders: {
    color: '#111111',
    fontSize: 18,
  },
  infoHeadersTo: {
    color: '#111111',
    fontSize: 18,
    minHeight: 50
  },
  pageHeader: {
    color: '#111111',
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'blue'
  },
  scrollContacts: {
    height: 10,
    borderWidth: 1,
    borderColor: 'green',
  },
  message: {
    backgroundColor: 'rgba(17,17,17,0.65)',
    height: 115,
    padding: 10,
  }
});