import React from 'react';
import { Text, AsyncStorage, View, ImageBackground, StyleSheet, Image } from 'react-native';
import { Container, Form, Item, Input, Label, Button } from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';
import { API_ROOT } from 'react-native-dotenv';
import axios from 'axios';
import Reactotron from 'reactotron-react-native';

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
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
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
            <Container>
                <ImageBackground source={require('../Images/logo-bg2.jpg')}
                style={{width: '100%', height: '100%'}}>
                    <Grid>
                    <Row>
                        <View style={styles.logo}>
                            <Image source={require('../Images/logo.png')} />
                        </View>
                    </Row>
                    <Row>
                    <View style={styles.form}>
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
                        </View>
                        </Row>
                    </Grid>
                </ImageBackground>
            </Container>
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
    }
});

export { SignIn };