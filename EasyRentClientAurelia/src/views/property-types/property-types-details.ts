import { HttpClient, IRouteViewModel } from "aurelia";
import { IPropertyType } from "../../domain/IPropertyType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class PropertyTypesDetails implements IRouteViewModel{

    private service: BaseService<IPropertyType> = 
        new BaseService<IPropertyType>("https://localhost:5001/api/v1/propertytypes", this.httpClient, this.state.token);

    private data: IPropertyType;

    constructor(protected httpClient: HttpClient, private state: AppState){

    }

    async load(parameters) {
        let response = await this.service.get(parameters[0]);
        if(response.data){
            this.data = response.data;
        }
    }
}