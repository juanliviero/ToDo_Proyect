import './styles.css';

import { TodoList } from './classes'; 
import { CreateTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => CreateTodoHtml(todo)); 

// para c/toDo en el arreglo de todos, voy a ejecutar la funcion CrearTodoHtml mandandole ese todo 