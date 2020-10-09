import { StyleSheet } from "react-native";

const ListarStyle = StyleSheet.create({
  body: {
    marginHorizontal: 30,
    flex: 1,
  },
  titulo: {
    paddingTop: 60,
    marginBottom: 40,
    textAlign: "center",
    fontSize: 30,
    marginTop: 5,
    color: "#092834",
    fontWeight: "bold",
  },
  txt: {
    textAlign: "justify",
    marginVertical: 3,
    fontSize: 15,
    padding: 5,
    color: "#fff",
    borderColor: "gray",
    borderBottomWidth: 1,
  },
  fundo: {
    flex: 1,
    backgroundColor: "#feffe8",
  },
  dados: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20,
    padding: 25,
    borderWidth: 1,
    backgroundColor: "#092834",
    borderRadius: 10,
    marginRight: 8,
  },
});

export default ListarStyle;
