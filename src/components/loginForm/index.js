import {observer} from "mobx-react";

import React from 'react';


class LoginForm extends React.Component {
    
onClickLoginId = () => {
    
}

onClickPassword = () => {
    
}

onClickButton = () => {
    
}

    
    render() {
        return (
            <div style={{height:"100vh", width:"100vh", display:"flex", flexDirection:"column" }}>
            <input onChange = {this.onClickLoginId} value="text" placeholder="loginId" />
            <input onChange = {this.onClickPassword} value="text" placeholder="password"/>
            <button onClick = {this.onClickButton} >Login</button>
            </div>
            );
    }
}