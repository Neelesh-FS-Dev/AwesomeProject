import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({navigation}) {
  const [name, setName] = useState('');
  const setData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your name');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.navigate('Home');
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
  };
  return (
    <View style={styles.body}>
      <Text style={{fontSize: 30, color: '#ffffff'}}>Async Storage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your name.."
        onChangeText={value => setName(value)}
      />
      <Button title="Add" color="#1eb900" onPress={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
