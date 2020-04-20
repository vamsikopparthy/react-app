import {observer} from "mobx-react";
import React from 'react';


@observer
class Footer extends React.Component {

changeFilterType = (type) => {
    const {changeSelectedFiltertype} = this.props
    changeSelectedFiltertype(type);
}


render(){
    
return(

<div className="footer-todo-list">

        <div>
            <button className="filter-buttons" onClick = {this.changeFilterType('All')}>All</button>
            <button className="filter-buttons" onClick = {this.changeFilterType('Active')}>Active</button>
            <button className="filter-buttons" onClick = {this.changeFilterType('Completed')}>Completed</button>
        </div>
    <button className="filter-buttons filter-clear-completed-buttons" onClick = {this.clearCompletedTodos}>Clear completed</button>
</div>
 )}            

}

export default Footer;