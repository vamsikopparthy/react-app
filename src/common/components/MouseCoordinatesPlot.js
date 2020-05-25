import React from 'react';

import {observer} from 'mobx-react'

import {observable} from 'mobx';

import MouseFunctionality from './MouseFunctionality'

@observer
class MouseCoordinates extends React.Component {
    
    @observable x;
    @observable y;
     
    constructor() {
        super();
        this.x = 0
        this.y = 0
    }
    
    handleMouseMove = () => {
        this.x = event.clientx;
        this.y = event.clienty;
    }
    
    render() {
        const {response} = this.props;
        //console.log(response)
        return(
            <div onClick = {this.handleMouseMove}>
            
               response() = {
               this.state}
            </div>
            );
    }
}

export default MouseCoordinates;