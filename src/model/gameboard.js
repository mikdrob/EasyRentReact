

export const birdPosition = 2;
export const birdColor = 'rgb(0, 0, 0)';
export const emptySpaceColor = 'rgb(255, 255, 255)';
export const emptySpaceColorCode = '#FFFFFF';
export const birdColorCode = '#000000';


export default class GameBoard{
    static birdPosition() { return birdPosition; }
    static birdColor() { return birdColor; }
    static emptySpaceColor() { return emptySpaceColor; }
    static emptySpaceColorCode() { return emptySpaceColorCode; }
    static birdColorCode() { return birdColorCode; }
    static currentPosition(move = false){
        let xVertical = 0;
        let content = document.getElementById("gameboard");
        

        for(var i = 0; i < content.childNodes.length; i++){
            let x = content.childNodes[i];
            if (!move)
                xVertical = x.childNodes[birdPosition-1];
            else xVertical = x.childNodes[birdPosition];
            if (xVertical.style.backgroundColor == birdColor){

                return i;
            }
         }
         return 1;
    }
}