import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import HomeStyle from "../styles/HomeStyle";

function Home({ route }) {
  // const { nome } = route.params;
  return (
    <>
      <SafeAreaView style={HomeStyle.fundo}>
        <View style={HomeStyle.body}>
          <Text style={HomeStyle.titulo}>Home</Text>
          <Text style={HomeStyle.txt}>Olá, Nome!</Text>
          <View style={{ flex: 1 }}>
            <ImageBackground
              style={HomeStyle.img}
              source={require("../assets/images/home.png")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Home;
