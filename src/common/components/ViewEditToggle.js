import React from 'react';

import  {observable} from 'mobx';

import {observer} from 'mobx-react';

import Combination from './WithToggle'; 

@observer
class Toggle extends React.Component {

 @observable userInputValue;
 
 constructor() {
     super();
     this.userInputValue = "Click on the edit Button to start editing";
 }
 
 handleUserInput = (event) => {
     this.userInputValue = event.target.value;
 }
 
    render(){
        const {toggle,data} = this.props;
        
        return(
            <div>
              <h1>Hoc's usage</h1>
              <h3>ViewEditToggle</h3>
             <div>
              {toggle ? <p>Click on the edit Button to start editing</p> : <input value={this.userInputValue} onChange={this.handleUserInput} type="text" />}
              <button onClick = {data}> {toggle ? "Edit":"Cancel"}</button>
             </div>
            </div>
            );
    }
}

const EnhancedToggle = Combination(Toggle);

export default EnhancedToggle;