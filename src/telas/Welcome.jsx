import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Api from "../api/Api";
import Funcionarios from "../Models/FuncionarioModel";
import WelcomeStyle from "../styles/WelcomeStyle";
import * as SQLite from "expo-sqlite";
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer'

function Welcome({ navigation }) {
  const [cpf, setCpf] = useState();
  const [nome, setNome] = useState();

  const onPress = async () => {
    const usuario = await Funcionarios.findBy({ cpf_eq: cpf });
    if (usuario !== null) {
      navigation.navigate("Hero Company", { nome: usuario.nome });
    } else {
      Alert.alert("Não foi encontrado um registro para este CPF.");
    }
  };

  const cadastrar = () => {
    navigation.navigate("Cadastre-se", { cadastro: true });
  };

  useEffect(() => {
    Funcionarios.dropTable();
    Funcionarios.createTable();
    
    Api.get(`/funcionario`)
      .then((response) => {
        const func = response.data
        const databaseLayer = new DatabaseLayer(async () => SQLite.openDatabase('database.db'), 'Funcionarios')
        databaseLayer.bulkInsertOrReplace(func)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SafeAreaView style={WelcomeStyle.fundo}>
        <View style={WelcomeStyle.body}>
          <View>
            <Image
              style={WelcomeStyle.img}
              source={require("../assets/images/nova-logo.png")}
            />
          </View>

          <View>
            <TextInput
              onChangeText={(text) => setCpf(text)}
              placeholder="Digite seu CPF"
              style={WelcomeStyle.input}
            ></TextInput>
          </View>

          <View style={WelcomeStyle.div}>
            <TouchableOpacity onPress={onPress} style={WelcomeStyle.botao}>
              <Text style={WelcomeStyle.botaoTxt}>Entrar</Text>
            </TouchableOpacity>

            <View style={WelcomeStyle.divBotao}>
              <Text style={WelcomeStyle.txtBotao1}>Não possui conta? </Text>
              <View>
                <TouchableOpacity onPress={cadastrar}>
                  <Text>
                    <Text style={WelcomeStyle.txtBotao}>Cadastre-se</Text>.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Welcome;
