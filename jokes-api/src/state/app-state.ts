import { emptyObject, HttpClient, inject } from "aurelia";
import { IAllCategories } from "../domain/IAllCategories";
import { IRandomCategory } from "../domain/IRandomCategory";

@inject()
export class AppState{
    private toParse: Array<Array<string>>;
    private data: Array<IAllCategories>;
    constructor(private httpClient: HttpClient){

       
    }

    async getAll(): Promise<Array<IAllCategories>>{
        this.data = [];
        let request: string = 'https://api.chucknorris.io/jokes/search?query=all'
        const responce = await this.httpClient.get(request, {cache: "no-store"});
        if(responce.ok){
            this.toParse = (await responce.json());
            this.toParse["result"].forEach(element => {
                this.data.push(element);
                //console.log(element["value"]);
            });
            return this.data;
        }
        else return emptyObject;
    }
}