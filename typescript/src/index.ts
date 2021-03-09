import mainView from './views/mainview.js';
//import controlView from './views/controlview.js';
import gameView from './views/gameview.js';

import GameBrain from './model/gamebrain.js';
import GameController from './controllers/gamecontroller.js';
import StatisticsController from './controllers/statisticscontroller.js';


let brain = new GameBrain();
let game_view = gameView();
