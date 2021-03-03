import { gameNumberOfCellsOnScreen } from "../model/gamebrain";
import GameBoard from "../model/gameboard";

export default class GameController {
    constructor(model, viewContainer) {
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
        return this.animate();
    }

        stop(){setTimeout(() => {
        this.isRunning = false;
        }, 50);
    }


    resizeUi(){
        if (this.isRunning){
            // redraw
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtml(this.model));
        }
    }

    getBoardHtml(gameBrain) {
        let content = document.createElement('div');
        content.id = "gameboard";
        let rowHeight = window.innerHeight/(this.model.rowCount+1);
        let colWidth = window.innerWidth/gameBrain.gameNumberOfCellsOnScreen();
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
                else
                {
                    colElem.style.backgroundColor = '#FFFFFF';
                }

                colElem.style.minWidth = colWidth + 'px';
                colElem.style.display = 'inline-block';
                colElem.style.minHeight = rowHeight + 'px';
                rowElem.append(colElem);

            });
            rowElem.style.minWidth = window.innerWidth/gameBrain.gameNumberOfCellsOnScreen()*this.model.colCount + 'px';
            //rowElem.style.minWidth = 15000 + 'px';
            content.append(rowElem);
        });
        
        return content;
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
        let score = 0;
        let content = document.getElementById("gameboard");
        let horizontalPosition = this.model.gameBirdPositionHorizontal();
        setTimeout(() => {             

                for(var i = 0; i < content.childNodes.length; i++){
                    let x = content.childNodes[i];
                    x.removeChild(x.childNodes[0]);
                 }
                 let bird = content.childNodes[GameBoard.currentPosition()];
                 let birdChild = bird.childNodes[horizontalPosition];
                 let birdChildPrev = bird.childNodes[horizontalPosition-1];
                 if (birdChild.style.backgroundColor != GameBoard.emptySpaceColor()){
                     return this.score;
                 }
                 birdChild.style.backgroundColor = GameBoard.birdColorCode();
                 birdChildPrev.style.backgroundColor = GameBoard.emptySpaceColorCode();
                 
                rowIndex++;
                
                if (rowIndex > this.score){
                    this.score = rowIndex;
                }
                if (rowIndex < this.model.colCount) this.animate(rowIndex);
        }, 50);
        return this.score;
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
        function UpOrDown(value){
            
            let content = document.getElementById("gameboard");
            let currentPositionLocal = GameBoard.currentPosition(true);

            let bird = content.childNodes[currentPositionLocal+value];
            let birdChild = bird.childNodes[2];
            let birdPrev = content.childNodes[currentPositionLocal];
            let birdPrevChild = birdPrev.childNodes[2];
            if (birdChild.style.backgroundColor == GameBoard.emptySpaceColor()){
                birdChild.style.backgroundColor = GameBoard.birdColorCode();
                birdPrevChild.style.backgroundColor = GameBoard.emptySpaceColorCode();
            }
        }
    }

}
