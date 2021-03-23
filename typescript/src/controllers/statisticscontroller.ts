interface GameBrain{
    rowCount: number;
    colCount: number;
    scoreBoard: Array<number>;
    board: Array<Array<number>>;
    intializeBoard(): void;

}

export class StatisticsController {
    public viewContainer: Element;
    public model: GameBrain;
    public isRunning: Boolean;
    public scores: Array<string>;
    public usernames: Array<string>;
    constructor(model: GameBrain, viewContainer: Element) {
        this.viewContainer = viewContainer;
        this.model = model;
        this.isRunning = false;
        this.scores = [];
        this.usernames = [];
        this.initializeScores();
    }

    run() {

        this.isRunning = true;
        this.viewContainer.innerHTML = "";
        this.scoreBoard();

    }
    scoreBoard() {
        let score = document.getElementById('score');
        let name = document.getElementById('username');
        if (score != null) {
            this.scores.push(score.innerHTML);
            score.remove();
        }
        if (name != null) {
            this.usernames.push(name.innerHTML);
            name.remove();
        }
        let data = document.getElementById('data');
        if (data != null)
            data.remove();

        let table = document.getElementById('scoreboard');
        if (table != null)
            table.remove();


        let tbl = document.createElement('table');
        tbl.id = 'scoreboard';
        tbl.style.minWidth = '200px';
        tbl.style.height = this.scores.length*20 + 'px';
        tbl.setAttribute('border', '1');
        let tbdy = document.createElement('tbody');
        for (let i = 0; i < this.scores.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 2; j++) {
                    let td = document.createElement('td');
                    if (j == 0)
                        if (this.usernames[i] == "" || this.usernames[i] == "null")
                            td.innerText = "Anonymous"
                        else
                            td.innerText = this.usernames[i];
                    else td.innerText = this.scores[i];
                    tr.appendChild(td)
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        let main = document.getElementById('main') as HTMLElement;
        main.appendChild(tbl);
    

    }

    stop() {
        this.isRunning = false;
        let data = document.getElementById('data');
        if (data != null)
            data.remove();
        let table = document.getElementById('scoreboard');
        if (table != null)
            table.remove();
    }
    resizeUi() {
        if (this.isRunning) {
            console.log(window.innerWidth, window.innerHeight);
            // redraw
        }
    }
    initializeScores() {
        this.scores = [];
        this.usernames = [];
    }
}
