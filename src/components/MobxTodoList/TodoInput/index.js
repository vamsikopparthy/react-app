import {observer} from "mobx-react";
import React from "react";
import {observable} from 'mobx';

@observer
class TodoInput extends React.Component {
  @observable title;
 
 constructor(props){
     super(props);
     this.title = "";
 }
 
 onChange = (event) => {
     this.title = event.target.value;
 }
 
 handleOnSubmit = (event) => {
     event.preventDefault();
     if(this.title !== ""){
         this.props.addTodo(this.title);
         this.title = "";
     }
 }
 
 render(){
     return(
        <form onSubmit={this.handleOnSubmit}>
            <input
                type="text" 
                style={{background:"lightgray",margin:"50px"}}
                onChange={this.onChange}
                placeholder="Enter Todo "
                value={this.title}/>
        </form>
)}
}
             
export default TodoInput ;
