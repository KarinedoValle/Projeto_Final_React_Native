import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Api from "../api/Api";
import Funcionarios from "../Models/FuncionarioModel";
import BuscarStyle from "../styles/BuscarStyles";
import SoBotao from "../components/SoBotao";

function Buscar() {
  const [id, setId] = useState("");
  const [DATA, setDATA] = useState([]);

  const onPress = async () => {
    const func = await Funcionarios.find(id);
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          if (response.data !== null) {
            setDATA(response.data);
            setId("");
          } else {
            setDATA("");
          }
        })
        .catch((error) => {
          setDATA("");
          if (func !== null) {
            setDATA(func);
          }
          if (func === null) {
            setDATA("");
            Alert.alert(
              "Erro",
              "Não existe um funcionário com o id especificado"
            );
          }
        });
    }
  };

  return (
    <>
      <SafeAreaView style={BuscarStyle.fundo}>
        <View style={BuscarStyle.body}>
          <Text style={BuscarStyle.titulo}>Buscar</Text>
          <TextInput
            style={BuscarStyle.input}
            onChangeText={(text) => {
              setId(text);
            }}
            placeholder="Digite um Id"
            value={id}
          ></TextInput>
          <View style={BuscarStyle.dados}>
            <Text style={BuscarStyle.txt}>
              <Text style={BuscarStyle.txt1}>Id:</Text> {DATA.id}
            </Text>
            <Text style={BuscarStyle.txt}>
              <Text style={BuscarStyle.txt1}>Nome:</Text> {DATA.nome}
            </Text>
            <Text style={BuscarStyle.txt}>
              <Text style={BuscarStyle.txt1}>CPF:</Text> {DATA.cpf}
            </Text>
          </View>
          <SoBotao
            textstyle={BuscarStyle.botaoTxt}
            text="Buscar"
            onPress={onPress}
            botaostyle={BuscarStyle.botao}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default Buscar;
