import React from 'react';

import Combination from './WithToggle';

class CollapseExpand extends React.Component {
    
    
    render(){
        const {data,toggle} = this.props;
        return(
            <div>
              <h3>Collapse Expand</h3>
              <p>Sample ShoppingList:</p>
              <button onClick = {data}>{toggle ? "Expand" : "Collapse"}</button>
             {toggle ? null : 
              <ul>
                <li>Eggs</li>
                <li>Bread</li>
              </ul>}
            </div>
            );
    }
    
}

const CollapseExpandList = Combination(CollapseExpand);

export default CollapseExpandList;