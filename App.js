import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from './screens/Home/Home';
import ListaProdutos from './screens/ListaProdutos/ListaProdutos';
import CadastroProduto from './screens/CadastroProduto/CadastroProduto';
import DetalhesProduto from './screens/DetalhesProduto/DetalhesProduto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={ListaProdutos} />
        <Stack.Screen name="Detalhes" component={DetalhesProduto} />
        <Stack.Screen name="Cadastrar" component={CadastroProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}