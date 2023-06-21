/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
