import {observable,action} from "mobx";

class TodoModel{
    id;
    @observable isChecked;
    @observable title;
    
    constructor(title) {
        this.id = Date.now();
        this.isChecked=false;
        this.title=title;
    }
    
    @action.bound
    onChangeClicked () {
        this.isChecked = !this.isChecked;
    }
    
    TodosLeft () {
        this.isChecked = this.isChecked;
    }
    
}

export default TodoModel;