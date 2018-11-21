import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Button } from 'native-base';
import {DrawerActions, NavigationActions} from 'react-navigation';
import {
    Bakery,
    Cinematographers,
    Floral,
    Grooming,
    Music,
    Photographers,
    Venues
} from '../Vendors';

class Home extends Component {



  render() {
    return (
      <Container>
        {/* <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
          <Tab heading="Bakery">
            <Bakery />
          </Tab>
          <Tab heading="Cinema">
            <Cinematographers />
          </Tab>
          <Tab heading="Floral">
            <Floral />
          </Tab>
          <Tab heading="Grooming">
            <Grooming />
          </Tab>
          <Tab heading="Music">
            <Music />
          </Tab>
          <Tab heading="Photo">
            <Photographers />
          </Tab>
          <Tab heading="Venues">
              <Venues />
          </Tab>
        </Tabs> */}
      </Container>
    );
  }
}

export default Home;