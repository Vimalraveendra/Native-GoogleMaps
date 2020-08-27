import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ExploreScreen from '../Screens/Explore';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
IonIcon.loadFont();

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{backgroundColor: 'tomato'}}
      screenOptions={{
        tabBarColor: '#f4511e',
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <BottomTab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color}) => <Icon name="bell" color={color} size={26} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <IonIcon name="md-aperture" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabScreen;
