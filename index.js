/** @format */
import './src/Config/Reactotron';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Container from './src/Navigation/Navigators';

AppRegistry.registerComponent(appName, () => Container);
