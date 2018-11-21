import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';
import AuthTemplate from '../Components/AuthTemplate';


class SignUp extends React.Component {

    static navigationOptions = {
        title: 'Register',
      };
    

    render() {
        return(
            <AuthTemplate>
                <Text style={{alignSelf: 'center'}}>Enter your email, then choose a password.</Text>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Repeat Password</Label>
                        <Input />
                    </Item>
                </Form>
                <Button style={styles.button} block>
                    <Text>Register</Text>
                </Button>
            </AuthTemplate>
        );
    }
}

export { SignUp };

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