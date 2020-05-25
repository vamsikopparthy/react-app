import React from 'react';

import {observer} from 'mobx-react';

import ScreenSizeDetectors from './ScreenSizeDetectors';

@observer
class Maxwidth extends React.Component {
    
    
    render(){
        
        const {viewportWidth,widowWidth} = this.props;
        return(
            <div>
              <h3>Device TypeText</h3>
              <p>DeviceType:{viewportWidth()}</p>
            </div>
            );
    }
}

const WindowWidth = ScreenSizeDetectors(Maxwidth);

export default WindowWidth;