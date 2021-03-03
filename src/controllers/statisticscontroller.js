export default class StatisticsController {

    constructor(model, viewContainer) {
        this.viewContainer = viewContainer;
        this.model = model;
        this.isRunning = false;
        this.score = 0;
    }

    async run(){
        this.isRunning = true;
        this.viewContainer.innerHTML = this.score;
    }

    async stop(){
        this.isRunning = false;
    }
    resizeUi(){
        if (this.isRunning){
            console.log(window.innerWidth, window.innerHeight);
            // redraw
        }
    }
}
