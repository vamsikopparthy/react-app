import React from 'react';

import {observer} from 'mobx-react';

import {observable} from 'mobx';


@observer
export default function ScreenSizeDetectors(WrappedComponent) {
    return class extends React.Component {
        
        @observable windowWidth;
        
        constructor() {
            super();
            this.windowWidth = window.innerWidth;
        }
        
        viewportWidth = () => {
        if(this.windowWidth < 576){
            return 'Mobile';
        }
        else if(this.windowWidth >= 576 && this.windowWidth < 992 ) {
            return 'Tablet';
        }
        else {
            return 'Desktop';
        }
        }    
    
       updateState = () => {
           this.windowWidth = window.innerWidth;
       }
        
        render(){
            window.addEventListener("resize", this.updateState)
            return(
                <div>
                   <WrappedComponent viewportWidth= {this.viewportWidth} windowWidth={this.windowWidth} />
                </div>
                );
        }
        
    }
}