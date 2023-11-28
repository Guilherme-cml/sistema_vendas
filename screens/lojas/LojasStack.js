import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import loja from './Lojas';
import LojasForm from './LojasForm';
const Stack = createNativeStackNavigator();

const LojasStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="loja" component={loja} options={{ headerShown: false }} />
                <Stack.Screen name="loja-form" component={LojasForm} options={{ title: 'Lojas' }} />
            </Stack.Navigator>
        </>
    )
}

export default LojasStack