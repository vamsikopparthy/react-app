import React from 'react';

import {observable} from 'mobx';

import Combination from './combination';

import {observer} from 'mobx-react';

@observer
class Add extends React.Component {
    
    
    render(){
        const {doOperation, data, color} = this.props;
        console.log("data: ",data);
        return(
            <div>

            <p>color:{color}</p>
            <button onClick = {doOperation} style={{backgroundColor:color}}>ADD</button>
            </div>
            );
    }
}

const EnhancedAdd = Combination(Add)
export default EnhancedAdd;  