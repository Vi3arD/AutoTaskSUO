var TEMP_CONST = 15,
	POROG = 10;

var deltaTempZar,
	TempZar; //из формы

var deltaHop,
	deltaHamc,
	hamc,
	hop;

var zarad;

var Aw,
	aon,
	aw;

var gr02, gr04, gr06;



function calcFun() {
	TempZar = document.getElementById('Tzar').value;
	deltaTempZar = parseInt(TempZar) - TEMP_CONST;

	deltaHamc = document.getElementById('dHamc').value;
	deltaHamc = artAroundXXX(deltaHamc);
	hamc = document.getElementById('ha').value;
	hop = document.getElementById('Ho').value;
	deltaHop = Math.round(parseInt(deltaHamc) + (parseInt(hamc) - parseInt(hop))/POROG);

	gr02[0] = document.getElementById('dT02').value;
	gr02[1] = document.getElementById('aw02').value;
	gr02[2] = document.getElementById('v02').value;

	zarad = selAlt();
	if(zarad == 1){

	}

	alert(deltaHop);
}

function artAroundXX (x) {
	if (x > 50){
		x = x - 50;
		return -x;
	}
	else{
		return x;
	}
}

function artAroundXXX (x) {
	if (x > 500){
		x = x - 500;
		return -x;
	}
	else{
		return x;
	}
}

function selAlt() {
	var temp = document.getElementById('select_id').value;
}