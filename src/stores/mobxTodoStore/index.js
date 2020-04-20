import {observable,action,computed} from "mobx";

class MobxTodoStore{
    @observable TodoList;
    @observable count;
    @observable SelectedFilterType;
    constructor() {
        this.TodoList = [];
        this.count = 0;
        this.SelectedFilterType = "All";
    }
    
    
    @action.bound
    addTodo (todo) {
        this.TodoList.push(todo);
        console.log('addtodo',this.todos)
        this.count++;
    }
    
    @action.bound
    removeTodo (id) {
        console.log(this.TodoList);
        const removeTodoList = this.TodoList.filter(eachElement => {
            if(id !== eachElement.id) {
                this.count--;
                return eachElement;
            }
        });
        console.log(removeTodoList);
        this.TodoList = removeTodoList;
    }
    
    @action.bound
    changeSelectedFiltertype (type) {
        this.SelectedFilterType = type;
    }
    
    @action.bound
    filterTodos (){
        
        let filterType = this.SelectedFilterType;
        
        let todos = [];
        switch(filterType) {
            case("All"):
                todos = [...this.TodoList];
                break;
                
            case("Active"):
                todos = this.TodoList.filter(eachTodo => {
                    return !(eachTodo.isChecked);
                })
                break;
                
            case("Completed"):
                todos = this.TodoList.filter(eachTodo => {
                    return eachTodo.isChecked;
                })
                break;
            
            default:
                todos = [...this.TodoList];
                
                
        }
        
        
        return todos;
    }
    

}



const mobxTodoStore = new MobxTodoStore();

export default mobxTodoStore;