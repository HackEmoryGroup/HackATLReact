import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView> 
        <View style={styles.topBar}>
          <Text style={styles.topText}> Slack Is Awesome! </Text> 
        </View> 
        <View style={styles.container}>
          
          <Image style={styles.image} source={require('../assets/slackLogo.png')}/>
        </View>
        <View style={styles.secondContainer}>

          <View style={styles.textContainer}> 

            <Text style={styles.secondContainerHeadline}> Slack Is Easy </Text> 

            <Text style={styles.secondContainerText}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim. sed do eiusmod tempor incididunt. </Text> 

            <Text style={styles.secondContainerText}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim. sed do eiusmod tempor incididunt. </Text> 

          </View> 

          <View style={styles.buttonWrapper}>


            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Show Me Slack!"
              color="#fff"
            />
          </View> 
        </View> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#ddd',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainerText: {
    fontSize: 16, 
    marginTop: 20,
  },
  secondContainerHeadline: {
    fontSize: 24, 
    marginTop: 25,
    fontWeight: 'bold'
  },
  textContainer: {
    marginLeft: 30,
    marginRight: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    marginTop: 40, 
    fontSize: 20, 
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    height: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300
  },
  secondContainer: {
    backgroundColor: '#87D8ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#ff6b6b',
    height: 80, 
    width: 180, 
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,

  }
});

// backgroundColor: '#87D8ED',
