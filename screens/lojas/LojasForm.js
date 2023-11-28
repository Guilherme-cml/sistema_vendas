import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import  LojaValidators from '../../validators/lojaValidators.js'

const LojaForm = ({ navigation, route }) => {

    let loja = {
        nome: '',
        cidade: '',
        quantidade: '',
        descricao: '',
        
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        loja = route.params?.loja
    }

    function salvar(dados) {

        AsyncStorage.getItem('loja').then(resultado => {
            const loja = JSON.parse(resultado) || []

            if (id >= 0) {
                loja.splice(id, 1, dados)

            } else {
                loja.push(dados)
            }

            AsyncStorage.setItem('loja', JSON.stringify(loja))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={style.container}>

            <Formik
                initialValues={loja}
                validationSchema={LojaValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <View>

                        <TextInput style={style.input}
                            
                            label='Nome da Loja'
                            value={values.nome}
                            onChangeText={handleChange('nome')}
                        />
                        {(errors.nome && touched.nome) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.nome}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='Cidade'
                            value={values.cidade}
                            onChangeText={handleChange('cidade')}
                        />
                        {(errors.cidade && touched.cidade) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.cidade}
                            </Text>
                        }
                        <TextInput style={style.input}
                            
                            label='Quantidade de Funcionários'
                            keyboardType='numeric'
                            value={values.quantidade}
                            onChangeText={handleChange('quantidade')}
                        />
                        {(errors.quantidade && touched.quantidade) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.quantidade}
                            </Text>
                        }
                        <TextInput style={style.input}
                            
                            label='Descrição da Loja'
                            value={values.descricao}
                            onChangeText={handleChange('descricao')}
                    />
                    {(errors.descricao && touched.descricao) &&
                        <Text style={{ color: 'red', marginTop: 5 }}>
                            {errors.descricao}
                        </Text>
                    }


                        <Button style={style.botao} onPress={handleSubmit}>Salvar</Button>
                    </View>
                )}

            </Formik>
        </ScrollView >

    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        textShadowColor: '#000',
        

    },
    botao: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        
    },
   
})

export default LojaForm