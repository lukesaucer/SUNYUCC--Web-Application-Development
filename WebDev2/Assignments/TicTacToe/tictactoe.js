/* global $ */
/* global location */

var Cell = function(e) {
	this.element = e;
};

var markerX = "X";
var markerO = "O";
var marker = markerX;
var marker2 = markerO;
var plays = 0;
var check = 0;

var changeTurn = function() {
	plays ++;
	if(marker === markerX) {
            marker = markerO;
	}
    else marker = markerX;
};

Cell.prototype.takeTurn = function() {
    if (marker === markerX){
        this.element.addClass(marker);
	this.element.text(marker);
	if (checkForWin()) return;
	changeTurn();
    autoTurn();      // O Moves Automatically
    checkForWin();
    changeTurn();
    }
};

var autoTurn = function() {

var o = Math.floor((Math.random() * 7) + 1);
 // if random square already has an X or O pick another one
    while ($('#' + o).text() === markerX || $('#' + o).text() === markerO){
        o = Math.floor((Math.random() * 7) + 1);
    }
// Set the cell to "O"
$('#' + o).text(marker);

    // put in O's turn here
};

var checkForWin = function() {

    if (won()) {
        alert(marker + " wins");
        resetGame();
        return true;
    }
    else {

        if (draw()) {
            alert("draw");
            resetGame();
        }

    }
    return false;
};

var won = function() {

    var wins = [
	[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]
    ];

    for (var i = 0; i < wins.length; i++){

        if( $('#' + wins[i][0]).text() === marker &&
            $('#' + wins[i][1]).text() === marker &&
            $('#' + wins[i][2]).text() === marker )
        {
            return true;
        }
        else if (i === wins.length-1){
            return false;
        }

    }


};

var draw = function() {

    for (var i = 0; i < 9; i++) {
        if($('#' + i).text() === markerX || $('#' + i).text() === markerO){
            check++;
        }
    }
    if (check === 9){
        return true;
    }
    else {
        check = 0;
        return false;
    }

};

var resetGame = function() {
	location.reload();
};

Cell.prototype.listen = function() {
	var that = this;
	this.element.on('click', function(){
		that.takeTurn();
		$(this).off('click');
	});
};


$(document).ready(function() {
    $('#board').hide();
    $('h2').hide();
    introduction();
	$('#board').show();
    $('.cell').each( function() {
            var cell = new Cell($(this));
            cell.listen();
    });
});

var introduction = function() {
	$(document).ready();
	var board = $("#board");
	var h1 = $("h1");

	h1.animate({left: '450px', fontSize: '8em', height: '300px'}, "slow");
	h1.fadeOut(1000);
	$('#board').fadeIn(10000);
};
