import React from 'react';
import {observable} from 'mobx';

import {observer} from 'mobx-react';

import Combination from './combination';

@observer
class Sub extends React.Component {
    

    render(){
        const {doOperation, data , color} = this.props;
        console.log(data);
        return(
            <div>
           {/* <p>data: {data}</p> */}
            <p>color:</p>
            <button onClick = {doOperation} style={{color:color}}>SUB</button>
            </div>
            );
    }
}

const EnhancedSub = Combination(Sub)

export default {EnhancedSub};