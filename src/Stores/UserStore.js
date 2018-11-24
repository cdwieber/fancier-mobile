import {observable, action} from 'mobx';


//TODO: Transition auth to MobX
class UserStore {
    @observable token = '';

    @action
    setToken (token) {
        this.token = token;
    }
}

export default UserStore;