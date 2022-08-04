import './styles.css';
import { ToDo,TodoList } from './classes'; 




const todoList = new TodoList();
const tarea = new ToDo('Aprender JS');
const tarea2 = new ToDo('Aprender React');

todoList.newTodo(tarea);
todoList.newTodo(tarea2);

console.log(todoList)