import { emptyObject, HttpClient, inject } from "aurelia";
import { IRandomCategory } from "../domain/IRandomCategory";

@inject()
export class RandomCategoryService{
    constructor(private httpClient: HttpClient){

    }

    async getNJokes(category:string, numberOfJokes: number = 5): Promise<IRandomCategory[]>{
        let request: string = 'https://api.chucknorris.io/jokes/random?category=' + category;
        let data: IRandomCategory[] = [];
        for (let index = 0; index < numberOfJokes; index++) {
            const responce = await this.httpClient.get(request, {cache: "no-store"});
        if(responce.ok){
            data.push((await responce.json()) as IRandomCategory);
        }
        else return emptyObject;
        }
        return data;
    }


    
}