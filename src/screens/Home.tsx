import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [name, setName] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          setName(value);
        }
      });
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('warning!', 'Please enter your data');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Successful!', 'Your data has been updated');
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('UserName');
      navigation.navigate('Login');
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter you data"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Button title="Update" color="#1eb900" onPress={updateData} />
      <Button title="Remove" color="#1eb900" onPress={removeData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
