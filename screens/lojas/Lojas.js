import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Loja = ({ navigation }) => {

    const [loja, setLoja] = useState([])
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
        AsyncStorage.getItem('loja').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setLoja(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        loja.splice(idExcluir, 1)
        AsyncStorage.setItem('loja', JSON.stringify(loja))
        carregarDados()
        setVisible(false)

    }

    return (
        <>

            <ScrollView style={style.container} >


                {loja.map((item, i) => (

                    <Card key={i}  style={style.card}>
                        <Card.Content>
                            <Text variant="titleLarge">Nome da Loja: {item.nome}</Text>
                            <Text variant="bodyLarge">Quantidade de Funcionários:{item.quantidade}</Text>
                            <Text variant="bodyMedium">Cidade: {item.cidade}</Text>
                            <Text variant="bodyMedium">Descrição: {item.descricao}</Text>

                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('loja-form', {id: i, loja: item})}
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
                onPress={() => navigation.push('loja-form')}

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
        backgroundColor: 'white',
        margin: 10,
        
    }})
export default Loja