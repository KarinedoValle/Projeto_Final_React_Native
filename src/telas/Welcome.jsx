import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import WelcomeStyle from "../styles/WelcomeStyle";

function Welcome({ navigation }) {
  const onPress = () => {
    navigation.navigate("Hero Company");
  };

  return (
    <>
      <SafeAreaView style={WelcomeStyle.fundo}>
        <View style={WelcomeStyle.body}>
          <Text style={WelcomeStyle.titulo}>Tela Welcome</Text>
          <Text style={WelcomeStyle.txt}>Splashscreen</Text>
          <TouchableOpacity onPress={onPress} style={WelcomeStyle.botao}>
            <Text>Clique aqui</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Welcome;
