import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export default class Home extends React.Component {
  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
        <Text style={styles.header}>SELECT A SITUATION...</Text>
        </View>

            <View style={styles.level1}>
                <Button style={styles.button1}
                    onPress={() =>
                        navigate('Level1')
                    }>
                    OUT WITH FREINDS
                </Button>
            </View>
            <View style={styles.level1}>
                <Button style={styles.button1}
                    onPress={() =>
                        navigate('Level1')
                    }
                >
                ON A DATE
                </Button>
            </View>
            <View style={styles.level1}>
                <Button style={styles.button1}
                    onPress={() =>
                        navigate('Level1')
                    }
                >
                RUNNING
                </Button>
            </View>
            <View style={styles.level1}>
                <Button style={styles.button1}
                    onPress={() =>
                        navigate('Level1')
                    }
                >TRAVELING</Button>
            </View>

        <View style={styles.level2Wrapper}>
            <View style={styles.level2}>
                <Button style={styles.button2}
                    onPress={() =>
                        navigate('Level2')
                    }
                >IN A BAD AREA</Button>
            </View>
            <View style={styles.level2}>
                <Button style={styles.button2}
                    title="Uncomfortable Situation"
                    onPress={() =>
                        navigate('Level2')
                    }
                >UNCOMFORTABLE SITUATION
                </Button>
            </View>                
        </View>

        <View style={styles.level3Wrapper}>
        
            <View style={styles.level3}>
                <Button style={styles.button3}
                    onPress={() =>
                        navigate('Level3')
                    }>
                    EMERGENCY
                </Button>
            </View>
        </View>
            

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2f2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // justifyContent: 'space-around',
    },
    // headerWrapper:{
    //     height: '100',
    //     width: '100%',
    //     alignItems: 'flex-start',
    //     justifyContent: 'flex-start'
    // },
    header:{
        color: 'grey',
        paddingBottom: 40,
        marginTop: 10,
        fontSize: 20
    },
    level1:{
        width: '100%',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        // marginTop: 30
        
    },
    button1:{
      color: '#111111',
      height: 45,
      justifyContent: 'center',
      paddingTop: 10,
      alignItems: 'center',
      letterSpacing: 1, 
    },
    level2Wrapper: {
        width: '100%',
        // marginTop: 30,
    },
    level2: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#ffe8af',
        marginTop: 20,
    },
    button2:{
        color: '#111111',
        height: 45,
        justifyContent: 'center',
        paddingTop: 15,
        alignItems: 'center',
        letterSpacing: 1,
    }, 
    level3Wrapper: {
        width: '100%',
        marginTop: 30
    },
    level3:{
        width: '100%',
        height: 80,
        alignItems: 'center',
        backgroundColor: '#d13030',
        // marginTop: 20,
    },
    button3:{
        color: 'white',
        height: 45,
        justifyContent: 'center',
        paddingTop: 30,
        alignItems: 'center',
        letterSpacing: 1,
  }
});
