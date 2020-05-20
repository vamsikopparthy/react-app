import React from 'react';

import {observable} from 'mobx'

import {observer} from 'mobx-react'

@observer
export default function Combination(WrappedComponent) {
    return class extends React.Component {
    
    @observable toggle;
    
    constructor() {
        super();
        this.toggle = true;
    }
    
    data = () => {
        this.toggle = !(this.toggle);
        console.log(this.toggle);
    }
    
    
    render() {
        return(
             <div>
              <WrappedComponent toggle = {this.toggle} data = {this.data} />
             </div>
            );
    }
  }
}