import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SoBotao = ({ botaostyle, textstyle, text, onPress }) => {
  return (
    <TouchableOpacity style={botaostyle} onPress={onPress}>
      <Text style={textstyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SoBotao;
