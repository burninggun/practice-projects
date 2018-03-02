
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

