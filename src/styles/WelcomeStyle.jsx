import { StyleSheet } from "react-native";

const WelcomeStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
  },
  titulo: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 100,
    marginBottom: 30,
  },
  botao: {
    marginTop: 10,
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
    marginBottom: 5,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#feffe8",
  },
  img: {
    marginTop: 100,
    marginBottom: 80,
    alignSelf: "center",
    padding: 90,
    marginRight: 20,
    width: 100,
    height: 100,
  },
  input: {
    borderColor: "#092834",
    borderWidth: 2,
    textAlign: "center",
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  divBotao: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  txtBotao: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  botaoTxt: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default WelcomeStyle;
