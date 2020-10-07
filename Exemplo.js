import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Api from "./api/api";
import Animal from "./models/AnimalModel";
import LottieView from "lottie-react-native";
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const animation = useRef(null);
  const adicionaAnimal = () => {
    Animal.createTable();
    const func = async () => {
      try {
        const response = await Api.get(`/funcionario`);
        console.log(response.data[0]);
        const props = {
          id: response.data[0].id,
          name: response.data[0].nome,
          cpf: response.data[0].cpf,
        };
        console.log(props);
        Animal.create(props);
      } catch (err) {
        console.log(err);
      }
    };
    func();
  };
  useEffect(() => {
    if (!animation.current) {
      console.log("oi");
      return;
    }
    animation.current.play();
  }, [animation]);
  
  const buscaAnimal = async () => {
    const animal = await Animal.find(5);
    console.log(animal);
  };
  const deletaAnimal = () => {
    Animal.dropTable();
  };
  const alteraAnimal = () => {
    const props = {
      id: 5,
      color: "Black",
      name: "Bob",
      age: 5,
    };
    Animal.update(props);
  };
  const queryAnimal = async () => {
    const options = {
      columns: "name",
    };
    const query = await Animal.query(options);
    console.log(query);
  };
  if (!isReady) {
    return (
      <LottieView
        ref={animation}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee",
        }}
        loop={false}
        speed={2}
        source={require("./assets/animation/splashscreen.json")}
        onAnimationFinish={() => setIsReady(true)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Button title="Adiciona" onPress={adicionaAnimal} />
      <Button title="Busca" onPress={buscaAnimal} />
      <Button title="Delete" onPress={deletaAnimal} />
      <Button title="Altera" onPress={alteraAnimal} />
      <Button title="Query" onPress={queryAnimal} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});