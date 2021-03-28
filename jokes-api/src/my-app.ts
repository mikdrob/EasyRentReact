import {EventAggregator, IDisposable  } from "aurelia";
import { IAllCategories } from "./domain/IAllCategories";
import { IRandomCategory } from "./domain/IRandomCategory";
import { AppState } from "./state/app-state";

export class MyApp {
 

  public subscriptions: IDisposable[] = [];
  private data: Array<IAllCategories>;
  constructor(private eventAggregator: EventAggregator,
    private appState: AppState) {

    } 
  async attached() {
    this.data = await this.appState.getAll();
  }  

  detached() {
    this.subscriptions.forEach(subscription=>subscription.dispose());
    this.subscriptions = [];
}

}
