import React, {Component} from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Reactotron from 'reactotron-react-native';


export default class VendorTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: ''
        }

        this.getUser();
      }

    getUser = async () => {
        let user = '';
        try {
          user = await AsyncStorage.getItem('user');
          this.setState({
            user: user
        });
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
    }

    render() {
        Reactotron.log(this.state);
        return(
            <Container>
                <Text>{this.state.user}</Text>
                <Text>HI EVERYBODAY! I'm a {this.props.type} vendor!</Text>
            </Container>
        );
    }
}