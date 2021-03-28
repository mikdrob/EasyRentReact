import { IDisposable } from "aurelia";
import { IRandomCategory } from "../domain/IRandomCategory";
import { RandomCategoryService } from "../service/randomcategory-service";
const category = "history";
export class HistoryCategoryView{
    private data: IRandomCategory[] = [];
    public subscriptions: IDisposable[] = [];

    constructor(private randomcategoryService: RandomCategoryService){
        
    }

    async attached(){
        this.data = await this.randomcategoryService.getNJokes(category);
    }
    detached() {
        this.subscriptions.forEach(subscription=>subscription.dispose());
        this.subscriptions = [];
    }

}