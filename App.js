import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navegacoes/StackNavigation'
import DrawerNavigation from './src/navegacoes/DrawerNavigation'
import LottieView from "lottie-react-native";


export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigation>
          <DrawerNavigation />
        </StackNavigation>
      </NavigationContainer>
    </>
  );

}
