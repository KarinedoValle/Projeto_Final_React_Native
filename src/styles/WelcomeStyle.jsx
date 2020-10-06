import { StyleSheet } from "react-native";

const WelcomeStyle = StyleSheet.create({
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
  },
  fundo: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default WelcomeStyle;
