import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView, View, ScrollView } from "react-native";
import Api from "../api/Api";
import Funcionarios from "../Models/FuncionarioModel";
import ListarStyle from "../styles/ListarStyles";

function ListarFuncionarios() {
  const [DATA, setDATA] = useState([]);
  const [listaFuncionarios, setListaFuncionarios] = useState([]);

  useEffect(() => {
    // const salvar = async () => {
    //   const dados = {
    //     columns: "id, nome, cpf",
    //   };

    //   // setListaFuncionarios(Funcionarios.query(dados));
    //   console.log(await Funcionarios.find(1));
    // };

    Api.get(`/funcionario`)
      .then((response) => {
        setDATA(response.data);
        // salvar();
        for (var i = 0; i < response.data.length; i++) {
          Funcionarios.create(response.data[i]);
          console.log(response.data[i]);
        }
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <SafeAreaView style={ListarStyle.fundo}>
        <ScrollView>
          <View style={ListarStyle.body}>
            <Text style={ListarStyle.titulo}>Tela ListarFuncionarios</Text>
            <FlatList
              data={listaFuncionarios}
              renderItem={({ item }) => (
                <View style={ListarStyle.dados}>
                  <Text style={ListarStyle.txt}>Id: {item.id}</Text>
                  <Text style={ListarStyle.txt}>Nome: {item.nome}</Text>
                  <Text style={ListarStyle.txt}>CPF: {item.cpf}</Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ListarFuncionarios;
