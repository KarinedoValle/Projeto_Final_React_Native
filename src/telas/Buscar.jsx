import React, { useEffect, useState } from "react";
import { Text, TextInput, View, SafeAreaView } from "react-native";
import Api from "../api/Api";
import Funcionarios from '../Models/FuncionarioModel'
import BuscarStyle from "../styles/BuscarStyles";

function Buscar() {
  const [id, setId] = useState("");
  const [DATA, setDATA] = useState([])

  useEffect(() => {
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          setDATA(response.data);
        })
        .catch((error) => {
          console.log(error)
          // Funcionarios.find(id)
        });
    }

  }, [id]);

  return (
    <>
    <SafeAreaView style={BuscarStyle.fundo}>
      <View style={BuscarStyle.body}>
        <Text style={BuscarStyle.titulo}>Tela Buscar</Text>
        <TextInput
          style={BuscarStyle.input}
          onChangeText={(text) => {
            setId(text);
          }}
          placeholder="Digite um Id"
        ></TextInput>
        <View style={BuscarStyle.dados}>
        <Text style={BuscarStyle.txt}>Id: {DATA.id}</Text>
        <Text style={BuscarStyle.txt}>Nome: {DATA.nome}</Text>
        <Text style={BuscarStyle.txt}>CPF: {DATA.cpf}</Text>
        </View>
      </View>
      </SafeAreaView>
    </>
  );
}

export default Buscar;
