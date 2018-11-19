import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';


class SignUp extends React.Component {
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
                    <Item floatingLabel last>
                        <Label>Repeat Password</Label>
                        <Input />
                    </Item>
                </Form>
                <Button block>
                    <Text>Register</Text>
                </Button>
                </Content>
            </Container>
        );
    }
}

export { SignUp };