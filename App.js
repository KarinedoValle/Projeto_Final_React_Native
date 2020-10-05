import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navegacoes/StackNavigation'
import DrawerNavigation from './src/navegacoes/DrawerNavigation'


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation>
        <DrawerNavigation />
      </StackNavigation>
    </NavigationContainer>
  );
}
