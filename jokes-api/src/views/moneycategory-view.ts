import { IDisposable } from "aurelia";
import { IRandomCategory } from "../domain/IRandomCategory";
import { RandomCategoryService } from "../service/randomcategory-service";
const category = "money";
export class MoneyCategoryView{
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