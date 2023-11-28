import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import VendasValidators from '../../validators/VendasValidators'

const VendasForm = ({ navigation, route }) => {

    let vendas = {
        produto: '',
        valor:'',
        quantidade: '',
        data: '',
        vendedor: '',
       
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        vendas = route.params?.vendas
    }

    function salvar(dados) {

        AsyncStorage.getItem('vendas').then(resultado => {
            const vendas = JSON.parse(resultado) || []

            if (id >= 0) {
                vendas.splice(id, 1, dados)

            } else {
                vendas.push(dados)
            }

            AsyncStorage.setItem('vendas', JSON.stringify(vendas))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={styles.container}>

            <Formik
                initialValues={vendas}
                validationSchema={VendasValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue}) => (
                    <View>

                        <TextInput style={styles.input}
                        
                            label='Produtos'
                            value={values.produto}
                            onChangeText={handleChange('produto')}
                        />
                        {(errors.produto && touched.produto) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.produto}
                            </Text>
                        }
                        <TextInput style={styles.input}
                        keyboardType='numeric'
                        label='Valor'
                        value={values.valor}
                        onChangeText={handleChange('valor')}
                    />
                    {(errors.valor && touched.valor) &&
                        <Text style={{ color: 'red', marginTop: 5 }}>
                            {errors.valor}
                        </Text>}

                          <TextInput style={styles.input}
                            keyboardType='decimal-pad'
                          label='Quantidade'
                          value={values.quantidade}
                          onChangeText={handleChange('quantidade')}
                      />
                      {(errors.quantidade && touched.quantidade) &&
                          <Text style={{ color: 'red', marginTop: 5 }}>
                              {errors.quantidade}
                          </Text>}

                          <TextInput style={styles.input}
                        keyboardType='numeric'
                          label='Data da Venda'
                          value={values.data}
                          onChangeText={(value) => { setFieldValue('data', mask(value, '99/99/9999')) }}
                        
                      />
                      {(errors.data && touched.data) &&
                          <Text style={{ color: 'red', marginTop: 5 }}>
                              {errors.data}
                          </Text>}

                          <TextInput style={styles.input}
                        
                          label='Vendedor'
                          value={values.vendedor}
                          onChangeText={handleChange('vendedor')}
                      />
                      {(errors.vendedor && touched.vendedor) &&
                          <Text style={{ color: 'red', marginTop: 5 }}>
                              {errors.vendedor}
                          </Text>}


                        
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
    
    botao: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,}
        
    
   
})
export default VendasForm