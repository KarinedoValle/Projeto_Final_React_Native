import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../telas/Home";
import Buscar from "../telas/Buscar";
import ListarFuncionarios from "../telas/ListarFuncionarios";
import AtualizarFuncionarios from "../telas/AtualizarFuncionarios";
import DeletarFuncionarios from "../telas/DeletarFuncionarios";
import PostarFuncionarios from "../telas/PostarFuncionario";

const Drawer = createDrawerNavigator();

function DrawerNavigation({route}) {
  const {nome} = route.params;
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerPosition='right'
    options={{ headerShown: false}}
    drawerContentOptions={{
      backgroundColor: 'rgba(254, 255, 232,1)',
      activeBackgroundColor: 'rgba(255, 193, 99,1)',
      activeTintColor: 'rgba(255, 255, 255,1)'
    }}
    >
      <Drawer.Screen
        name="Home"
        component={(props) => <Home {...props} nome={nome}/>}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Buscar Funcionários" component={Buscar} />
      <Drawer.Screen
        name="Listar Funcionários"
        component={ListarFuncionarios}
      />
      <Drawer.Screen
        name="Inserir Funcionários"
        component={PostarFuncionarios}
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
