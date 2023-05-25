import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleSubmit = () => {
    setSubmittedValues([...submittedValues, inputValue]);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        placeholder="Enter Your Todo"
      />
      <Button title="Submit" onPress={handleSubmit} />
      <View style={styles.submittedContainer}>
        {submittedValues.map((value, index) => (
          <Text key={index} style={styles.submittedText}>
            {value}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 18,
  },
  submittedContainer: {
    marginTop: 16,
  },
  submittedText: {
    fontSize: 18,
  },
});

export default TodoApp;
