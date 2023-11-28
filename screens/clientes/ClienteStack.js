import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import cliente from './Clientes';
import clienteForm from './ClienteForm';

const Stack = createNativeStackNavigator();
const ClienteStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="cliente" component={cliente} options={{ headerShown: false }} />
                <Stack.Screen name="cliente-form" component={clienteForm} options={{ title: 'Cliente' }} />
            </Stack.Navigator>
        </>
    )
}

export default ClienteStack


