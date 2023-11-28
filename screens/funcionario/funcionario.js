import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet} from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Funcionario = ({ navigation }) => {

    const [funcionario, setFuncionario] = useState([])
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
        AsyncStorage.getItem('funcionario').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setFuncionario(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        funcionario.splice(idExcluir, 1)
        AsyncStorage.setItem('funcionario', JSON.stringify(funcionario))
        carregarDados()
        setVisible(false)

    }

    return (
        <>

            <ScrollView style={styles.container} >


                {funcionario.map((item, i) => (

                    <Card key={i}style={styles.card}>
                        <Card.Content>
                        <Text variant="titleLarge">{item.Nome}</Text>
                            <Text variant="bodyMedium">CPF: {item.CPF} </Text>
                            <Text variant="bodyMedium">Matrícula: {item.matricula} </Text>
                            <Text variant="bodyMedium">Salário: {item.salario} </Text>
                            <Text variant="bodyMedium">email: {item.email} </Text>
                            <Text variant="bodyMedium">Telefone: {item.telefone} </Text>
                            <Text variant="bodyMedium">CEP: {item.CEP} </Text>
                            <Text variant="bodyMedium">logradouro: {item.logradouro} </Text>
                            <Text variant="bodyMedium">Complemento: {item.Complemento} </Text>
                            <Text variant="bodyMedium">Número: {item.numero} </Text>
                            <Text variant="bodyMedium">Bairro: {item.bairro} </Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('funcionario-form', {id: i, funcionario: item})}
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
                            <Text variant="titleMedium">Deseja realmente excluir? </Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button  onPress={excluir}>Sim</Button>
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
                onPress={() => navigation.push('funcionario-form')}

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
        
    }})
export default Funcionario