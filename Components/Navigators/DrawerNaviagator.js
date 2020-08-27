import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import StackScreen from './StackNavigator';
import DetailsScreen from '../Screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
