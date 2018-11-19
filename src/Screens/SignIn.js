import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';


class SignIn extends React.Component {
    render() {
        return(
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                    <Label>Username</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
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