import React from 'react';

import {observer} from 'mobx-react';

import {observable} from 'mobx';

@observer
export default function Combination(WrappedComponent) {
    return class extends React.Component {
        
        @observable color;
        @observable data;
        
     
        componentDidMount = async() => {
          const response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
          const result = await response.json()
          this.data = result
        }
        
        doOperation = () => {
            // if(operation === "addition"){
                this.color = "orange";
            //}
            //else {
              //  this.result = a - b;
            //}
         } 
        
        render(){
            return(
                <WrappedComponent data = {this.data} doOperation = {this.doOperation} color = {this.color}/>
                );
        }
    };
}

//export default Combination;