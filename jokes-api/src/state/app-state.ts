import { ITodo } from "../domain/ITodo";

export class AppState{
    private todos: readonly ITodo[] = [];

    constructor(){
        this.todos = [];
    }
}