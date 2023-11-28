import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, IconButton } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LojasStack from '../screens/lojas/LojasStack';
import FuncionarioStack from '../screens/funcionario/FuncionarioStack';
import ClienteStack from '../screens/clientes/ClienteStack';
import AvaliacoesStack from '../screens/avaliacoes/AvaliacoesStack';
import VendasStack from '../screens/vendas/VendasStack';

 
const Tab = createMaterialBottomTabNavigator();
export default function Routes() {
    return (
        <PaperProvider>
        
          <Tab.Navigator>
            <Tab.Screen
              name="Avaliações"
              component={AvaliacoesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="border-color" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Lojas"
              component={LojasStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="basket" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Funcionário"
              component={FuncionarioStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="badge-account" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Cliente"
              component={ClienteStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Vendas"
              component={VendasStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="purse" size={26} />
                ),
              }}
            />

          </Tab.Navigator>
      </PaperProvider>
    )
}
