import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import VendorTemplate from '../../Components/VendorTemplate';

class Venues extends Component {

    render() {
        return(
            <VendorTemplate type='venue' />
        );
    }
}

export {Venues};