import React from 'react';
import productStore from '../../stores/clothesStore';
import {action} from 'mobx';

class SortBy extends React.Component {
    
    @action.bound
    onSelectSortBy (event) {
        this.props.onSelectSortBy(event.target.value);
    }
    
    render(){
        return(
            <select onChange={this.onSelectSortBy}>
               <option value="Select">Select</option>
               <option value="Ascending">Lowest to Highest</option>
               <option value="Descending">Highest to Lowest</option>
            </select>
            );
    }
    
}


export default SortBy;