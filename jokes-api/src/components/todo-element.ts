import { bindable, EventAggregator, IDisposable  } from "aurelia";
import { ITodo } from "../domain/ITodo";

export class TodoElement{
    public subscriptions: IDisposable[] = [];

    @bindable public item: ITodo;

    @bindable public removeCallback:(index:number)=>void = null;

    @bindable todoNo:number;
    removeTodo(index: number){
        this.removeCallback(index);
    }
    detached() {
        this.subscriptions.forEach(subscription=>subscription.dispose());
        this.subscriptions = [];
    }
}