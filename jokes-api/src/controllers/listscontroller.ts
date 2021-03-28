import { IRandomCategory } from "../domain/IRandomCategory";
const padding = "20px";
const margin = "10px";
export class ListsController{
    private viewContainer: HTMLElement;
    constructor(private data: IRandomCategory[]){
    }
    run(){
        this.elementsDisign();
    }

    elementsDisign(){
        this.data.forEach(element => {
            this.viewContainer = (document.getElementById(element.id)) as HTMLElement;
            this.viewContainer.style.backgroundColor = element.color;
            this.viewContainer.style.padding = padding;
            this.viewContainer.style.margin = margin;
        });
    }
}