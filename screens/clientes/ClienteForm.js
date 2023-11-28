import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View , StyleSheet} from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import clienteValidators from '../../validators/ClienteValidators.js'

const ClienteForm = ({ navigation, route }) => {

    let cliente = {
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        numero: '',
        bairro: '',
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        cliente = route.params?.cliente
    }

    function salvar(dados) {

        AsyncStorage.getItem('cliente').then(resultado => {
            const cliente = JSON.parse(resultado) || []

            if (id >= 0) {
                cliente.splice(id, 1, dados)

            } else {
                cliente.push(dados)
            }

            AsyncStorage.setItem('cliente', JSON.stringify(cliente))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={style.container}>
            

            <Formik
                initialValues={cliente}
                validationSchema={clienteValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

                        <TextInput style={style.input}
                            
                            label='Nome'
                            value={values.nome}
                            onChangeText={handleChange('nome')}
                        />
                        {(errors.nome && touched.nome) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.nome}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='CPF'
                            keyboardType='decimal-pad'
                            value={values.cpf}
                            onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99')) }}
                        />
                        {(errors.cpf && touched.cpf) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.cpf}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='E-mail'
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                        {(errors.email && touched.email) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.email}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='Telefone'
                            keyboardType='decimal-pad'
                            value={values.telefone}
                            onChangeText={(value) => { setFieldValue('telefone', mask(value, '(99)999999999')) }}
                        />
                        {(errors.telefone && touched.telefone) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.telefone}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='CEP'
                            keyboardType='decimal-pad'
                            value={values.cep}
                            onChangeText={handleChange('cep')}
                        />
                        {(errors.cep && touched.cep) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.cep}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='Endereço'
                            value={values.endereco}
                            onChangeText={handleChange('endereco')}
                        />
                        {(errors.endereco && touched.endereco) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.logradouro}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='Número'
                            keyboardType='decimal-pad'
                            value={values.numero}
                            onChangeText={handleChange('numero')}
                        />
                        {(errors.numero && touched.numero) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.numero}
                            </Text>
                        }

                        <TextInput style={style.input}
                            
                            label='Bairro'
                            value={values.bairro}
                            onChangeText={handleChange('bairro')}
                        />
                        {(errors.bairro && touched.bairro) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.bairro}
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
        margin: 10,
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

export default ClienteForm