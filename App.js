import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navegacoes/StackNavigation'
import DrawerNavigation from './src/navegacoes/DrawerNavigation'
import LottieView from "lottie-react-native";


export default function App() {
  // const [isReady, setIsReady] = useState(true);
  // const animation = useRef(null);

  // useEffect(() => {
  //   if (!animation.current) {
  //     console.log("oi");
  //     return;
  //   }
  //   animation.current.play();
  // }, [animation]);
  
  // if (!isReady) {
  //   return (
  //     <LottieView
  //       ref={animation}
  //       style={{
  //         width: 400,
  //         height: 400,
  //         backgroundColor: "#eee",
  //       }}
  //       loop={false}
  //       speed={2}
  //       source={require("./assets/animation/splashscreen.json")}
  //       onAnimationFinish={() => setIsReady(true)}
  //     />
  //   );
  // }
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
