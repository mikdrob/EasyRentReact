import { bindable, IDisposable } from "aurelia";
import { IRandomCategory } from "../domain/IRandomCategory";
import { RandomCategoryService } from "../service/randomcategory-service";
const category = "political";
export class PoliticalCategoryView{
    @bindable public title: string = "Political";
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