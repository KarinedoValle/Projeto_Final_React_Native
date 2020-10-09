import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
    flex: 1,
  },
  titulo: {
    paddingTop: 60,
    marginBottom: 45,
    textAlign: "center",
    fontSize: 30,

    color: "#092834",
    fontWeight: "bold",
  },
  img: {
    marginTop: 30,
    alignSelf: "center",
    width: 350,
    height: 350,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#feffe8",
  },
  txt: {
    textAlign: "left",
    marginBottom: 5,
    fontSize: 18,
    color: "#092834",
    fontWeight: "bold",
  },
  explicativo: {
    textAlign: "right",
    marginTop: 25,
    marginBottom: 5,
    fontSize: 18,
    color: "#092834",
    fontWeight: "bold",
  },
  botaoSair: {
    textAlign: "left",
    marginBottom: 5,
    fontSize: 16,
    color: "#092834",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default HomeStyle;
