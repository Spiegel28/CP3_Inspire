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
    }







export const todoService = new TodoService()