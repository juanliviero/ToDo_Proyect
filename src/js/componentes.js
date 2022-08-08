import {ToDo} from '../classes';
import { todoList } from "../index";

// Refrencias a HTML

const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const btnDeletAll = document.querySelector('.clear-completed')
const ulFiltros = document.querySelector('.filters')
const anchorFiltros = document.querySelectorAll('.filtro') 

export const CreateTodoHtml = (todo) =>{

    const htmlTodo = ` 
    <li class="${ (todo.completado) ? 'completed' : ''  }" data-id="${todo.id}">  
		<div class="view">
			<input class="toggle" type="checkbox" ${todo.completado ? 'checked' : '' }    >
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li> `;

    const div = document.createElement('div');
    
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}


// Eventos 

txtInput.addEventListener('keyup',(event)=>{

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value)

        const nuevoTodo = new ToDo(txtInput.value); // creamos una constante que obtendra el valor de txtinput
        
        todoList.newTodo(nuevoTodo) // le enviamos la constante como parametro al metodo newtodo de la clase todolist

        console.log(todoList)

        CreateTodoHtml(nuevoTodo) // le enviamos la constante a la funcion para agregar el TODO en el HTML

        txtInput.value = '' // limpia el valor creado 
        
    }

});

divTodoList.addEventListener('click',(event)=>{

    
    const nombreElemento = (event.target.localName); // hace referencia al evento de click sobre el li (input.label,button)
    const todoElemento = event.target.parentElement.parentElement; // hace referencia a todo el li para obtener ei ID
    const todoId = todoElemento.getAttribute('data-id'); // trae el numero del ID 

    if(nombreElemento.includes('input')){ // checkbox de completado

        todoList.checkedTodo(todoId);
        todoElemento.classList.toggle('completed');

    }else if(nombreElemento.includes('button')){ // boton eliminar

      todoList.deleteTodo(todoId);
      divTodoList.removeChild(todoElemento);  

    }
});

btnDeletAll.addEventListener('click',()=>{

    todoList.deletCompleted();
    
    for(let i = divTodoList.children.length-1; i>= 0; i--){

        const elemento = divTodoList.children[i];
        
        if(elemento.classList.contains('completed')){

            divTodoList.removeChild(elemento);
        }

    }

})

ulFiltros.addEventListener('click',(event)=>{

    const filtro = event.target.text;

    if(!filtro){return;}  // esto se utiliza en caso de que se haga click en una zona q no sea de filtros y no se devuelve nada

    
    anchorFiltros.forEach(elem =>elem.classList.remove('selected'));
    event.target.classList.add('selected');

    
    for (const elemento of divTodoList.children){ // barro todos los elementos de la lista ordenada

        elemento.classList.remove('hidden') // quito la clase hidden de todos los elementos

        const completado = elemento.classList.contains('completed')

        switch(filtro){

            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                };
            break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                    }
            break;
        }

     }

})

