import {IDisposable  } from "aurelia";

export class MyApp {
 

  public subscriptions: IDisposable[] = [];

  constructor() {

    } 

  detached() {
    this.subscriptions.forEach(subscription=>subscription.dispose());
    this.subscriptions = [];
}

}
