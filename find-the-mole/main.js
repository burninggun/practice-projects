

$(document).ready(initiateApp);

function initiateApp(){
    applyEventHandlers()
}

var array = [
    col = [null, null, null],
    col = [null, null, null],
    col = [null, null, null]
];

function randomMoleIndex(){
    var randomCol = Math.floor(Math.random() * array.length-1);
    var randomRow = Math.floor(Math.random() * array[randomCol].length)-1;
    return [randomCol, randomRow]
}

function moleCreation(){
    var moleCreated=false;

    var moleCoordinate= randomMoleIndex();
    while( array[moleCoordinate[0]][moleCoordinate[1]]!==null){
        moleCoordinate= randomMoleIndex();
    }
    array[moleCoordinate[0]][moleCoordinate[1]]='mole';
    $('.game_area').append('mole');
}




function applyEventHandlers(){
    $('.game-area').on('click', '.mole', moleClicked )
}

function moleClicked(){
    var clickCount = $('.clickCounter>span').text();
    clickCount = parseInt(clickCount);
    clickCount+=1;
    updateStats(clickCount)
}

function updateStats(clicks){
    updateClickCounter(clicks);
}

function updateClickCounter(clicks){
    $('.clickCounter>span').text(clicks)
}

