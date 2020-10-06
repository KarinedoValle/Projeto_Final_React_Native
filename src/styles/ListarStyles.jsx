import { StyleSheet } from "react-native";

const ListarStyle = StyleSheet.create({
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
    padding: 5
  },
  fundo: {
    flex: 1,
    backgroundColor: '#fff'
  },
  dados: {
    fontSize: 15,
    marginTop: 20,
    marginBottom:20
  }
});

export default ListarStyle;
