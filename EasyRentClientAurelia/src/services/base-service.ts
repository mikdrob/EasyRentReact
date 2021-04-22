import { HttpClient } from "aurelia";
import { IFetchResponse } from "../types/IFetchResponse";
import { IQueryParams } from "../types/IQueryParams";

export class BaseService<TEntity>{
    constructor(protected endPointUrl: string, protected httpClient: HttpClient, private jwt?: string){
        
    }
    private authHeaders = this.jwt!==undefined ? {
        'Authorization': 'Bearer ' + this.jwt
    }: {};

    async getAll(queryParams?: IQueryParams): Promise<IFetchResponse<TEntity[]>>{
        let url = this.endPointUrl;
        if (queryParams!==undefined){
            //todo
        }

        try{

            const response = await this.httpClient.fetch(
                url,
                {
                    cache: "no-store",
                    headers: this.authHeaders
                });

            if(response.ok){
                const data = (await response.json()) as TEntity[];
                return {
                    statusCode: response.status,
                    data: data
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (reason){
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }



    }


    async get(id: string, queryParams?: IQueryParams): Promise<IFetchResponse<TEntity>>{
        let url = this.endPointUrl;

        url = url + '/' + id;

        if (queryParams!==undefined){
            //todo
        }

        try{
            const response = await this.httpClient.fetch(url, {cache: "no-store", headers: this.authHeaders});
            if(response.ok){
                const data = (await response.json()) as TEntity;
                return {
                    statusCode: response.status,
                    data: data
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (reason){
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }

        

    }

    async put(id: string, queryParams?: IQueryParams): Promise<IFetchResponse<Response>>{
        let url = this.endPointUrl;

        url = url + '/' + id;

    

        try{
            let body = queryParams;
            const response = await this.httpClient.put(url, JSON.stringify(body),{cache: "no-store", headers: this.authHeaders});
            if(response.ok){
                return {
                    statusCode: response.status,
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (reason){
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }

        

    }

    async post(queryParams?: IQueryParams): Promise<IFetchResponse<Response>>{
        let url = this.endPointUrl;
        

        try{
            let body = queryParams;
            const response = await this.httpClient.post(url, JSON.stringify(body),{cache: "no-store", headers: this.authHeaders});
            if(response.ok){
                return {
                    statusCode: response.status,
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (reason){
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }

        

    }

    async remove(id: string, queryParams?: IQueryParams): Promise<IFetchResponse<Response>>{
        let url = this.endPointUrl;
        url = url + '/' + id;

        try{
            let body = queryParams;
            const response = await this.httpClient.delete(url, JSON.stringify(body),{cache: "no-store", headers: this.authHeaders});
            if(response.ok){
                return {
                    statusCode: response.status,
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (reason){
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }

        

    }
    
  
    
}