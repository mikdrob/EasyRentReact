import {EventAggregator, IDisposable  } from "aurelia";
import { AppState } from "../state/app-state";

export class TodoView {


  public subscriptions: IDisposable[] = [];

    // experiment with access specifiers

  constructor(private eventAggregator: EventAggregator,
    private appState: AppState) {

    this.subscriptions.push(
      this.eventAggregator.subscribe('new-todo', (desc:string)=>this.addNewTodo(desc))
    );

  }

  addNewTodo = (descr: string): void => {
    this.appState.addTodo({description:descr.trim(), done:false});
  }

  removeTodo = (index: number):void=>{
    this.appState.removeTodo(index);

  }

  detached() {
    this.subscriptions.forEach(subscription=>subscription.dispose());
    this.subscriptions = [];
}

}
