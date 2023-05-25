import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>ScreenB</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}> go to screen A</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
