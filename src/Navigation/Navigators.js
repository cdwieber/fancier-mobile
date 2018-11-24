import React from 'react';
import {Button, Icon} from 'native-base';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createDrawerNavigator, 
  createAppContainer,
  createMaterialTopTabNavigator,
  DrawerActions
} from 'react-navigation';
import { Loading, SignIn, SignUp } from '../Screens';
import Home from '../Screens/Main/Home';
import {Notifications} from '../Components/Common';
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
  lazy: true,
  tabBarOptions: {
    scrollEnabled: true
  }
}
);


const AppDrawer = createDrawerNavigator({ 
    Main: Home,
    Vendors: VendorTabs
},
{
  navigationOptions: ({ navigation }) => ({
    title: 'Fancier',
    headerLeft:<Button transparent onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Icon name='menu' /></Button>,
    headerRight: <Notifications />
  }),
  initialRouteName: Vendors
}
);

const AppStack = createStackNavigator(
  {
    Drawer: AppDrawer
  },
)

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