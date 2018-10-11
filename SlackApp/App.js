
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './screens/home.js';
import Second from './screens/second.js';
import Third from './screens/third.js';


//This is the first page the app goes to, but this holds all the screens
//and then navigates to the first one
const Navigation = createBottomTabNavigator(
  {
    Home:{
      screen:Home
    },
    Second:{
      screen:Second
    },
    Third:{
      screen:Third
    },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Second') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)

export default Navigation
















