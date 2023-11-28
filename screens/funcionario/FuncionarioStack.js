import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Funcionario from './funcionario';
import FuncionarioForm from './FuncionarioForm';

const Stack = createNativeStackNavigator();

const FuncionarioStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="funcionario" component={Funcionario} options={{ headerShown: false }} />
                <Stack.Screen name="funcionario-form" component={FuncionarioForm} options={{ title: 'Funcionário' }} />
            </Stack.Navigator>
        </>
    )
}

export default FuncionarioStack