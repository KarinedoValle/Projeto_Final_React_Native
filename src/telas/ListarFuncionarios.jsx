import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView, View, ScrollView } from "react-native";
import Api from "../api/Api";
import Funcionarios from "../Models/FuncionarioModel";
import ListarStyle from "../styles/ListarStyles";

function ListarFuncionarios() {
  const [DATA, setDATA] = useState([]);
  // const [listaFuncionarios, setListaFuncionarios] = useState([]);

  useEffect(() => {
    Api.get(`/funcionario`)
    .then((response) => {
      if (response.data !== null) {
        setDATA(response.data);
      }else{
        setDATA("");
      }
    }).catch(() => {
      async function pegarListagem(){
        const options = {
          columns: 'id, nome, cpf',
          order: 'id ASC'
        }
        setDATA(await Funcionarios.query(options))
      }
      pegarListagem()
    })
  });

  return (
    <>
      <SafeAreaView style={ListarStyle.fundo}>
        {/* <ScrollView> */}
          <View style={ListarStyle.body}>
            <Text style={ListarStyle.titulo}>Funcionários</Text>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <View style={ListarStyle.dados}>
                  <Text style={ListarStyle.txt}>Id: {item.id}</Text>
                  <Text style={ListarStyle.txt}>Nome: {item.nome}</Text>
                  <Text style={ListarStyle.txt}>CPF: {item.cpf}</Text>
                </View>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
}

export default ListarFuncionarios;
