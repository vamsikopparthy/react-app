import { observable, action } from "mobx";

import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

import { setAccessToken, clearUserSession } from "../../../utils/StorageUtils";

class AuthStore {
    
    authAPIService;
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    
    constructor(authAPIService) {
       this.authAPIService = authAPIService;
       this.init();
    }
    
  @action.bound
  init() {
    this.getUserSignInAPIStatus = API_INITIAL;
    this.getUserSignInAPIError = null;
  }

  @action.bound
  setGetUserSignInAPIStatus(status) {
    this.getUserSignInAPIStatus = status;
  }

  @action.bound
  setGetUserSignInAPIError(error) {
    this.getUserSignInAPIError = error;
  }

  @action.bound
  setUserSignInAPIResponse(response) {
    setAccessToken(response.length > 0 && response[0].access_token);
  }
  
  @action.bound 
  setUserSignInAPIResponse(response) {
      setAccessToken(response.length > 0 && response[0].access_token);
  }
  
    
    @action.bound
    userSignIn(request, onSuccess, onFailure) {
    const userSignInAPIPromise = this.authAPIService.signInAPI(request);
    return bindPromiseWithOnSuccess(userSignInAPIPromise)
      .to(this.setGetUserSignInAPIStatus, response => {
        this.setUserSignInAPIResponse(response);
        
      })
      .catch(error => {
        this.setGetUserSignInAPIError(error);
      });
    }
    
    
   
    
}