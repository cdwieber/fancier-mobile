import React from 'react';
import {Text, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
// This allows the component to be used anywhere, and still use the nav prop
import {withNavigation} from 'react-navigation';

class SignOutButton extends React.Component {
    constructor(props) {
        super(props);
    }

    signOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return(
            <Button onPress={this.signOut}>
                <Text>Sign Out</Text>
            </Button>
        );
    }
}

export default withNavigation(SignOutButton);