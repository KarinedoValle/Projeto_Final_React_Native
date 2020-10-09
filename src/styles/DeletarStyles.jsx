import { StyleSheet } from "react-native";

const DeletarStyle = StyleSheet.create({
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
    borderColor: "#f70000",
    borderWidth: 1,
    backgroundColor: "#f70000",
    borderRadius: 10,
  },
  botaoTxt: {
    fontWeight: "bold",
    color: "#fff",
  },
  txt: {
    textAlign: "justify",
    marginVertical: 3,
    fontSize: 15,
    color: "#fff",
    borderColor: "gray",
    borderBottomWidth: 1,
    padding: 5,
  },
  input: {
    borderColor: "#092834",
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
    padding: 5,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#feffe8",
  },
  dados: {
    fontSize: 15,
    marginTop: 30,
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    backgroundColor: "#092834",
    borderRadius: 10,
  },
  txtmsg: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 15,
    color: "#f70000",
  },
  botaoBuscar: {
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center",
    textAlignVertical: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#092834",
    borderRadius: 10,
  },
});

export default DeletarStyle;
