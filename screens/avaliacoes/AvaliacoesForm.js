import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'
import AvaliacaoValidators from '../../validators/AvaliacaoValidators'

const AvaliacoesForm = ({ navigation, route }) => {

    let avaliacoes = {
        nome: '',
        vendedor: '',
        texto: '',
        nota: '',
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        avaliacoes = route.params?.avaliacoes
    }

    function salvar(dados) {

        AsyncStorage.getItem('avaliacoes').then(resultado => {
            const avaliacoes = JSON.parse(resultado) || []

            if (id >= 0) {
                avaliacoes.splice(id, 1, dados)

            } else {
                avaliacoes.push(dados)
            }

            AsyncStorage.setItem('avaliacoes', JSON.stringify(avaliacoes))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={styles.container}>
            <Formik
                initialValues={avaliacoes}
                validationSchema={AvaliacaoValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <View>

                        <TextInput style={styles.input}
                            
                            label='Seu Nome'
                            value={values.nome}
                            onChangeText={handleChange('nome')}
                        />
                        {(errors.nome && touched.nome) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.nome}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            color='blue'
                            label='Funcionário'
                            value={values.vendedor}
                            onChangeText={handleChange('vendedor')}
                        />
                        {(errors.vendedor && touched.vendedor) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.vendedor}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='Tarefa'
                            value={values.texto}
                            onChangeText={handleChange('texto')}
                        />
                        {(errors.texto && touched.texto) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.texto}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='Avalie'
                            value={values.nota}
                            editable={false}
                            onChangeText={handleChange('nota')}
                        />
                        {(errors.nota && touched.nota) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.nota}
                            </Text>
                        }

                        <Picker
                            style={styles.picker}
                            selectedValue={values.nota}
                            onValueChange={handleChange('nota')}>
                            <Picker.Item label="Péssima" value="Péssimo" />
                            <Picker.Item label="Ruim" value="Ruim" />
                            <Picker.Item label="Bom" value="Bom" />
                            <Picker.Item label="Muito Bom" value="Muito Bom" />
                            <Picker.Item label="Excelente" value="Excelente" />

                        </Picker>

                        <Button style={styles.botao} onPress={handleSubmit}>Salvar</Button>
                    </View>
                )}

            </Formik>
        </ScrollView >

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        textShadowColor: '#000',
        

    },
    picker: {
        backgroundColor: 'white',
        borderRadius: 25
    },
    botao: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})


export default AvaliacoesForm