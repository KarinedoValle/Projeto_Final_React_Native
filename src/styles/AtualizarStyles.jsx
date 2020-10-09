import { StyleSheet } from "react-native";

const AtualizarStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
  },
  titulo: {
    paddingTop: 60,
    marginBottom: 60,
    textAlign: "center",
    fontSize: 30,
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
  txt: {
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    borderColor: "#092834",
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
    padding: 5,
    marginBottom: 8,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#feffe8",
  },
  dados: {
    fontSize: 15,
    marginTop: 20,
  },
});

export default AtualizarStyle;
