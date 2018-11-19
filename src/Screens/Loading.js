import React from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = async () => {
        const user = await AsyncStorage.getItem('userToken');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(user ? 'App' : 'Auth');
      };

    render() {
        return (
            <View style={styles.spinnerContainer}>
                <ActivityIndicator />
            </View>
        );
    };
}

const styles = {
    spinnerContainer: {
      flex: -1,
      marginTop: 12,
      marginBottom: 12
    }
}

export { Loading };