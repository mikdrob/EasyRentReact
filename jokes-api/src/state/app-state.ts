import { ITodo } from "../domain/ITodo";

export class AppState{
    private todos: readonly ITodo[] = [];

    constructor(){
        this.todos = [];
    }

    addTodo(todo: ITodo): void{
        //2 diff approaches
        this.todos = [...this.todos, todo];
        //this.todos.push(todo);
    }

    removeTodo(elementIndex:number): void{
        this.todos = this.todos.filter((elem, index)=>index!==elementIndex);
    }

    countToDos(): number{
        return this.todos.length;
    }
}