import React from 'react';
import {Text, Image} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import Reactotron from 'reactotron-react-native';
const VendorItem = ({vendor}) => {
    const {business_name, images} = vendor;
    Reactotron.log(images[0].url);

    return(
        <Card>
            <CardItem>
                <Body>
                    <Text>{business_name}</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: images[0].url}} style={{height: 200, width: '100%'}} />
            </CardItem>
        </Card>
    );
}

export default VendorItem;