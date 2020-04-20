import {observer} from 'mobx-react';
import Footer from './footer'
import TodoInput from './TodoInput';
import TodoModel from '../../stores/models/todoModel';
import MobxTodoStore from '../../stores/mobxTodoStore';
import React from 'react';

import Todo from './Todo';

@observer
class MobxTodoList extends React.Component {
    
    addTodo=(title)=>{
       const todo = new TodoModel(title);
       MobxTodoStore.addTodo(todo);
    }
    
   removeToDo = (id) =>{
     MobxTodoStore.removeTodo(id);
   }
   
   
    render(){
        const {TodoList, filterTodos, changeSelectedFiltertype} = MobxTodoStore;
        let filteredTodos = filterTodos(); 
    return(
      <div>
        <TodoInput addTodo={this.addTodo}/> 
        <div>
          {
            filteredTodos.map(todo => {
            console.log(todo,'filtered')
               return <Todo 
                        removeToDo={this.removeToDo}
                        id = {todo.id}
                        key={todo.id}
                        todo = {todo}
                        isChecked={todo.isChecked}
                        title={todo.title}
                        />;
           })   
          }
        </div>
        <Footer  todosLeft={this.todosLeft}
          changeSelectedFiltertype={changeSelectedFiltertype}
        />
      </div>
    );
    }
    
}

export default MobxTodoList;