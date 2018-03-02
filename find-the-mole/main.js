
$(document).ready(initiateApp);

function initiateApp(){
    applyEventHandlers()
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

