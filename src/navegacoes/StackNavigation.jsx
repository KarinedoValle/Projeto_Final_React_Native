import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../telas/Welcome'
import DrawerNavigation from './DrawerNavigation'

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default StackNavigation