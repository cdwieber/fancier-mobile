import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class VendorTemplate extends Component {
    render() {
        return(
            <View>
                <Text>HI EVERYBODAY! I'm a {this.props.type} vendor!</Text>
            </View>
        );
    }
}