import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawtodoList() {
    const todos = AppState.todos
    let htmlString = ''
    todos.forEach(todo => htmlString += todo.todoListHTML)
    setHTML('todoService', htmlString)

    const numTodos = todos.length;
    document.getElementById('todoCount').textContent = numTodos.toString();

}



export class TodoController {
    constructor() {
AppState.on('account', this.getTodos)
AppState.on('todos', _drawtodoList)
    }

    async getTodos() {
        await todoService.getTodo()
        // Pop.success('Got Todos')
    } catch (error) {
    console.error(error)
    Pop.error(error)
    }

    async createTodo() {
        try{
            event.preventDefault()

            console.log('creating todo')

            const form = event.target

            console.log('todo form', form)

            const todoFormData = getFormData(form)

            console.log('object from form', todoFormData)

            await todoService.createTodo(todoFormData)
            
            // @ts-ignore
            form.reset() 
        } catch(error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async removeTodo(todoId) {
        try {
          console.log('removing todo', todoId);
    
          const wantsToRemove = await Pop.confirm('Are you sure you want to delete this car for forever and ever?')
    
          if (!wantsToRemove) {
            return
          }
    
          await todoService.removeTodo(todoId)
    
          Pop.success('todo was deleted')
        } catch (error) {
          console.error(error)
          Pop.error(error)
        }


      }

      async completeTodo(todoId) {
        try {
            console.log('complete todo', todoId);
            await todoService.completeTodo(todoId)
    } catch (error) {
      console.error(error);
      Pop.error(error)
        }
      }

}