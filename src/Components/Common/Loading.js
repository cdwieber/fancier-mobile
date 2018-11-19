import React from 'react';
import { View, ActivityIndicator } from 'react-native';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      };

    render() {
        <View style={styles.spinnerContainer}>
            <ActivityIndicator />
        </View>
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