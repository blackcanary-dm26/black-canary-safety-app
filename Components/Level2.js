import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image } from 'react-native';
import Button from 'react-native-button';
// import CheckBox from 'react-native-checkbox';


export default class Level2 extends React.Component {
  constructor() {
      super();
      
      this.state = {
        message: '',
        timeOptions: [
          {
            selected: false,
            time: 1,
            timeMS: 3600000
          },
          {
            selected: false,
            time: 2,
            timeMS: (2 * 3600000)
          },
          {
            selected: false,
            time: 3,
            timeMS: (3 * 3600000)
          },
          {
            selected: false,
            time: 5,
            timeMS: (5 * 3600000)
          },
          {
            selected: false,
            time: 10,
            timeMS: (10 * 3600000)
          },
          {
            selected: false,
            time: 18,
            timeMS: (18 * 3600000)
          },
          {
            selected: false,
            time: 24,
            timeMS: (24 * 3600000)
          }
        ],
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

  toggleTime(event, timeOpt) {
    event.preventDefault();

    timeOpt.selected = true;

    let options = this.state.timeOptions.slice(0);
    options.map((e, index, array) => {
      if (e.time === timeOpt.time) {
        array[index] = timeOpt;
      } else {
        e.selected = false;
        array[index] = e
      }
    });

    this.setState({
        timeOptions: options
    })

  }

  static navigationOptions = {
    title: 'LEVEL 2',
    headerStyle: { backgroundColor: '#111' },
    headerTitleStyle: { color: '#ffe8af' }
  };

  render() {
    
    const {navigate} = this.props.navigation;

    return (
        <View style={styles.container}>
          <ScrollView style={{width: '100%', height:'200%', backgroundColor: '#111'}}>
            <View style={styles.textViewsHeader}>
              <Text style={styles.pageHeader}>SITUATION</Text>
            </View>
            <View style={styles.textViewsMessage}>
              <Text style={styles.infoHeadersMessage}>MESSAGE:</Text>
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
                    return <Button key={contact.username} ref={contact.username} style={{color: contact.isRecipient? '#111' : '#EFEFEF', backgroundColor: contact.isRecipient? '#ffe8af':'rgba(17,17,17,0.65)', height: 35, paddingTop: 5, paddingLeft: 10, paddingBottom: 5, width: '100%', textAlign: 'left'}} onPress={(e) => this.toggleRecipients(e,contact)}>{contact.firstName.toUpperCase() + ' ' + contact.lastName.toUpperCase()}</Button>
                  } else {
                    return <Button key={contact.groupName} ref={contact.groupName} style={{color: contact.isRecipient? '#111' : '#EFEFEF', backgroundColor: contact.isRecipient? '#ffe8af':'rgba(17,17,17,0.65)', height: 35, paddingTop: 5, paddingLeft: 10, paddingBottom: 5, width: '100%', textAlign: 'left'}} onPress={(e) => this.toggleRecipients(e,contact)}>{contact.groupName.toUpperCase()}</Button>                    
                  }
                })
              }
              </ScrollView>
            </View>
            <View style={styles.textViewsTime}>
              <Text style={styles.infoHeadersTime}>TIME ACTIVE (HOURS):</Text>
               <ScrollView style={styles.scrollContacts}>              
              {
                this.state.timeOptions.map(option => {
                  return <Button key={option.time} ref={option.time} style={{color: option.selected? '#111' : '#EFEFEF', backgroundColor: option.selected? '#ffe8af':'rgba(17,17,17,0.65)', height: 35, paddingTop: 5, paddingLeft: 10, paddingBottom: 5, width: '100%', textAlign: 'left'}} onPress={(e) => this.toggleTime(e,option)}>{option.time}</Button>
                })
              }
              </ScrollView> 
            </View>
            <View style={styles.textViews}>
              <Image source={require('./../images/blackCanary.svg')} style={{width: 20, height: 20}}/>
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
    height: '50%',
    backgroundColor: '#111',
    paddingLeft: 40,
    paddingRight: 40,
  },
  textViewsTo: {
    width: '100%',
    height: '45%',
    backgroundColor: '#111',
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 10    
  },
  textViewsHeader: {
    width: '100%',
    height: '20%',
    backgroundColor: '#111',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    marginBottom: 10    
  },
  textViewsTime: {
    width: '100%',
    height: '45%',
    backgroundColor: '#111',
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 10    
  },
  textViews: {
    width: '100%',
    height: '23%',
    backgroundColor: '#ffe8af',
    paddingLeft: 40,
    paddingRight: 40,
  },
  infoHeadersMessage: {
    color: '#EFEFEF',
    fontSize: 18,
    minHeight: 25
  },
  infoHeadersTo: {
    color: '#EFEFEF',
    fontSize: 18,
    minHeight: 25
  },
  infoHeadersTime: {
    color: '#EFEFEF',
    fontSize: 18,
    minHeight: 25
  },
  pageHeader: {
    color: '#EFEFEF',
    fontSize: 30,
    textAlign: 'center'
  },
  scrollContacts: {
    height: 7,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ffe8af'
  },
  message: {
    backgroundColor: 'rgba(17,17,17,0.65)',
    height: 115,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ffe8af'
  },
  pickerView: {
    width: 100,
    height: '60%',
  },
  button: {
    color: '#ffe8af',
    width: '100%',
    height: '100%',
    fontSize: 18,
  }
});