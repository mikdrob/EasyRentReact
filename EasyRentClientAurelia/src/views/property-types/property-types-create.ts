import { HttpClient, IRouter, IRouteViewModel, Router } from "aurelia";
import { IPropertyType } from "../../domain/IPropertyType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class PropertyTypesCreate implements IRouteViewModel{
    private service: BaseService<IPropertyType> = 
        new BaseService<IPropertyType>("https://localhost:5001/api/v1/propertytypes", this.httpClient, this.state.token);

    private data: IPropertyType;

    constructor(@IRouter private router: Router, private state: AppState, protected httpClient: HttpClient){

    }


    async createClicked(event: Event){
        
        let queryParams = {
            propertyTypeValue: this.data.propertyTypeValue
        };
        event.preventDefault();
        let response = await this.service.post(queryParams);
        if(response.statusCode == 201){
            await this.router.load('/property-types-index');
        }
    }
}