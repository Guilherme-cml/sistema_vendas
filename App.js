
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Router';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const Inicio = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{headerShown: false}} />

      <Stack.Screen  
      name='MainTabs'
      component={Routes}
      options={{headerShown: false}}
      initialParams={{screen: 'Login'}} />

    </Stack.Navigator>
  );
};
export default function App() {


  return (
    <PaperProvider>
      <NavigationContainer>
        <Inicio/>
      </NavigationContainer>
    </PaperProvider>
  

  );
}

