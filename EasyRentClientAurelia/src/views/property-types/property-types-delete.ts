import { HttpClient, IRouter, IRouteViewModel, Router } from "aurelia";
import { IPropertyType } from "../../domain/IPropertyType";
import { BaseService } from "../../services/base-service";
import { AppState } from "../../state/app-state";

export class PropertyTypesDelete implements IRouteViewModel{
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

    async deleteClicked(event: Event){
        let queryParams = {
            id: this.data.id
        };
        event.preventDefault();
        let response = await this.service.remove(this.data.id, queryParams);
        if(response.statusCode == 204){
            await this.router.load('/property-types-index');
        }
    }
}