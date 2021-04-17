import { HttpClient } from "aurelia";
import { IPropertyType } from "../../domain/IPropertyType";
import { BaseService } from "../../services/base-service";

export class PropertyTypesIndex{
    
    private service: BaseService<IPropertyType> = 
        new BaseService<IPropertyType>("https://localhost:5001/api/v1/propertytypes", this.httpClient);

    private data: IPropertyType[] = [];

    constructor(protected httpClient: HttpClient){

    }

    async attached() {
        let response = await this.service.getAll();
        if(response.data){
            this.data = response.data;
        }
    }
}