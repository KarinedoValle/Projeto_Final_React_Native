import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
    flex: 1
  },
  titulo: {
    paddingTop: 60,
    marginBottom: 60,
    textAlign: "center",
    fontSize: 30,
    marginTop: 20,
    color: "#092834",
    fontWeight: "bold",
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
    textAlign: "left",
    marginBottom: 5,
    fontSize: 18,
    color: "#092834",
    fontWeight: "bold",
  },
  explicativo: {
    textAlign: "right",
    marginTop: 50,
    marginBottom: 5,
    fontSize: 18,
    color: "#092834",
    fontWeight: "bold",
  }
});

export default HomeStyle;
