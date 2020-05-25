import React from 'react';

import {observer} from 'mobx-react'

import MouseCoordinates from './MouseCoordinatesPlot';

class MouseDisplay extends React.Component {
    
    render(){
       const {x,y} = this.props.MouseCoordinates;
        return(
            <div>
               display : ({x},{y})
            </div>
            );
    }
}

export default MouseCoordinates;