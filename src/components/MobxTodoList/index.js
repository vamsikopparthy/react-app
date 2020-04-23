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
        console.log('TodoList:',TodoList)
        let filteredTodos = filterTodos; 
        console.log('filtered',filteredTodos)
    return(
      <div>
        <TodoInput addTodo={this.addTodo}/> 
      
             <Footer  todosLeft={this.todosLeft}
                      changeSelectedFiltertype={changeSelectedFiltertype}
                    />
          
      </div>
    );
    }
    
}

export default MobxTodoList;




        //   
        //     TodoList.map(todo => {
            
        //               <Todo 
        //                 removeToDo={this.removeToDo}
        //                 id = {todo.id}
        //                 key={todo.id}
        //                 todo = {todo}
        //                 isChecked={todo.isChecked}
        //                 title={todo.title}
        //                 />
        //   })   
        //   }
        //</div>

       