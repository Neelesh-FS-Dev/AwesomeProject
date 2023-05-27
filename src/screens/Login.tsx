import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({navigation}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert('Warning!', 'Please write your name');
    } else {
      try {
        var user = {
          Name: name,
          Age: age,
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Home');
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  return (
    <View style={styles.body}>
      <Text style={{fontSize: 30, color: '#ffffff'}}>Async Storage</Text>
      <Image
        source={require('../../assets/fonts/Logo/logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your name.."
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Age.."
        onChangeText={value => setAge(value)}
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
    marginBottom: 10,
  },
  logo: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
