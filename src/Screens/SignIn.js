import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { API_ROOT } from 'react-native-dotenv';
import axios from 'axios';
import Reactotron from 'reactotron-react-native'; 


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
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
            this.props.navigation.navigate('AuthLoading');
        } catch {
            console.log('ERROR. Unable to store token.');
        }
    }

    login = () => {
        Reactotron.log("BING BONG!");
        let payload={
             email: this.state.email,
             password: this.state.password
            }
        const endpoint = API_ROOT + 'auth/login';

        axios.post(endpoint, payload)
        .then((response) => {
            this._storeToken(response)
            Reactotron.log(response);
        }).catch((err) => {
            Reactotron.log('API ERROR: ' + err);
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
                    autoCapitalize='none'
                    onChangeText={(text) => this.setState( {email: text})}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState( { password: text })}/>
                    </Item>
                </Form>
                <Button block onPress={this.login}>
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