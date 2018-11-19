import React from 'react';
import { View, Text } from 'react-native';
import SignOutButton from '../Components/Common/SignOutButton';

const Home = () => {

    return(
        <View>
            <Text>Hi! I'm a temporary home screen placeholder.</Text>
            <SignOutButton />
        </View>
    );
}

export { Home };