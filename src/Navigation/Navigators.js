import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Loading, Home, SignIn, SignUp } from '../Screens';

const AppStack = createStackNavigator({ 
        Home: Home, 
    });
const AuthStack = createStackNavigator({ 
    SignIn: SignIn,
    SignUp: SignUp
});

Container = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default Container;