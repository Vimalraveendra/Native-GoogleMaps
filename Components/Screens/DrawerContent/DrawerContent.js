import React from 'react';

import {View, StyleSheet} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {Drawer} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import UserInfoScreen from './UserInfo';
import DrawerSection from './DrawerSection';

const DrawerContent = (props) => {
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <UserInfoScreen />
          <DrawerSection {...props} />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawer}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign-Out"
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  bottomDrawer: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
export default DrawerContent;
