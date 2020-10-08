import React, { useEffect, useState } from "react";
import { Text, TextInput, View, SafeAreaView } from "react-native";
import Api from "../api/Api";
import Funcionarios from "../Models/FuncionarioModel";
import BuscarStyle from "../styles/BuscarStyles";

function Buscar() {
  const [id, setId] = useState("");
  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          if (response.data !== null) {
            setDATA(response.data);
          }
          setDATA("");
        })
        .catch((error) => {
          console.log(error);
          const pegarOffline = async () => {
            const func = await Funcionarios.find(id);
            setDATA("");
            console.log(id);
            if (response.data !== null) {
              setDATA(response.data);
            }
            if (id === null) {
              setDATA("");
            }
          };
          pegarOffline();
        });
    }
  }, [id]);

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
        </View>
      </SafeAreaView>
    </>
  );
}

export default Buscar;
