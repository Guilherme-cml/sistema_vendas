import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import avaliacoes from './Avaliacoes';
import avaliacoesForm from './AvaliacoesForm';

const Stack = createNativeStackNavigator();

const AvaliacoesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="avaliacoes" component={avaliacoes} options={{ headerShown: false }} />
                <Stack.Screen name="avaliacoes-form" component={avaliacoesForm} options={{ title: 'Avaliações' }} />
            </Stack.Navigator>
        </>
    )
}

export default AvaliacoesStack