import React, { Component } from 'react';
import {Text} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, Button, Icon } from 'native-base';
import SignOutButton from '../../Components/Common/SignOutButton';
import {DrawerActions, NavigationActions} from 'react-navigation';

class Home extends Component {

  render() {
    return (
      <Container>
        <Text>
            FOO!
        </Text>
        {/* <Button onPress={() => this.props.navigation.toggleDrawer()}>
            <Text>Toggle Drawer</Text>
        </Button>*/}
        <SignOutButton />
      </Container> 
    );
  }
}

export default Home;