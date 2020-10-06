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
  img: {
    marginTop: 100,
    alignSelf: 'center',
    padding: 90,
    marginRight: 20,
    width: 400,
    height: 100
  },
});

export default WelcomeStyle;
