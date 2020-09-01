import React, {useState} from 'react';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import DrawerScreen from './Components/Navigators/DrawerNaviagator';
import {myTheme} from './Context/Context';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const CustomDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DarkTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <myTheme.Provider value={toggleTheme}>
        <NavigationContainer theme={theme}>
          <DrawerScreen />
        </NavigationContainer>
      </myTheme.Provider>
    </PaperProvider>
  );
};

export default App;
