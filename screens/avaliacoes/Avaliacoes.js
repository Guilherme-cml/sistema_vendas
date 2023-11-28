import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View , StyleSheet} from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Avaliacoes = ({ navigation }) => {

    const [avaliacoes, setAvaliacoes] = useState([])
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
        AsyncStorage.getItem('avaliacoes').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setAvaliacoes(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        avaliacoes.splice(idExcluir, 1)
        AsyncStorage.setItem('avaliacoes', JSON.stringify(avaliacoes))
        carregarDados()
        setVisible(false)

    }

    return (
        <>

            <ScrollView style={styles.container} >


                {avaliacoes.map((item, i) => (

                    <Card key={i} style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">Avaliador: {item.nome}</Text>
                            <Text variant="bodyLarge">Funcionário: {item.vendedor}</Text>
                            <Text variant="bodyMedium">Tarefa/Serviço: {item.texto} </Text>
                            <Text variant="bodyMedium">Avaliação: {item.nota}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('avaliacoes-form', {id: i, avaliacoes: item})}
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
                onPress={() => navigation.push('avaliacoes-form')}

            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },
    card: {
        backgroundColor: '#fff',
        margin: 10,
        
    }
})
export default Avaliacoes