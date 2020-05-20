import React from 'react';

import {observable, action} from 'mobx';

import { Redirect } from "react-router-dom";

import {observer, inject} from "mobx-react";

import { withRouter } from "react-router-dom";

import SignInForm from "../../components/SignInForm";

import {ProductStore} from "../../../components/HomePage";

import { getAccessToken } from '../../../utils/StorageUtils';


@inject("authStore")
@observer 
class signInRoute extends React.Component {
    
    @observable username = "";
    @observable password = "";
    @observable errorMessage = "";
    
    userNameRef = React.createRef();
    
    componentDidMount(){
        this.userNameRef.current.focus();
    }
    
    onChangeUsername(e) {
        this.username = event.target.value;
    }
    
    onChangePassword(e) {
        this.password = event.target.value;
    }
    
    onEnterKeyPress = (e) => {
        if(e.key === 'enter') {
            this.onSubmitForm(e);
        }
    }
    
    onSignInSucess () {
        const {history} = this.props;
        history.push(ProductStore);
    }
    
    onSignInFailure () {
        const { getUserSignInAPIError: apiError } = this.props.authStore;
        
       if(apiError !== null && apiError !== undefined) {
          this.errorMessage = apiError;
       }
       
    }
    
    onSubmitForm(e) {
        
        if(this.username === "" || this.username === undefined) {
            this.errorMessage = "Please enter username";
            return;
        }
        else if(this.password === "" || this.password === undefined) {
            this.errorMessage = "Please enter password";
            return;
        }
        else {
            this.errorMessage = "";
            
            
        }
    }
    
    render() {
        return (
            
            <SignInForm
              errorMessage = {this.errorMessage}
              username = {this.username}
              password = {this.password}
              onChangeUsername = {this.onChangeUsername}
              onChangePassword = {this.onChangePassword}
              onEnterKeyPress = {this.onEnterKeyPress}
              onSubmitForm = {this.onSubmitForm}
            />
            
            )
    }
    
} 