import { IDisposable } from "aurelia";
import { IPropertyType } from "../domain/IPropertyType";
import { PropertytypeService } from "../service/propertytype-service";
const numberOfJokes: number = 3;
export class PropertytypesView{
    private data: IPropertyType[] = [];
    private res: IPropertyType[] = [];

    public subscriptions: IDisposable[] = [];

    constructor(private propertytypeService: PropertytypeService){
        
    }

    async attached(){
        for (let index = 0; index < numberOfJokes; index++) {
            this.res.push(await this.propertytypeService.getAll("political"));
        }
        this.data = this.res;
    }
    detached() {
        this.subscriptions.forEach(subscription=>subscription.dispose());
        this.subscriptions = [];
    }

}