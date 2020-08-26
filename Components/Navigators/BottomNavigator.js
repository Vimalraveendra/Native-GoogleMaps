import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailsScreen';
import ProfileScreen from '../ProfileScreen';
import ExploreScreen from '../Explore';

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
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Details" component={DetailsScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Explore" component={ExploreScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabScreen;
