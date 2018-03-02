

var array = [
    col = [null, null, null],
    col = [null, null, null],
    col = [null, null, null]
]

function randomMole(mole){
    for(var i=0; i<array.length; i++){
        for(var j=0;j<array[i].length; j++){

        }
        var randomCol = Math.floor(Math.random()* array.length);
        var randomRow = Math.floor(Math.random()* array[i].length);
        array[randomCol][randomRow]='mole'
        $('.game_area').append('mole');        
    }
}



$(document).ready(initiateApp);

function initiateApp(){
    applyEventHandlers()
}

function applyEventHandlers(){
    $('.game-area').on('click', '.mole', moleClicked )
}

function moleClicked(){
    var moleClick = 1;

    updateStats(moleClick)
}

function updateStats(moleClick){
    updateClickCounter();
}

function updateClickCounter(){

}

