import { HttpClient, inject } from "aurelia";
import { data } from "jquery";
import { IPropertyType } from "../domain/IPropertyType";

@inject()
export class PropertytypeService{
    constructor(private httpClient: HttpClient){

    }

    async getAll(): Promise<IPropertyType[]>{
        const responce = await this.httpClient.get("https://localhost:5001/api/PropertyTypes", {cache: "no-store"});
        if(responce.ok){
            const data = (await responce.json()) as IPropertyType[];
            return data;
        }
        return [];
    }

    
}