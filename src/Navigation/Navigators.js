import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator, 
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { Loading, SignIn, SignUp } from '../Screens';
import Home from '../Screens/Main/Home';
import {
  Bakery,
  Cinematographers,
  Floral,
  Grooming,
  Music,
  Photographers,
  Venues
} from '../Screens/Vendors';

const VendorTabs = createMaterialTopTabNavigator({
  Venues: Venues,
  Bakery: Bakery,
  Cinematics: Cinematographers,
  Floral: Floral,
  Grooming: Grooming,
  Music: Music,
  Photographers: Photographers
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    scrollEnabled: true
  }
}
);

const AppStack = createDrawerNavigator({ 
        Home: Home,
        MyWedding: Home,
        Vendors: VendorTabs,
        MyProfile: Home,
        SignOut: Home,
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