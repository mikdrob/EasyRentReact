import { bindable, EventAggregator, IDisposable } from "aurelia";

export class TodoInput{
    @bindable public placeholder: string = "Default";
    public description: string = '';

    public subscriptions: IDisposable[] = [];
    // experiment with access specifiers
    constructor(private eventAggregator: EventAggregator){
    }


    detached() {
        this.subscriptions.forEach(subscription=>subscription.dispose());
        this.subscriptions = [];
    }

    

    addNewTodo(){

        this.eventAggregator.publish('new-todo', this.description);
        setTimeout(() => {
            this.description = '';
          }, 100);
    }
}