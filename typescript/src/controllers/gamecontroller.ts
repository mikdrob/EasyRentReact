import { GameBoard } from "../model/gameboard";
import {GameBrain} from "../model/game-brain"

export class GameController {
    public viewContainer: Element;
    public model: Object;
    public isRunning: Boolean;
    public score: Number;
    constructor(model: GameBrain, viewContainer: Element) {
        this.viewContainer = viewContainer;
        this.model = model;
        this.isRunning = false;
        this.score = 0;
    }


    run() {
        

        this.isRunning = true;
        // draw the initial game board, start the game
        this.viewContainer.innerHTML = '';
        this.viewContainer.append(this.getBoardHtml(this.model));
        document.addEventListener('keydown', this.handleKey);
        this.createScoreElement();
        let x = this.animate();
        return x;
    }

    stop() {
        let lastScore = document.getElementById('score');
        let name = document.getElementById('username');
        if (lastScore != null)
            lastScore.remove();
        if (name != null)
            name.remove();
        this.isRunning = false;
    }


    resizeUi() {
        if (this.isRunning) {
            // redraw
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtml(this.model));
        }
    }

    getBoardHtml(gameBrain: Object) {
        let content = document.createElement('div');
        content.id = "gameboard";
        let rowHeight = window.innerHeight / (this.model.rowCount + 1);
        let colWidth = window.innerWidth / gameBrain.gameNumberOfCellsOnScreen();
        gameBrain.getGameBoard().forEach(rowData => {
            let rowElem = document.createElement('div');
            rowElem.style.minHeight = rowHeight + 'px';
            rowElem.style.maxHeight = rowHeight + 'px';
            rowData.forEach(colData => {
                let colElem = document.createElement('div');
                if (colData === gameBrain.gameCellObstacle()) {
                    colElem.style.backgroundColor = this.getRandomColor();
                }
                else if (colData === gameBrain.gameCellBird())
                    colElem.style.backgroundColor = '#000000';
                else {
                    colElem.style.backgroundColor = '#FFFFFF';
                }

                colElem.style.minWidth = colWidth + 'px';
                colElem.style.display = 'inline-block';
                colElem.style.minHeight = rowHeight + 'px';
                rowElem.append(colElem);

            });
            rowElem.style.minWidth = window.innerWidth / gameBrain.gameNumberOfCellsOnScreen() * this.model.colCount + 'px';
            //rowElem.style.minWidth = 15000 + 'px';
            content.append(rowElem);
        });

        return content;
    }

    createScoreElement(){
        let result = document.getElementById('control');
        let data = document.createElement('div');
        data.id = 'data';
        let score = document.createElement('label');
        score.id = 'score';
        let node = document.createTextNode('0');
        score.append(node);
        data.append(score);
        result.append(data);
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        if (color == '#000000')
            color == '#000001'
        return color;
    }

    animate(rowIndex = 0) {
        let content = document.getElementById("gameboard");
        let horizontalPosition = this.model.gameBirdPositionHorizontal();
        let hit = false;
        //this.score = 1;
        setTimeout(() => {

            for (var i = 0; i < content.childNodes.length; i++) {
                let x = content.childNodes[i];
                x.removeChild(x.childNodes[0]);
            }
            let bird = content.childNodes[GameBoard.currentPosition()];
            let birdChild = bird.childNodes[horizontalPosition];
            let birdChildPrev = bird.childNodes[horizontalPosition - 1];
            if (birdChild.style.backgroundColor != GameBoard.emptySpaceColor()) {
                hit = true;
            }
            else {
                birdChild.style.backgroundColor = GameBoard.birdColorCode();
                birdChildPrev.style.backgroundColor = GameBoard.emptySpaceColorCode();
                let score = document.getElementById('score');
                score.innerHTML = rowIndex-1;
                rowIndex++;
                
            }
            if (rowIndex < this.model.colCount && !hit) {
                this.animate(rowIndex);
            }
            else {
                this.userData(rowIndex);
            }
        }, 50);
    }

    userData(score) {
        let user = prompt("Game Over! Your score is - " + score + "\nPlease enter your name");
        let result = document.getElementById('data');
        let username = document.createElement('label');
        username.id = 'username';
        let name = document.createTextNode(user);
        username.style.visibility = "hidden";
        username.append(name);
        result.append(username);
    }



    handleKey(e) {
        if (e.type !== 'keydown') return;
        switch (e.key) {
            case 'ArrowUp':
                UpOrDown(-1);
                break;
            case 'ArrowDown':
                UpOrDown(1);
                break;
        }
        function UpOrDown(value) {

            let content = document.getElementById("gameboard");
            let currentPositionLocal = GameBoard.currentPosition(true);

            let bird = content.childNodes[currentPositionLocal + value];
            let birdChild = bird.childNodes[2];
            let birdPrev = content.childNodes[currentPositionLocal];
            let birdPrevChild = birdPrev.childNodes[2];
            if (birdChild.style.backgroundColor == GameBoard.emptySpaceColor()) {
                birdChild.style.backgroundColor = GameBoard.birdColorCode();
                birdPrevChild.style.backgroundColor = GameBoard.emptySpaceColorCode();
            }
        }
    }

}
