import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native";
import Funcionarios from "../Models/FuncionarioModel";
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
          <View style={{ flex: 1 }}>
            <Image
              style={WelcomeStyle.img}
              source={require("../assets/images/hero.png")}
            />
          </View>
          <TouchableOpacity onPress={onPress} style={WelcomeStyle.botao}>
            <Text>Clique aqui</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Welcome;
