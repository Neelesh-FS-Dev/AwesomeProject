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

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
