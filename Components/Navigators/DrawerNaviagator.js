import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import StackScreen from './StackNavigator';
import DrawerContent from '../Screens/DrawerContent';
import ProfileScreen from '../Screens/ProfileScreen';
import BookMarkScreen from '../Screens/BookMarks';
import SettingsScreen from '../Screens/Settings';
import SupportScreen from '../Screens/Support';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="BookMarks" component={BookMarkScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
