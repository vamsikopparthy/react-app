import Mouse from './MouseCoordinates';

import React from 'react';

import {observer} from 'mobx-react';

@observer
class DisplayMouseCoordinates extends React.Component {
   

   render(){
      const {x,y} = this.props.mouse; 
      console.log(x, y)
        return(
            <div>
              <h3>Display Mouse Coordinates</h3>
              <p>This Mouse position is: ({x}, {y})</p>
            </div>
            );
    }
    
}

export default DisplayMouseCoordinates;