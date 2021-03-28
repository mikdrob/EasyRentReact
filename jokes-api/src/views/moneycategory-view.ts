import { bindable, EventAggregator, IDisposable } from "aurelia";
import { IRandomCategory } from "../domain/IRandomCategory";
import { RandomCategoryService } from "../service/randomcategory-service";
import { AppState } from "../state/app-state";
const category = "money";
export class MoneyCategoryView{
    @bindable public title: string = "Money";
    private data: IRandomCategory[] = [];
    public subscriptions: IDisposable[] = [];
    public seenJokes: IRandomCategory[] = [];
    public appState: AppState;
    constructor(private randomcategoryService: RandomCategoryService, private appstate: AppState){
    }
    async attached(){
        this.data = await this.randomcategoryService.getNJokes(category);
    }
    detached() {
        this.subscriptions.forEach(subscription=>subscription.dispose());
        this.subscriptions = [];
    }

}