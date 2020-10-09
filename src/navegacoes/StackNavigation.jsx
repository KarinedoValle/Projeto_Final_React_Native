import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../telas/Welcome";
import DrawerNavigation from "./DrawerNavigation";
import CadastrarFuncionarios from "../telas/CadastrarFuncionarios";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Hero Company"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Cadastre-se" component={CadastrarFuncionarios} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
