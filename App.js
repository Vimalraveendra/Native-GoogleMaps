import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import DrawerScreen from './Components/Navigators/DrawerNaviagator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};

export default App;
