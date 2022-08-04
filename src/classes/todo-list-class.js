// creamos una clase TodoList que manejará los metodos aplicables a la lista de tareas creadas, 


export class TodoList {

    constructor(){
        this.todos = [];

    }

    newTodo (todo){

        this.todos.push(todo);
    }

    deleteTodo(id){

    }

    checkedTodo(is){

    }

    deletAll(){

    }
}