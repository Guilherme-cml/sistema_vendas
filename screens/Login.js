import React, {useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';


export default function Login() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  



  const handleLogin = () => {
    setModalVisible(false);
    navigation.navigate('MainTabs', { screen: 'cliente' });
  };

  return (

        <View style={styles.container}>
          <Card>
            <Card.Content style={styles.card}>
           <Text style={styles.Text}> Sistema de Vendas </Text> 
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="#000000"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          </Card.Content>
          </Card>
        </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  Text: {
    fontSize: 35,
    padding: 10,
    borderRadius: 10,
  },
  
  image: {
    width: '90%',
    height: '100%',
    
  },
  input: {
    height: 46,
    
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    opacity: 1.0,
    textAlign: 'center',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    
    alignContent: 'center',
    padding: 15,
    borderRadius: 20,
    
  },
  buttonText: {
    color: 'black',
    opacity: 1.0,
    fontSize: 18,
    textAlign: 'center',
  },
 card: {
  backgroundColor:'#DA94FD',
borderRadius: 10,
 }
});