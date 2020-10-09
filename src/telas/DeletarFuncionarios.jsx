import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Api from "../api/Api";
import DeletarStyle from "../styles/DeletarStyles";
import SoBotao from "../components/SoBotao";

function DeletarFuncionarios() {
  const [id, setId] = useState("");
  const [dados, setDados] = useState({});

  const deletar = () => {
    if (id !== "") {
      Api.delete(`/funcionario/${id}`)
        .then((response) => {
          Alert.alert("Sucesso", "Funcionário deletado!");
          setId();
          setNome();
          setCpf();
          setDados({});
          console.log("vai filho");
        })
        .catch((error) => {
          Alert.alert("Erro", "Não foi possível deletar o funcionário");
          console.log("vou");
        });
    } else {
      Alert.alert("Por favor, digite um Id.");
    }
  };

  const buscar = () => {
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          setDados(response.data);
        })
        .catch((error) => console.log("Deu erro"));
    }
  };

  return (
    <>
      <SafeAreaView style={DeletarStyle.fundo}>
        <View style={DeletarStyle.body}>
          <Text style={DeletarStyle.titulo}>Deletar</Text>
          <TextInput
            style={DeletarStyle.input}
            onChangeText={(text) => {
              setId(text);
            }}
            placeholder="Insira um Id"
            value={id}
          ></TextInput>
          <View style={DeletarStyle.dados}>
            <Text style={DeletarStyle.txt}>Nome: {dados.nome}</Text>
            <Text style={DeletarStyle.txt}>CPF: {dados.cpf}</Text>
          </View>
          <View>
            <SoBotao
              textstyle={DeletarStyle.botaoTxt}
              text="Buscar"
              onPress={buscar}
              botaostyle={DeletarStyle.botaoBuscar}
            />
          </View>
          <Text style={DeletarStyle.txtmsg}>
            Tem certeza que deseja deletar este funcionário?
          </Text>
          <SoBotao
            textstyle={DeletarStyle.botaoTxt}
            text="Confirmar"
            onPress={deletar}
            botaostyle={DeletarStyle.botao}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default DeletarFuncionarios;
