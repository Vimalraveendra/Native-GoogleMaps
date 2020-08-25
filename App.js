import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './Components/Navigators/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default App;
