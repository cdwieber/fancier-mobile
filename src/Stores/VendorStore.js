import {observable, action} from 'mobx';

class VendorStore {
    @observable name = '';
    @observable images = [];
    @observable liked = false;
}