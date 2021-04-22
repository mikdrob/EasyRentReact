import { HttpClient, IRouter, IRouteViewModel, Router } from "aurelia";
import { IPropertyType } from "../../domain/IPropertyType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class PropertyTypesEdit implements IRouteViewModel{
    private service: BaseService<IPropertyType> = 
        new BaseService<IPropertyType>("https://localhost:5001/api/v1/propertytypes", this.httpClient, this.state.token);

    private data: IPropertyType;

    constructor(@IRouter private router: Router, private state: AppState, protected httpClient: HttpClient){

    }

    async load(parameters) {
        let response = await this.service.get(parameters[0]);
        if(response.data){
            this.data = response.data;
        }
    }

    async editClicked(event: Event){
        let queryParams = {
            id: this.data.id,
            propertyTypeValue: this.data.propertyTypeValue
        };
        event.preventDefault();
        let response = await this.service.put(this.data.id, queryParams);
        if(response.statusCode == 204){
            await this.router.load('/property-types-index');
        }
    }

}