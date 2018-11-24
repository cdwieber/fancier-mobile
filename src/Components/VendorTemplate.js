import React, {Component} from 'react';
import { Text, AsyncStorage, ScrollView } from 'react-native';
import { Container } from 'native-base';
import VendorItem from '../Components/VendorItem';
import Reactotron from 'reactotron-react-native';
import { API_ROOT } from 'react-native-dotenv';
import axios from 'axios';


export default class VendorTemplate extends Component {
    state = {
        user: '',
        vendors: []
      };
    constructor(props) {
        super(props);
      }

    async componentDidMount() {
        let user = await this.getUser();

        user = (JSON.parse(user));

        instance = axios.create({
            baseURL: API_ROOT + 'vendors/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+ user}
          });

        instance.get(this.props.type)
        .then(response => this.setState({vendors: response.data}));
    }

    async getUser() {
        let user = await AsyncStorage.getItem('user');
        return user;
    }

    renderVendors() {
        return this.state.vendors.map(vendor => 
            <VendorItem key={vendor.id} vendor={vendor} />
        );
    }

    render() {
        return(
            <Container>
                <ScrollView>
                    {this.renderVendors()}
                </ScrollView>
            </Container>
        );
    }
}