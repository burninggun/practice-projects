
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


function initiateApp(){
    applyEventHandlers()
    // $(".moleBox").click(function(){
    //     $(".diglettPic").toggleClass('up');
    //   })
}

function applyEventHandlers(){
    $('.diglettPic').click(moleClicked)
}

function moleClicked(){
    console.log(this);
    $(".game-area").css('pointer-events', 'none');
    setTimeout((function(){
        $(this).removeClass('up');
    }).bind(this), 250);
    var clickCount = $('.clickCounter>span').text();
    clickCount = parseInt(clickCount);
    clickCount+=1;
    updateStats(clickCount)
    setTimeout(function(){
        $(".game-area").css('pointer-events', 'auto')
    }, 300),
    stopPopUp();
}

function updateStats(clicks){
    updateClickCounter(clicks);
}

function updateClickCounter(clicks){
    $('.clickCounter>span').text(clicks)
}

function stopPopUp(){
    $('.mole').removeClass('.diglett.up');    
}

