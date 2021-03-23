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
    public board: Array<number>;
    constructor(rowCount: number = 10, colCount: number = 1000) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.scoreBoard = []; // of GameScore
        this.board = [];

    }
}