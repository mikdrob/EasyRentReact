// console.log('CAR-DRIVE');

// function animate(rowIndex) {
//     setTimeout(() => {
//         let child = content.lastElementChild;
//         if (child !== null) {
//             let pathPosition = 7;


//             if (content.firstElementChild !== null) {
//                 pathPosition = Number(content.firstElementChild.dataset.pathPosition);
//                 let pathChange = Math.random() * (PATH_WIDTH - 2);
//                 pathChange = Math.ceil(Math.random() * 2 - 1.5) * pathChange;
//                 if (pathPosition + pathChange > 0 && pathPosition + pathChange < COL_COUNT - PATH_WIDTH)
//                     pathPosition = pathPosition + pathChange;
//             }

//             let rowElem = createRow(rowHeight, rowIndex, pathPosition, PATH_WIDTH);



//             child.remove();
//             content.prepend(rowElem);
//             rowIndex++;
//             if (rowIndex < 500) animate(rowIndex);
//         }
//     }, 50);
// }

// function createRow(rowHeight, rowId, pathPosition, pathWidth) {
//     let rowElem = document.createElement('div');
//     rowElem.classList.add('row-' + rowId);

//     rowElem.style.minHeight = rowHeight + 'px';
//     rowElem.style.maxHeight = rowHeight + 'px';

//     rowElem.dataset.pathPosition = pathPosition;

//     for (let colIndex = 0; colIndex < COL_COUNT; colIndex++) {
//         let colElem = document.createElement('div');
    

//         colElem.classList.add('id-row-' + rowId + '-col-' + colIndex);
//         colElem.classList.add('id-col-' + rowId + '-col-' + colIndex);

    


//         if (colIndex < pathPosition) {
//             colElem.style.backgroundColor = '#FF0000';
//         } else if (colIndex >= pathPosition + pathWidth) {
//             colElem.style.backgroundColor = '#0000FF';
//         } else {
//             colElem.style.backgroundColor = '#FFFFFF';
//         }

//         colElem.style.minWidth = colWidth + 'px';
//         colElem.style.display = 'inline-block';
//         colElem.style.minHeight = rowHeight + 'px';
//         rowElem.append(colElem);
//     }

//     return rowElem;
// }

// const ROW_COUNT = 40;
// const COL_COUNT = 21;

// const PATH_WIDTH = 5; // in matrix squares


// let viewPortHeight = window.innerHeight;
// let rowHeight = viewPortHeight / ROW_COUNT;

// let viewPortWidth = window.innerWidth;
// let colWidth = viewPortWidth / COL_COUNT;

// let content = document.createElement('div');

// for (let index = 0; index < ROW_COUNT; index++) {
//     let pathPosition = 7;


//     if (content.firstElementChild !== null) {
//         pathPosition = Number(content.firstElementChild.dataset.pathPosition);
//         let pathChange = Math.random() * (PATH_WIDTH - 2);
//         pathChange = Math.ceil(Math.random() * 2 - 1.5) * pathChange;
//         pathPosition = pathPosition + pathChange;
//     }

//     let rowElem = createRow(rowHeight, index, pathPosition, PATH_WIDTH);
//     content.append(rowElem);
// }


// document.body.append(content);

// let carElem = content.lastElementChild.querySelector('.id-col-' + Math.round(COL_COUNT/2));
// carElem.style.backgroundColor = "#000";
// console.log(carElem);

// document.addEventListener('keyup', (e)=> console.log('keypressed', e));


// // let rowIndex = 100;
// // animate(rowIndex);

import {mainView} from './views/mainview.js';

let view = mainView;

document.body.append(view);

//displayInitialUI();