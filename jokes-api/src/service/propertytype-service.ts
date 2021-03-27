import { emptyObject, HttpClient, inject } from "aurelia";
import { IPropertyType } from "../domain/IPropertyType";

@inject()
export class PropertytypeService{
    constructor(private httpClient: HttpClient){

    }

    async getAll(category:string): Promise<IPropertyType>{

        const responce = await this.httpClient.get('https://api.chucknorris.io/jokes/random?category='+category, {cache: "no-store"});
        if(responce.ok){
            const data = (await responce.json()) as IPropertyType;
            return data;
        }
        return emptyObject;
    }


    
}