export default function controlView(){
   
    let control = document.createElement('div');
    content.append(control);
    let statisticsButton = document.createElement('button');
    statisticsButton.id = 'statistics';
    statisticsButton.innerText = 'Statistics';

    let gameButton = document.createElement('button');
    
    gameButton.id = 'game';
    gameButton.innerText = 'gameButton';


    control.append(statisticsButton);
    control.append(gameButton);
    return control;
}