import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import Funcionarios from "../Models/FuncionarioModel";
import WelcomeStyle from "../styles/WelcomeStyle";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("database.db");

function Welcome({ navigation }) {
  useEffect(() => {
    Funcionarios.createTable();
    
    // db.transaction((tx) => {
    //   tx.executeSql(`CREATE TABLE IF NOT EXISTS ${Funcionarios}`);
    // });
  });

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
