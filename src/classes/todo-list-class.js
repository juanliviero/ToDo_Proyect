// creamos una clase TodoList que manejará los metodos aplicables a la lista de tareas creadas, 


export class TodoList {

    constructor(){
        
        this.chargeLocalStorage();
        //this.todos = [];

        // primero veo si hay algun arreglo ya creado en el localStorage ejecutando la funcion,
        // en caso de que no (else) , se inicializa un arreglo vacio ( ver funcion chargelocalStorage)

    }

    newTodo (todo){

        this.todos.push(todo);
        this.saveLocalStorage();
    }

    deleteTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id ); // este filter devuelve un arreglo nuevo, excluyendo el id que le envio a la funcion , es decir, el id que quiero eliminar
        this.saveLocalStorage();
    }

    checkedTodo(id){

        for (const todo of this.todos){

            if(todo.id == id){

                todo.completado = !todo.completado;
                this.saveLocalStorage();
                break;    
            }
        }
    }

    deletCompleted(){

        this.todos = this.todos.filter(todo => !todo.completado ); // el filter devuelve todos los NO completados
        this.saveLocalStorage();
    }

    saveLocalStorage(){
                            
        localStorage.setItem('todo', JSON.stringify(this.todos)); // 

    }

    chargeLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [];

        // LO DE ARRIBA ES UN OPERADOR TERNARIO QUE SIMPLIFICA LO DE ABAJO 

        // this.todos = (condicion) ? (cond verdadero)  : (cond falsa); 

        /*if(localStorage.getItem('todo')){ // aqui verifico si en el LS existe una llave ToDo y la carga

            this.todos = JSON.parse(localStorage.getItem('todo')); // la funcion JSON.parse vuelve a objeto un String que fue transformado

            console.log('cargar todos',this.todos)
        }else{
            this.todos = [];  // sino existe... crea un arreglo nuevo
        }*/
    }
}