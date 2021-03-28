import { emptyObject, HttpClient, inject } from "aurelia";
import { IRandomCategory } from "../domain/IRandomCategory";




const imagesList: string[] = [
    "https://i.ytimg.com/vi/SKHS25q4tBw/hqdefault.jpg",
    "https://i.ytimg.com/vi/wDlU-fEe-lU/hqdefault.jpg",
    "https://images.squarespace-cdn.com/content/54f12311e4b0b6eeae92085f/1428276169329-AS7VYK7QTJMS374JPI1R/image-asset.jpeg?format=1500w&content-type=image%2Fjpeg",
    "https://franticplanet.files.wordpress.com/2019/05/11.jpg",
    "https://chucknorris.jamesonb.com/static/media/chuck_norris.3b874fd2.jpg"
];

@inject()
export class RandomCategoryService{
    private data: IRandomCategory[] = [];
    constructor(private httpClient: HttpClient){

    }

    async getNJokes(category:string, numberOfJokes: number = 5): Promise<IRandomCategory[]>{
        this.data = [];
        let request: string = 'https://api.chucknorris.io/jokes/random?category=' + category;
        for (let index = 0; index < numberOfJokes; index++) {
            const responce = await this.httpClient.get(request, {cache: "no-store"});
        if(responce.ok){
            this.data.push((await responce.json()) as IRandomCategory);
            this.data[index].id = "element" + index.toString();
            this.data[index].color = this.generateLightColorHex();
            this.data[index].image = imagesList[index%5];
        }
        else return emptyObject;
        }
        return this.data;
    }

    generateLightColorHex() {
        let color = "#";
        for (let i = 0; i < 3; i++)
          color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
        return color;
      }

    

    
}