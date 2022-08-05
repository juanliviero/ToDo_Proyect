import './styles.css';
import { ToDo,TodoList } from './classes'; 
import { CreateTodoHtml } from './js/componentes';





export const todoList = new TodoList();

const tarea = new ToDo('Aprender Javascript');
todoList.newTodo(tarea);


tarea.completado = true;


console.log(todoList)

CreateTodoHtml(tarea);