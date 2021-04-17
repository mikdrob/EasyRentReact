import { HttpClient } from "aurelia";
import { IFetchResponse } from "../types/IFetchResponse";
import { IQueryParams } from "../types/IQueryParams";

export class BaseService<TEntity>{
    constructor(protected endPointUrl: string, protected httpClient: HttpClient){
        
    }

    async getAll(queryParams?: IQueryParams, ): Promise<IFetchResponse<TEntity[]>>{
        let url = this.endPointUrl;
        if (queryParams!==undefined){
            //todo
        }

        try{
            const responce = await this.httpClient.fetch(url, {cache: "no-store"});
            if(responce.ok){
                const data = (await responce.json()) as TEntity[];
                return {
                    statusCode: responce.status,
                    data: data
                };
            }
            return {
                statusCode: responce.status,
                errorMessage: responce.statusText
            };
        } catch (reason){
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }

    }

    
}