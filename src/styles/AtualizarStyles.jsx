import { StyleSheet } from "react-native";

const AtualizarStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
  },
  titulo: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 20,
    marginBottom: 30,
  },
  botao: {
    marginTop: 30,
    alignItems: "center",
    textAlignVertical: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  txt: {
    textAlign: "justify",
    marginVertical: 3
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    padding: 5,
    marginBottom:8
  },
  fundo: {
    flex: 1,
    backgroundColor: '#D4EAFA'
  },
  dados: {
    fontSize: 15,
    marginTop: 20,
  }
});

export default AtualizarStyle;
