import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, {  useState } from 'react'
import { ScrollView, StyleSheet} from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Vendas = ({ navigation }) => {

    const [vendas, setVendas] = useState([])
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
        AsyncStorage.getItem('vendas').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setVendas(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        vendas.splice(idExcluir, 1)
        AsyncStorage.setItem('vendas', JSON.stringify(vendas))
        carregarDados()
        setVisible(false)

    }

    return (
        <>

            <ScrollView style={styles.container} >


                {vendas.map((item, i) => (

                    <Card key={i} style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">Produtos: {item.produto}</Text>
                            <Text variant="titleMedium">Quantidade: {item.quantidade}</Text>
                            <Text variant="titleMedium">Valor: {item.valor}</Text>
                            <Text variant="bodyMedium">Data da Venda: {item.data}</Text>
                            <Text variant="bodyMedium">Vendedor {item.vendedor}</Text>

                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('vendas-form', {id: i, vendas: item})}
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
                onPress={() => navigation.push('vendas-form')}

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
export default Vendas

