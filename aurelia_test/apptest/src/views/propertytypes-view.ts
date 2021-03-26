import { IPropertyType } from "../domain/IPropertyType";
import { PropertytypeService } from "../service/propertytype-service";

export class PropertytypesView{
    private data: IPropertyType[] = [];

    constructor(private propertytypeService: PropertytypeService){

    }

    async attached(){
        this.data = await this.propertytypeService.getAll();
    }
}