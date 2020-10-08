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

function Welcome({ navigation }) {
  const [cpf, setCpf] = useState();
  const [nome, setNome] = useState();

  const onPress = async () => {
    const usuario = await Funcionarios.findBy({ cpf_eq: cpf });
    if ((await Funcionarios.findBy({ cpf_eq: cpf })) !== null) {
      navigation.navigate("Hero Company", { nome: usuario.nome });
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "Hero Company" }, { nome: usuario.nome }],
      // });
    } else {
      Alert.alert("Não foi encontrado um registro para este CPF.");
    }
    // Professor fez
    // Funcionarios.dropTable();
    // console.log("OIr");
  };

  const cadastrar = () => {
    navigation.navigate("Cadastre-se", { cadastro: true });
  };

  useEffect(() => {
    Funcionarios.createTable();
    Api.get(`/funcionario`)
      .then((response) => {
        salvarListagem(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const salvarListagem = async (lista) => {
    //Parte que o professor fez
    await Funcionarios.destroyAll();
    lista.map((funcionario) => {
      const props = {
        id: funcionario.id,
        nome: funcionario.nome,
        cpf: funcionario.cpf,
      };
      Funcionarios.create(props);
    });
    /*     for (let i = 0; i < lista.length; i++) {
      const func = lista[i];
      const props = {
        id: func.id,
        nome: func.nome,
        cpf: func.cpf,
      };
      Funcionarios.create(props);
    } */
  };

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
