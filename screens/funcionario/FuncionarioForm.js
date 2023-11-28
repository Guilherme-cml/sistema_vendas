import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import funcionarioValidators from '../../validators/FuncionarioValidators'

const FuncionarioForm = ({ navigation, route }) => {

    let funcionario = {
        Nome: '',
        CPF: '',
        matricula: '',
        salario: '',
        telefone: '',
        CEP: '',
        logradouro: '',
        email: '',
        Complemento: '',
        numero: '',
        bairro: ''
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        funcionario = route.params?.funcionario
    }

    function salvar(dados) {

        AsyncStorage.getItem('funcionario').then(resultado => {
            const funcionario = JSON.parse(resultado) || []

            if (id >= 0) {
                funcionario.splice(id, 1, dados)

            } else {
                funcionario.push(dados)
            }

            AsyncStorage.setItem('funcionario', JSON.stringify(funcionario))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={styles.container}>

            <Formik
                initialValues={funcionario}
                validationSchema={funcionarioValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

                        <TextInput style={styles.input}
                            
                            label='Nome'
                            value={values.Nome}
                            onChangeText={handleChange('Nome')}
                        />
                        {(errors.Nome && touched.Nome) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.Nome}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='CPF'
                            keyboardType='decimal-pad'
                            value={values.CPF}
                            onChangeText={(value) => { setFieldValue('CPF', mask(value, '999.999.999-99')) }}
                        />
                        {(errors.CPF && touched.CPF) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.CPF}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='Matrícula'
                            keyboardType='decimal-pad'
                            value={values.matricula}
                            onChangeText={handleChange('matricula')}
                        />
                        {(errors.matricula && touched.matricula) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.matricula}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='Salário'
                            keyboardType='decimal-pad'
                            value={values.salario}
                            onChangeText={handleChange('salario')}
                        />
                        {(errors.salario && touched.salario) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.salario}
                            </Text>
                        }
                        <TextInput style={styles.input}
                            
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

                        <TextInput style={styles.input}
                            
                            label='CEP'
                            keyboardType='decimal-pad'
                            value={values.CEP}
                            onChangeText={handleChange('CEP')}
                        />
                        {(errors.CEP && touched.CEP) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.CEP}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='Logradouro'
                            value={values.logradouro}
                            onChangeText={handleChange('logradouro')}
                        />
                        {(errors.logradouro && touched.logradouro) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.logradouro}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='E-mail'
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                        {(errors.email && touched.email) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.email}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
                            label='Complemento'
                            value={values.Complemento}
                            onChangeText={handleChange('Complemento')}
                        />
                        {(errors.Complemento && touched.Complemento) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.Complemento}
                            </Text>
                        }

                        <TextInput style={styles.input}
                            
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

                        <TextInput style={styles.input}
                            
                            label='Bairro'
                            value={values.bairro}
                            onChangeText={handleChange('bairro')}
                        />
                        {(errors.bairro && touched.bairro) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.bairro}
                            </Text>
                        }

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
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        textShadowColor: '#000',
        

    },
    botao: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        
    },

})

export default FuncionarioForm