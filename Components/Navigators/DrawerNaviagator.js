import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import StackScreen from './StackNavigator';
import DrawerContent from '../Screens/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
