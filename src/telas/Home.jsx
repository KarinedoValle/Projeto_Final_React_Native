import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import HomeStyle from "../styles/HomeStyle";

function Home() {
  return (
    <>
    <SafeAreaView style={HomeStyle.fundo}>
      <View style={HomeStyle.body}>
        <Text style={HomeStyle.titulo}>Tela Home</Text>
        <View style={{ flex: 1 }}>
          <Image
            style={HomeStyle.img}
            source={require('../assets/images/home.png')}
          />
        </View>
      </View>
      </SafeAreaView>
    </>
  );
}

export default Home;
