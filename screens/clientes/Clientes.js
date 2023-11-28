import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View, StyleSheet} from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Cliente = ({ navigation }) => {

    const [cliente, setCliente] = useState([])
    const [idExcluir, setIdExcluir] = useState(0)


    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    useFocusEffect(
        React.useCallback(() => {
            carregarDados()

        }, [])
    );

    function carregarDados() {
        AsyncStorage.getItem('cliente').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setCliente(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        cliente.splice(idExcluir, 1)
        AsyncStorage.setItem('cliente', JSON.stringify(cliente))
        carregarDados()
        setVisible(false)
    }
    return (
        <>

            <ScrollView style={style.container} >


                {cliente.map((item, i) => (

                    <Card key={i} style={style.card}>
                        <Card.Content>
                            <Text variant="titleLarge">Nome: {item.nome}</Text>
                            <Text variant="bodyMedium">CPF: {item.cpf} </Text>
                            <Text variant="bodyMedium">email: {item.email} </Text>
                            <Text variant="bodyMedium">Telefone: {item.telefone} </Text>
                            <Text variant="bodyMedium">CEP: {item.cep} </Text>
                            <Text variant="bodyMedium">logradouro: {item.endereco} </Text>
                            <Text variant="bodyMedium">Número: {item.numero} </Text>
                            <Text variant="bodyMedium">Bairro: {item.bairro} </Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('cliente-form', { id: i, cliente: item })}
                            />
                            <IconButton
                                icon='trash-can-outline'
                                onPress={() => confirmarExclusao(i)}
                            />
                        </Card.Actions>
                    </Card>
                ))}

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Deseja realmente excluir? </Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={excluir}>Sim</Button>
                            <Button onPress={hideDialog}>Não</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </ScrollView>

            <FAB
                icon="plus"
                size="medium"
                color="black"
                style={{ position: 'absolute', right: 10, bottom: 8, }}
                onPress={() => navigation.push('cliente-form')}

            />
        </>
    )
}
    const style = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 60,
        },
        card: {
            backgroundColor: '#fff',
            margin: 10,
            
        }
})
export default Cliente