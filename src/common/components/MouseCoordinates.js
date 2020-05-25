import React from 'react';

import {observer} from 'mobx-react';

import MouseTracker from './MouseTracker';

import DisplayMouseCoordinates from './DisplayMouseCoordinates';

@observer
class Mouse extends React.Component {
    
    constructor() {
        super();
        this.state = {x: 0,y: 0};
    }
    
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    
    render(){
      const {response} = this.props;
      
        return(
            <div onClick = {this.handleMouseMove}>
              {response(this.state)}
            </div>
            );
    }
    
}


export default Mouse;