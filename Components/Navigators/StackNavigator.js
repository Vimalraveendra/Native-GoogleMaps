import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailsScreen';

import BottomTabScreen from './BottomNavigator';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
