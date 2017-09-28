import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, ListView, Animated } from 'react-native';

import Button from 'react-native-button';


export default class friendInfo extends Component{
    render(){
        return(

<View style={styles.container}>
            <View style={{width: '86%', height: '80%', backgroundColor: '#D6D6D6', padding: 20, margin: 20,  }}>
                <TouchableHighlight onPress={this.exitModal}>
                  <Image style={{width: 13, height: 13}} source={require('./../images/x.png')}/>
                </TouchableHighlight>

                <View style={{justifyContent: 'space-around', height: '100%', width: '100%'}}>
                  <View>
                    <Text style={{letterSpacing: 1, margin: 20, fontSize: 18, color: '#111'}}>NAME: {bish}</Text>
                    <Text style={{letterSpacing: 1, margin: 20, fontSize: 18, color: '#111'}}>SAFEHAVEN: {}</Text>
                    <Text style={{letterSpacing: 1, margin: 20, fontSize: 18, color: '#111'}}>EMAIL: {}</Text>
                  </View>

                    <View style={{width: '100%', height: '50%', alignItems: 'center', justifyContent:'center'}}>
                      <Text style={{}}>ADD CONTACT TO GROUPS</Text>
                      <View style={{width: '90%', height: '80%', backgroundColor:'black', borderWidth: 2, borderColor: '#ffe8af'}}>

                      </View>
                    </View>

                </View>
            </View>
</View>

        )
    }
}
