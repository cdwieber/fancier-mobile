import React, {Component} from 'react';
import {ImageBackground, Image, View, StyleSheet} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import {Container} from 'native-base';

export default class AuthTemplate extends Component {
    render() {
        return (
        <Container>
                <ImageBackground source={require('../Images/login-bg2.png')}
                style={{width: '100%', height: '100%'}}>
                    <Grid>
                    <Row>
                        <View style={styles.logo}>
                            <Image source={require('../Images/logo.png')} />
                        </View>
                    </Row>
                    <Row>
                    <View style={styles.form}>

                    {this.props.children}

                    </View>
                    </Row>
                </Grid>
            </ImageBackground>
        </Container>
        );
    }
}