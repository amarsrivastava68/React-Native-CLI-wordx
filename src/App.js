import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens

import LandingPage from './screens/LandingPage';
import InfoPage from './screens/InfoPage';
import {UserProvider} from './context/userContext';
import {SettingsProvider} from './context/settingsContext';
const Stack = createNativeStackNavigator();
import RollDicePage from './screens/RollDicePage';
import GamePage from './screens/GamePage';
import ResultPage from './screens/ResultPage';
import LeaderBoardPage from './screens/LeaderBoardPage';
import LastPage from './screens/LastPage';



function App() {
  return (
    <UserProvider>
      <SettingsProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LandingPage"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="InfoPage" component={InfoPage} />
            <Stack.Screen name="RollDicePage" component={RollDicePage} />
            <Stack.Screen name="GamePage" component={GamePage} />
            <Stack.Screen name="ResultPage" component={ResultPage} />
            <Stack.Screen name="LeaderBoardPage" component={LeaderBoardPage} />
            <Stack.Screen name="LastPage" component={LastPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SettingsProvider>
    </UserProvider>
  );
}

export default App;
