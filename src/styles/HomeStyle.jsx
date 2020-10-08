import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
  },
  titulo: {
    paddingTop: 60,
    marginBottom: 60,
    textAlign: "center",
    fontSize: 23,
    marginTop: 20,
  },
  img: {
    marginTop: 30,
    alignSelf: "center",
    width: 400,
    height: 400,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#feffe8",
  },
  txt: {
    textAlign: "right",
    marginBottom: 5,
    fontSize: 18,
  },
});

export default HomeStyle;
