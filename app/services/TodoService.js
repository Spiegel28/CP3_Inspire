import { AppState } from "../AppState.js"
import { Todos } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {

    async getTodo() {
        const response = await api.get('api/todos')
        console.log('got list', response.data)

        const newTodos = response.data.map(todoPOJO => new Todos(todoPOJO))
        console.log('mapped over', newTodos)

        AppState.todo = newTodos
    }
    }







export const todoService = new TodoService()