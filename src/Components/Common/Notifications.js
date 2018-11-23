import React, {Component} from 'react';
import {Text, View, StyleSheet,} from 'react-native';
import {Badge, Icon, Button} from 'native-base';

class Notifications extends Component {
    render() {
        return(
            <View style={styles.notif}>
                <Button transparent>
                <Icon name='mail' style={styles.icon} />
                    <Badge style={styles.badge}>
                        <Text>2</Text>
                    </Badge>
                </Button>
            </View>
        );
    }
}

export {Notifications};

styles = StyleSheet.create({
    notif: {
        flexDirection: 'row',
        marginRight: 7
    },
    icon: {
        fontSize: 40,
        position: 'absolute',
       right: -6
    },
    badge: {
        height: 21
    }
});