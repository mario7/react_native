/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
// import AppScreen from './AppScreen';
// import ReducerTestAppFirst from './ReducerTestAppFirst';
// import ReducerTestAppSecond from './ReducerTestAppSecond';
import StoreTestApp from './StoreTestApp'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StoreTestApp);
