import React from 'react';

import {observer} from 'mobx-react';

import Mouse from './MouseCoordinates';

import DisplayMouseCoordinates from './DisplayMouseCoordinates';

@observer
class MouseTracker extends React.Component {
    
    render() {
        return(
            <div>
            
              <Mouse response = {mouse => (
              <DisplayMouseCoordinates mouse = {mouse} />
              )}/>
              
            </div>
            );
    }
}

export default MouseTracker;

