import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Welcome({ navigation }) {
  const onPress = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <Text>Tela Welcome</Text>
      <Text>Splashscreen</Text>
      <TouchableOpacity onPress={onPress} style = {{borderColor: 'black', borderWidth: 2, marginHorizontal: 10}}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
    </>
  );
}

export default Welcome;
