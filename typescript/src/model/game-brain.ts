export const gameCellEmpty = 0;
export const gameCellObstacle = 1;
export const gameCellBird = -1;
export const gameNumberOfCellsOnScreen = 20;
export const gameBirdPositionVertical = 5;
export const gameBirdPositionHorizontal = 2;


export class GameBrain {

    public rowCount: number;
    public colCount: number;
    public scoreBoard: Array<number>;
    public board: Array<Array<number>>;
    constructor(rowCount: number = 10, colCount: number = 1000) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.scoreBoard = []; // of GameScore
        this.board = [];
        this.intializeBoard();

    }
    createGameRow(rowNumber: number, notchLower: Array<number>, notchUpper: Array<number>) {
        let res = [];
        for (let index = 0; index < this.colCount; index++) {

            if (index > 15 && index%10 == 1 && (rowNumber < notchLower[index] || rowNumber > notchUpper[index]))
                res.push(gameCellObstacle);
            else if (index == gameBirdPositionHorizontal && rowNumber == gameBirdPositionVertical)
                res.push(gameCellBird);
            else res.push(gameCellEmpty);
               
            
            /*
            if (index < pathPosition) {
                res.push(gameCellLeft);
            } else if (index >= pathPosition + pathWidth) {
                res.push(gameCellRight);
            } else {
                res.push(gameCellPath);
            }
            */
        }


        return res;
    }


    intializeBoard() {
        let notchLower = []
        let notchUpper = []
        let space = 0;
        for (let index = 0; index < this.colCount; index++) {
            space = Math.floor(Math.random() * (7-1)+1);
            notchLower.push(space);
            notchUpper.push(space + Math.floor(Math.random() * (3-1)+1));
        }
        for (let index = 0; index < this.rowCount; index++) {
            this.board.push(this.createGameRow(index, notchLower, notchUpper));
        }
    }

    getGameBoard() {
        return this.board;
    }

    gameCellEmpty() { return gameCellEmpty; }
    gameCellObstacle() { return gameCellObstacle; }
    gameNumberOfCellsOnScreen() { return gameNumberOfCellsOnScreen; }
    gameCellBird() { return gameCellBird; }
    gameBirdPositionVertical() { return gameBirdPositionVertical; }
    gameBirdPositionHorizontal() { return gameBirdPositionHorizontal; }



    
}

