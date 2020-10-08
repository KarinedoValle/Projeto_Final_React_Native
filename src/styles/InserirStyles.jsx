import { StyleSheet } from "react-native";

const InserirStyle = StyleSheet.create({
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
    backgroundColor: "#092834",
    borderRadius: 10,
  },
  txt: {
    textAlign: "justify",
    marginVertical: 3,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#feffe8",
  },
  dados: {
    fontSize: 15,
    marginTop: 20,
  },
  botaoTxt: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default InserirStyle;
