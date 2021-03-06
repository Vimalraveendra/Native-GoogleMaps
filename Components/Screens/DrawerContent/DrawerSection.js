import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';

import {DrawerItem} from '@react-navigation/drawer';

import {
  Text,
  Drawer,
  TouchableRipple,
  Switch,
  useTheme,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {myTheme} from '../../../Context/Context';
Icon.loadFont();

const DrawerSection = (props) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const PaperTheme = useTheme();
  const toggleTheme = React.useContext(myTheme);

  return (
    <View>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          )}
          label="Home"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="account-outline" color={color} size={size} />
          )}
          label="Profile"
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="bookmark-outline" color={color} size={size} />
          )}
          label="Bookmarks"
          onPress={() => {
            props.navigation.navigate('BookMarks');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="eye-settings-outline" color={color} size={size} />
          )}
          label="Settings"
          onPress={() => {
            props.navigation.navigate('Settings');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="account-check-outline" color={color} size={size} />
          )}
          label="Support"
          onPress={() => {
            props.navigation.navigate('Support');
          }}
        />
      </Drawer.Section>
      <Drawer.Section title="Preference">
        <TouchableRipple
          onPress={() => {
            toggleTheme();
          }}>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={PaperTheme.dark} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 14,
  },
});
export default DrawerSection;
