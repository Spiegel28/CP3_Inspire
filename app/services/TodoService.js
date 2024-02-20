import { AppState } from "../AppState.js"
import { Todos } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {

    async getTodo() {
        const response = await api.get('api/todos')
        console.log('got list', response.data)

        const newTodos = response.data.map(todoPOJO => new Todos(todoPOJO))
        console.log('mapped over', newTodos)

        AppState.todos = newTodos
    }

    async createTodo(todoFormData) {
    console.log('todo form data', todoFormData)

    const response = await api.post('api/todos', todoFormData)
    console.log('creating todo', response.data)

    const newTodo = new Todos(response.data)
    console.log('new todo', newTodo)

    AppState.todos.push(newTodo)
    }

    async removeTodo(todoId) {
        // NOTE on the delete request, we specify the id of the resource that we want to delete in the request url, following the resource type. No second argument is passed, delete requests should not have a request body
        const response = await api.delete(`api/todos/${todoId}`)
    
        // NOTE the response.data in this case is just a string telling us the resource was successfully deleted. Good to log, but we won't use it on our code after this
        console.log('📡 deleting todo', response.data);
    
        // NOTE the car that we want to delete is in our AppState still, so we use the id from the network request to find the index of that car and splice it out
        const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
    
        if (todoIndex == -1) {
          throw new Error('Index was -1, you messed up the findIndex')
        }
    
        // NOTE make sure we do this after the delete request was successful
        AppState.todos.splice(todoIndex, 1)
      }

      async completeTodo(todoId) {
        const foundTodo = AppState.todos.find(Todos => Todos.id == todoId)

        const todoCompleteData = { completed: !foundTodo.completed}

        console.log(todoCompleteData)

        const response = await api.put(`api/todos/${todoId}`, todoCompleteData)

    console.log('📡 Updated todo', response.data);
    console.log('old object', foundTodo);
      }
    }







export const todoService = new TodoService()