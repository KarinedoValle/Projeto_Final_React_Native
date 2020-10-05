import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Api from "../api/Api";

function AtualizarFuncionarios() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [funcionarioSalvo, setFuncionarioSalvo] = useState({});

  const salvar = () => {
    if (nome === null) {
      setNome(funcionarioSalvo.nome);
    }

    if (cpf === null) {
      setCpf(funcionarioSalvo.cpf);
    }
    Api.put(`/funcionario/${id}`, { nome: nome, cpf: cpf })
      .then((response) => {
        console.log("Esse foi enviado: ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id !== "") {
      Api.get(`/funcionario/${id}`)
        .then((response) => {
          setFuncionarioSalvo(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <>
      <Text>Tela AtualizarFuncionarios</Text>
      <TextInput
        style={{ borderColor: "black", borderWidth: 2, marginHorizontal: 10 }}
        onChangeText={(text) => {
          setId(text);
        }}
        placeholder="Id"
      ></TextInput>
      <TextInput
        style={{ borderColor: "black", borderWidth: 2, marginHorizontal: 10 }}
        onChangeText={(text) => {
          setNome(text);
        }}
        placeholder="Nome"
      ></TextInput>
      <TextInput
        style={{ borderColor: "black", borderWidth: 2, marginHorizontal: 10 }}
        onChangeText={(text) => {
          setCpf(text);
        }}
        placeholder="CPF"
      ></TextInput>
      <TouchableOpacity
        style={{ borderColor: "black", borderWidth: 2, marginHorizontal: 10 }}
        onPress={salvar}
      >
        <Text>Enviar</Text>
      </TouchableOpacity>
    </>
  );
}

export default AtualizarFuncionarios;
