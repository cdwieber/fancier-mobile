import React from 'react';
import { Text, AsyncStorage,StyleSheet } from 'react-native';
import { Container, Form, Item, Input, Label, Button } from 'native-base';
import { API_ROOT } from 'react-native-dotenv';
import axios from 'axios';
import Reactotron from 'reactotron-react-native';
import AuthTemplate from '../Components/AuthTemplate';

class SignIn extends React.Component {
    //Hide the header for these screens
    static navigationOptions = {
        header: null
      }

    constructor(props) {
        super(props);
        state = {
          email   : '',
          password: '',
        }
      }

    _storeToken = async (response) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(response.data.access_token));
            this.props.navigation.navigate('AuthLoading');
        } catch {
            console.log('ERROR. Unable to store token.');
        }
    }

    login = () => {
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
            <AuthTemplate>
                <Text style={{alignSelf: 'center'}}>Sign In</Text>
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
                <Button block onPress={this.login} style={styles.button}>
                    <Text>Sign In</Text>
                </Button>
                <Button block onPress={() => this.props.navigation.navigate('SignUp')} style={styles.button}>
                    <Text>Not a member? Sign up!</Text>
                </Button>
            </AuthTemplate>          
        );
    }
}

styles = StyleSheet.create({
    form: {
        backgroundColor: 'rgba(255,255,255,.8)',
        margin: 10, 
        padding: 10,
        width: '95%',
        justifyContent: 'space-around',
        borderRadius: 10,
    },
    logo: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        backgroundColor: '#A17F74'
    }
});

export { SignIn };