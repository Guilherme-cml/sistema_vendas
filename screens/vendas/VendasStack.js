import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Vendas from './Vendas';
import VendasForm from './VendasForm';

const Stack = createNativeStackNavigator();
const VendasStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="vendas" component={Vendas} options={{ headerShown: false }} />
                <Stack.Screen name="vendas-form" component={VendasForm} options={{ title: 'Vendas' }} />
            </Stack.Navigator>
        </>
    )
}

export default VendasStack