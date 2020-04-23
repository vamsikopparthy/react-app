import {observable,action,computed} from "mobx";

import {API_INITIAL,API_SUCCESS,API_FAILED,API_FETCHING} from '@ib/api-constants';

import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';


class MobxTodoStore{
    @observable TodoList;
    @observable SelectedFilterType;
    userTodoService;
    
    constructor(userTodoService) {
        this.TodoList = [];
        this.SelectedFilterType = "All";
        this.init();
        userTodoService = this.userTodoService;
    }
    
    @action.bound
    init() {
        this.getTodosApiStatus = API_INITIAL
        this.getTodosApiError = null
        this.TodoList = []
    }
    
    
    @action.bound
    setTodosApiResponse(todosResponse) {
        console.log(todosResponse);
    }
    
    @action.bound
    setTodosApiError(error) {
        this.getUsersApiError = error
    }
    
    @action.bound
    setTodosApiStatus(apiStatus){
        this.getUsersApiStatus = apiStatus
    }
    
    @action.bound
    getUsersApi() {
        const todosPromise = this.UserTodoService.getTodosApi();
        return bindPromiseWithOnSuccess(todosPromise)
        .to(this.setTodosApiStatus,this.setTodosApiResponse)
        .catch(this.setTodosApiError)
    }
    
    
    clearStore() {
        this.init()
    }
    
    
    @action.bound
    addTodo (todo) {
        this.TodoList.unshift(todo);

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
    
    @computed
    get filterTodos(){
        
        let filterType = this.SelectedFilterType;
        
        let todos = [];
        switch(filterType) {
            case("All"):
                todos = [this.TodoList];
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
                todos = [this.TodoList];
        }
        console.log('ref',todos)
        
        return todos;
    }
    

}

export default MobxTodoStore;