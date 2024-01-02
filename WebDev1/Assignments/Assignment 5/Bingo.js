function initAll(){

	var usedNums = new Array(76);
	
	// count i from 0 to 23
    for (var i=0; i<24; i++){
	
		var newNum = 0;
		var colBasis = 0; // 15 for col I, 30 for Col N, etc.
		
		// if this is the I column # from 16 to 30
		if ( (i>=5) && (i<10) )
			colBasis = 15;
		
		// if this is the N column # from 31 to 45
		if ( (i>=10) && (i<14) )
			colBasis = 30;
		
		// if this is the N column # from 46 to 60
		if ( (i>=14) && (i<19) )
			colBasis = 45;
		
		// if this is the N column # from 61 to 75
		if ( (i>=19) && (i<24) )
			colBasis = 60;
		
		// get a random number in the range for this column
		newNum = getNewNum() + colBasis;
		
		// check for duplicates
		//if (!usedNums[newNum])
			
		// if duplicate try another number
		do { 
		   newNum = getNewNum() + colBasis; 
		   }
		while (usedNums[newNum]);
		
		usedNums[newNum] = true; // not a duplicate
		document.getElementById("square" + i).innerHTML = newNum;
		
		// do this to clear out highlighting on all the squares
		document.getElementById("square" + i).className = "";
		document.getElementById("square" + i).onmousedown = toggleColor;
	}
}

function getNewNum(){
	// return a random number between 1 and 15
	return Math.floor(Math.random() * 15) + 1;
}

//highlights the square when the user clicks on it
function toggleColor(evt){
	if (evt) 
		{
		var thisSquare = evt.target;
		}
	else 
		{
		var thisSquare = window.event.srcElement;
		}
	if (thisSquare.className = "") {
		thisSquare.className = "";
		}
	else
		{
		thisSquare.className = "pickedBG";
		}
		
	checkWin();
	
}

function checkWin(){

	var setSquares = 0;
	var winners = new Array(31, 992, 15360, 507904, 541729, 557328, 1083458, 2162820, 4329736, 8519745, 8659472, 16252928);
	
	/* compute the pattern of existing picked squares */
	for (var i=0; i<24; i++){
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != ""){
			document.getElementById(currSquare).className="pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}
	
	/* check for winning pattern */
	for (var i=0; i<winners.length; i++){
		if ((winners[i] & setSquares) == winners[i])
			window.alert("BINGO! - You won!");
	}
}

window.onload = initAll();







