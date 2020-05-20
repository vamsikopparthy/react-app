import React from 'react';

import {observer} from 'mobx-react';

class SigninForm extends React.Component {
    
    render() {
        const {
            apiStatus,
            username,
            onChangeUsername,
            password,
            onChangePassword,
            onEnterKeyPress,
            onSubmitForm,
            errorMessage,
        } = this.props;
    
    
    return(
        <div>
          <input
          type = "text"
          value={username}
          onChange = {onChangeUsername}
          className = ""
          placeholder="Username"
          />
          <input
           type = "text"
           value = {password}
           onChange = {onChangePassword}
           className = ""
           placeholder = "password"
           />
           <button>
            SignIn
           </button>
        </div>
        );
    
}

}

export default SigninForm;