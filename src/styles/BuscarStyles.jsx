import { StyleSheet } from "react-native";

const BuscarStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
  },
  titulo: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 80,
    marginBottom: 60,
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
    padding: 5,
    marginVertical: 3,
    borderColor: "gray",
    borderBottomWidth: 1,
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

  txt1: {
    fontWeight: "bold",
  },
});

export default BuscarStyle;
