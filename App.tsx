// // import {View, Text} from 'react-native';
// // import React from 'react';
// // import Camera from './src/components/Camera';
// // import Modalcomponent from './src/components/Modalcomponent';

// // const App = () => {
// //   return (
// //     <View>
// //       {/* <Camera /> */}
// //       <Modalcomponent />
// //     </View>
// //   );
// // };

// // export default App;
// import {
//   View,
//   Text,
//   Modal,
//   ActivityIndicator,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React, {useState} from 'react';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <TouchableOpacity
//       style={{flex: 1, backgroundColor: 'gray'}}
//       onPress={() => {
//         setVisible(true);
//       }}>
//       <Modal visible={visible} transparent animationType="slide">
//         {/* parent view */}
//         <TouchableOpacity
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//           onPress={() => {
//             setVisible(false);
//           }}>
//           {/* childView */}
//           <View
//             style={{
//               width: '90%',
//               height: '30%',
//               backgroundColor: '#fff',
//               borderRadius: 10,
//             }}>
//             <Image
//               source={require('./assets/fonts/Logo/dustbin.png')}
//               style={{
//                 width: 50,
//                 height: 50,
//                 tintColor: 'red',
//                 alignSelf: 'center',
//                 marginTop: 30,
//               }}
//             />
//             <Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: '600',
//                 alignSelf: 'center',
//                 textAlign: 'center',
//                 width: '90%',
//                 marginTop: 30,
//               }}>
//               Do you want to delete?
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-evenly',
//                 gap: 10,
//                 marginHorizontal: 10,
//                 marginTop: 10,
//               }}>
//               <TouchableOpacity
//                 style={{
//                   borderRadius: 15,
//                   flex: 1,
//                   paddingVertical: 15,
//                   backgroundColor: 'gray',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   setVisible(false);
//                 }}>
//                 <Text style={{color: '#fff'}}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   borderRadius: 15,
//                   backgroundColor: 'green',
//                   flex: 1,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   setVisible(false);
//                 }}>
//                 <Text style={{color: '#fff'}}>Yes Continue</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//     </TouchableOpacity>
//   );
// };

// export default App;

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './src/screens/Login';
// import Home from './src/screens/Home';

// import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-gesture-handler';

// const Stack = createNativeStackNavigator();

// export default function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import {View, Text} from 'react-native';
// import React from 'react';
// import CounterScreen from './src/screens/counterScreen';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <CounterScreen />
//     </Provider>
//   );
// };

// export default App;

// import {View, Text, TextInput, Button} from 'react-native';
// import React, {useState} from 'react';
// import {getWeatherByCity} from './src/screens/getWeatherByCity';
// import moment from 'moment';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);
//   const fetchWeather = async () => {
//     try {
//       const data = await getWeatherByCity(city);
//       setWeatherData(data);
//       setError(null);
//     } catch (error) {
//       setWeatherData(null);
//       setError('failed to fetch weather data');
//     }
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 25, marginBottom: 20}}>Weather App</Text>
//       <TextInput
//         style={{
//           height: 40,
//           width: 200,
//           borderWidth: 1,
//           marginBottom: 10,
//           padding: 5,
//         }}
//         placeholder="Enter City Name"
//         value={city}
//         onChangeText={setCity}
//       />
//       <Button title="Get Weather " onPress={fetchWeather} />
//       {weatherData && (
//         <View style={{marginTop: 20}}>
//           <Text style={{fontSize: 18}}>City:{weatherData.name}</Text>
//           <Text>Temperature:{weatherData.main.temp}</Text>
//           <Text>Description:{weatherData.weather[o].description}</Text>
//           <Text>Date:{moment.unix(weatherData.dt).format('DD/MM/YYYY')}</Text>
//         </View>
//       )}
//       {error && <Text style={{color: 'red', marginTop: 20}}>{error}</Text>}
//     </View>
//   );
// };

// export default App;

// import React, {useCallback, useRef, useMemo} from 'react';
// import {StyleSheet, View, Text, Button} from 'react-native';
// import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

// const App = () => {
//   // hooks
//   const sheetRef = useRef<BottomSheet>(null);

//   // variables
//   const data = useMemo(
//     () =>
//       Array(50)
//         .fill(0)
//         .map((_, index) => `index-${index}`),
//     [],
//   );
//   const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

//   // callbacks
//   const handleSheetChange = useCallback(index => {
//     console.log('handleSheetChange', index);
//   }, []);
//   const handleSnapPress = useCallback(index => {
//     sheetRef.current?.snapToIndex(index);
//   }, []);
//   const handleClosePress = useCallback(() => {
//     sheetRef.current?.close();
//   }, []);

//   // render
//   const renderItem = useCallback(
//     ({item}) => (
//       <View style={styles.itemContainer}>
//         <Text>{item}</Text>
//       </View>
//     ),
//     [],
//   );
//   return (
//     <GestureHandlerRootView>
//       <View style={styles.container}>
//         <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
//         <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
//         <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
//         <Button title="Close" onPress={() => handleClosePress()} />
//         <BottomSheet
//           ref={sheetRef}
//           snapPoints={snapPoints}
//           onChange={handleSheetChange}>
//           <BottomSheetFlatList
//             data={data}
//             keyExtractor={i => i}
//             renderItem={renderItem}
//             contentContainerStyle={styles.contentContainer}
//           />
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 200,
//   },
//   contentContainer: {
//     backgroundColor: 'white',
//   },
//   itemContainer: {
//     padding: 6,
//     margin: 6,
//     backgroundColor: '#eee',
//   },
// });

// export default App;

import {View, Text} from 'react-native';
import React from 'react';
import Cameras from './src/components/Camera';

const App = () => {
  return (
    <View>
      <Cameras />
    </View>
  );
};

export default App;
