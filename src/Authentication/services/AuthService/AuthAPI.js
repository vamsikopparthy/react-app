import {create} from 'api-sauce';

import {apimethods} from '../../constants/APIconstants';

import {networkCallWithApiSauce} from '../../utils/APIUtils';

class AuthAPI {
    api;
     constructor() {
     this.api = {
       baseURL: "https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/",
     }
    }


signInAPI(request) {
    return networkCallWithApiSauce(
        this.api,
        "v1/signin/",
        request,
        apimethods.get
        );
}

}

export default AuthAPI;