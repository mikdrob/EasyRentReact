import { bindable, IDisposable } from "aurelia";
import { IRandomCategory } from "../domain/IRandomCategory";
import { RandomCategoryService } from "../service/randomcategory-service";
import {ListsController} from "../controllers/listscontroller";
import { runInThisContext } from "node:vm";
const category = "history";

export class HistoryCategoryView{
    @bindable public title: string = "History";

    public list: ListsController;
    private data: IRandomCategory[] = [];
    public subscriptions: IDisposable[] = [];

    myFunction: (e: any) => void;

    constructor(private randomcategoryService: RandomCategoryService){

    }

    async attached(){
        this.data = await this.randomcategoryService.getNJokes(category);
        this.list = new ListsController(this.data);
        this.list.run();
    }
    detached() {
        this.subscriptions.forEach(subscription=>subscription.dispose());
        this.subscriptions = [];
       // this.elem.removeEventListener('click', this.myFunction);
    }

    logic(){

    }

}