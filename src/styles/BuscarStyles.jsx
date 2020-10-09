import { StyleSheet } from "react-native";

const BuscarStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
  },
  titulo: {
    paddingTop: 60,
    marginBottom: 60,
    textAlign: "center",
    fontSize: 30,
    marginTop: 5,
    color: "#092834",
    fontWeight: "bold",
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
  botaoTxt: {
    fontWeight: "bold",
    color: "#fff",
  },
  txt: {
    textAlign: "justify",
    padding: 5,
    marginVertical: 3,
    borderColor: "gray",
    borderBottomWidth: 1,
    fontSize: 15,
    color: "#fff",
  },
  input: {
    borderColor: "#092834",
    borderWidth: 2,
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
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    backgroundColor: "#092834",
    borderRadius: 10,
  },

  txt1: {
    fontWeight: "bold",
    textAlign: "justify",
    marginVertical: 3,
    fontSize: 15,
    color: "#fff",
  },
});

export default BuscarStyle;
