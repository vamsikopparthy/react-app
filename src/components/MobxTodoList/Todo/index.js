
import {observer} from "mobx-react";
import React from 'react';


@observer                                                                                                             
class Todo extends React.Component {
    
    onChangeClicked = () => {
     const {todo} = this.props;
     todo.onChangeClicked();
    }
    
    removeTodo = (event) => {
        const {id, removeToDo} = this.props;
        removeToDo(id);
    }
    
    render(){
        const {isChecked,title,id} = this.props;
        return(
        <div id={id} >
            <input
                type="checkbox"
                onClick= {this.onChangeClicked}
                checked={isChecked}/>
            <input 
            style = {{textDecoration: isChecked ? "line-through":"none",color: "red" }}
            type="text" value={title}/>
            <button onClick={this.removeTodo}>X</button>
        </div>
            );
    }
}

export default Todo; 

