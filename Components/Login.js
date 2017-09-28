import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import Button from 'react-native-button';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: '',
    headerStyle: { backgroundColor: '#EFEFEF' },
    headerTitleStyle: { color: '#ffe8af' }
  };

  //console.log(this.state);

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, width: '100%' }}
          ref="_scrollView"
          scrollEventThrottle={16}
        >
          <View
            style={{
              flex: 1,
              marginBottom: 10,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              style={{
                height: 170,
                width: 250
              }}
              source={require('./../images/canaryWithLogo_3.png')}
            />
          </View>
          <View style={{ flex: 3, width: '100%' }}>
            <View
              style={{
                width: '100%',
                backgroundColor: 'rgba(17,17,17,0.65)',
                height: 90,
                alignItems: 'center'
              }}
            >
              {/*<Text style={styles.inputTitles}>NAME:</Text>*/}
              <TextInput
                autoCapitalize={'characters'}
                blurOnSubmit={true}
                maxLength={50}
                keyboardType={'ascii-capable'}
                returnKeyType={'done'}
                placeholder="USERNAME"
                placeholderTextColor="rgba(239, 239, 239, 0.5)"
                value={this.state.username}
                onChangeText={text => {
                  this.setState({ username: text });
                }}
                onSubmitEditing={() =>
                  this.refs._scrollView.scrollTo({
                    x: 0,
                    y: 0,
                    animated: true
                  })}
                onFocus={() =>
                  this.refs._scrollView.scrollTo({
                    x: 0,
                    y: 50,
                    animated: true
                  })}
                style={{
                  color: '#EFEFEF',
                  fontSize: 18,
                  height: 90,
                  width: '100%',
                  textAlign: 'center'
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                backgroundColor: 'rgba(17,17,17,0.65)',
                height: 90,
                alignItems: 'center'
              }}
            >
              {/*<Text style={styles.inputTitles}>USERNAME:</Text>*/}
              <TextInput
                autoCapitalize={'characters'}
                blurOnSubmit={true}
                maxLength={10}
                keyboardType={'numeric'}
                returnKeyType={'done'}
                placeholder="PHONE NUMBER"
                placeholderTextColor="rgba(239, 239, 239, 0.5)"
                value={this.state.phoneNumber}
                onChangeText={text => {
                  let newText = text.split('-').join('');
                  if (!isNaN(1 * newText)) {
                    this.setState({ phoneNumber: newText });
                  }
                }}
                onSubmitEditing={() =>
                  this.refs._scrollView.scrollTo({
                    x: 0,
                    y: 0,
                    animated: true
                  })}
                onFocus={() =>
                  this.refs._scrollView.scrollTo({
                    x: 0,
                    y: 100,
                    animated: true
                  })}
                style={{
                  color: '#EFEFEF',
                  fontSize: 18,
                  height: 90,
                  width: '100%',
                  textAlign: 'center'
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                backgroundColor: 'rgba(17,17,17,0.65)',
                height: 90,
                alignItems: 'center'
              }}
            >
              {/*<Text style={styles.inputTitles}>PASSWORD:</Text>*/}
              <TextInput
                secureTextEntry={true}
                blurOnSubmit={true}
                maxLength={16}
                returnKeyType={'done'}
                placeholder="PASSWORD"
                placeholderTextColor="rgba(239, 239, 239, 0.5)"
                value={this.state.password}
                onChangeText={text => {
                  this.setState({ password: text });
                }}
                onSubmitEditing={() =>
                  this.refs._scrollView.scrollTo({
                    x: 0,
                    y: 0,
                    animated: true
                  })}
                onFocus={() =>
                  this.refs._scrollView.scrollTo({
                    x: 0,
                    y: 167,
                    animated: true
                  })}
                style={{
                  color: '#EFEFEF',
                  fontSize: 18,
                  height: 90,
                  width: '100%',
                  textAlign: 'center'
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: 120,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button
                style={{
                  backgroundColor: '#ffe8af',
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 20,
                  width: '40%',
                  color: '#111'
                }}
              >
                LOGIN OR SIGN UP
              </Button>
            </View>
          </View>
          <View style={{ flex: 1, height: 200, width: '100%' }} />
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
    justifyContent: 'flex-start',
    overflow: 'scroll'
  },
  title: {
    fontSize: 30
  },
  inputs: {
    height: '50%',
    width: '70%',
    backgroundColor: 'rgba(17,17,17,0.65)',
    borderColor: 'red'
  },
  inputTitles: {
    width: '100%',
    color: '#EFEFEF',
    fontSize: 18,
    textAlign: 'center'
  }
});
