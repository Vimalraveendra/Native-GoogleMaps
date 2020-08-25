import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.StackScreen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
