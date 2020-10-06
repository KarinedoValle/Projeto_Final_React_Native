import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView, View, ScrollView } from "react-native";
import Api from "../api/Api";
import ListarStyle from "../styles/ListarStyles";

function ListarFuncionarios() {
  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    Api.get(`/funcionario`)
      .then((response) => {
        setDATA(response.data);
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
            data={DATA}
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
