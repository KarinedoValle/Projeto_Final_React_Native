import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../telas/Home";
import Buscar from "../telas/Buscar";
import ListarFuncionarios from "../telas/ListarFuncionarios";
import AtualizarFuncionarios from "../telas/AtualizarFuncionarios";
import DeletarFuncionarios from "../telas/DeletarFuncionarios";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Buscar Funcionários" component={Buscar} />
      <Drawer.Screen
        name="Listar Funcionários"
        component={ListarFuncionarios}
      />
      <Drawer.Screen
        name="Atualizar Funcionários"
        component={AtualizarFuncionarios}
      />
      <Drawer.Screen
        name="Deletar Funcionários"
        component={DeletarFuncionarios}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
