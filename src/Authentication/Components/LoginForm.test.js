import React from "react";

import { render } from "@testing-library/react";

import SigninForm from "./LoginForm";

describe("SignInForm", () => {
    
    it("should render typed username", () => {
        
        const username = "text-user"
        
        const {getByPlaceholderText} =  render(<SigninForm 
             username = {username} onChangeUsername = {() => {}}
             />
            )
        
        const usernameField = getByPlaceholderText("Username");
        
        expect(usernameField.value).toBe(username);
        
    })
    
    it("should render typed password", () => {
        
        
        const password = "text-password"
        
        const {getByPlaceholderText} = render(<SigninForm 
               password = {password} onChangePassword = { () => {}}
               />
              )
              
        const passwordField = getByPlaceholderText("password");
        
        expect(passwordField.value).toBe(password);
    })
    
    it("should render given error message", () => {
        
         const {getByText} = render(<SigninForm
           errorMessage = "Invalid username" />
           );
        
        getByText(/invalid username/i) 
        
    })
    
})
