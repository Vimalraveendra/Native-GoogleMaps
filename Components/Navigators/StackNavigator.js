import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import DetailsScreen from '../Screens/DetailsScreen';

import BottomTabScreen from './BottomNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={BottomTabScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#f4511e"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
