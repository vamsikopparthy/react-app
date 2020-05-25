import React from 'react';

import {observer} from 'mobx-react'

import MouseCoordinates from './MouseCoordinatesPlot';

import MouseDisplay from './MouseDisplay';

class MouseFunctionality extends React.Component {
    
    render(){
        return(
            <MouseCoordinates response = {(mouse) =>
                <MouseDisplay mouse = {mouse} />
             }
             />    
            );
    }
}

export default MouseFunctionality;