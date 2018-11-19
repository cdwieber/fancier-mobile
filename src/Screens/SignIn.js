import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { API_ROOT } from 'react-native-dotenv';
import axios from 'axios';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        state = {
          email   : '',
          password: '',
        }
      }

    _storeToken = async (response) => {
        try {
            await AsyncStorage.setItem('userToken', JSON.stringify(response.data));
        } catch {
            console.log('ERROR. Unable to store token.');
        }
    }

    login = (email, password) => {
        let payload={
            "email":this.state.email,
            "password":this.state.password
            }
        const endpoint = API_ROOT + 'auth/login';

        axios.post(endpoint, payload)
        .then((response) => {
            this._storeToken(response)
        }).catch((err) => {
            console.log('API ERROR: ' + err);
        });
    }

    render() {
        return(
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                    <Label>Email</Label>
                    <Input 
                    onChangeText={() => this.setState( {email: text})}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input 
                    onChangeText={() => this.setState( { password: text })}/>
                    </Item>
                </Form>
                <Button block>
                    <Text>Sign In</Text>
                </Button>
                <Button block onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Not a member? Sign up!</Text>
                </Button>
                </Content>
            </Container>
        );
    }
}

export { SignIn };