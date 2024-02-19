import { todoService } from "../services/TodoService.js";
import { Pop } from "../utils/Pop.js";

export class TodoController {
    constructor() {
this.getTodos()
    }

    async getTodos() {
        await todoService.getTodo()
        Pop.success('Got Todos')
    } catch (error) {
    console.error(error)
    Pop.error(error)
    }
}