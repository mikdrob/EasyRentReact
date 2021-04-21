import { HttpClient } from "aurelia";
import { IFetchResponse } from "../types/IFetchResponse";
import { IJwtResponse } from "../types/IJwtResponse";
import { IMessage } from "../types/IMessage";
import { IQueryParams } from "../types/IQueryParams";

export class AccountService{
    constructor(protected endPointUrl: string, protected httpClient: HttpClient){
        
    }

    async login(email: string, password: string): Promise<IFetchResponse<IJwtResponse | IMessage>>{
        let url = this.endPointUrl;
        

        try{
            let body = {email, password};
            const responce = await this.httpClient.post(url, JSON.stringify(body),{cache: "no-store"});
            if(responce.ok){
                const data = (await responce.json()) as IJwtResponse;
                return {
                    statusCode: responce.status,
                    data: data
                };
            }
            const data = (await responce.json()) as IMessage;
            return {
                statusCode: responce.status,
                errorMessage: responce.statusText + ' ' + data.messages.join(' ')
            };
        } catch (reason){
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(reason)
            };
        }



    }}