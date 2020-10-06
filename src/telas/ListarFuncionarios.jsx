import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView, View, ScrollView } from "react-native";
import Api from "../api/Api";
import Funcionarios from "../Models/FuncionarioModel";
import ListarStyle from "../styles/ListarStyles";

function ListarFuncionarios() {
  const [DATA, setDATA] = useState([]);
  // const [listaFuncionarios, setListaFuncionarios] = useState([]);

  useEffect(() => {
    Funcionarios.createTable();
    Api.get(`/funcionario`)
      .then((response) => {
<<<<<<< HEAD
        salvarListagem(response.data);
=======
        setDATA(response.data);
        // salvar();
        // for (var i = 0; i < response.data.length; i++) {
        //   Funcionarios.create(response.data[i]);
        //   console.log(response.data[i]);
        // }
>>>>>>> 82663c99c00ee7c4f87ad073c9061c0f558801fa
      })
      .catch((error) => console.log(error));
  });

  const salvarListagem = async (lista) =>{
    Funcionarios.destroyAll()
    for(let i = 0; i < lista.length; i++){
      const func = lista[i]
      const props ={
        id: func.id,
        nome: func.nome,
        cpf: func.cpf
      }
      Funcionarios.create(props)
    }
    const options = {
      columns: 'id, nome, cpf',
      order: 'id ASC'
    }
    setDATA(await Funcionarios.query(options))
  }

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
