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

var distance01, distance02, distance03;

function main(){
	calcFun();
}

function calcFun() {
	readData();
	//считывает температуру заряда
	TempZar = document.getElementById('Tzar').value; 
	//вычисляет dT
	deltaTempZar = parseInt(TempZar) - TEMP_CONST;
	//вычисляем разницу атмосферногго давления
	deltaHamc = document.getElementById('dHamc').value;
	deltaHamc = artAroundXXX(deltaHamc);
	//высота позиции метео
	hamc = document.getElementById('ha').value;
	//высота огневой позиции
	hop = document.getElementById('Ho').value;
	//дельта H
	deltaHop = Math.round(parseInt(deltaHamc) + (parseInt(hamc) - parseInt(hop))/POROG);

	gr02[0] = document.getElementById('dT02').value;
	gr02[1] = document.getElementById('aw02').value;
	gr02[2] = document.getElementById('v02').value;

	
	zarad = selAlt();
	if(zarad == 1){

	}

	alert(deltaHop);
}

function readData() {

	distance01[0] = document.getElementById('z01').value;
    distance01[1] = document.getElementById('dZw01').value;
    distance01[2] = document.getElementById('dXw01').value;
    distance01[3] = document.getElementById('dXh01').value;
    distance01[4] = document.getElementById('dXt01').value;
    distance01[5] = document.getElementById('dXtZ01').value;
    distance01[6] = document.getElementById('dXv01').value;

    distance01[6] = document.getElementById('wX01').value;
    distance01[6] = document.getElementById('wY01').value;
    
    
	distance02[0] = document.getElementById('z02').value;
    distance02[1] = document.getElementById('dZw02').value;
    distance02[2] = document.getElementById('dXw02').value;
    distance02[3] = document.getElementById('dXh02').value;
    distance02[4] = document.getElementById('dXt02').value;
    distance02[5] = document.getElementById('dXtZ02').value;
    distance02[6] = document.getElementById('dXv02').value;

    distance02[6] = document.getElementById('wX02').value;
    distance02[6] = document.getElementById('wY02').value;
    
    
	distance03[0] = document.getElementById('z03').value;
    distance03[1] = document.getElementById('dZw03').value;
    distance03[2] = document.getElementById('dXw03').value;
    distance03[3] = document.getElementById('dXh03').value;
    distance03[4] = document.getElementById('dXt03').value;
    distance03[5] = document.getElementById('dXtZ03').value;
    distance03[6] = document.getElementById('dXv03').value;

    distance03[6] = document.getElementById('wX03').value;
    distance03[6] = document.getElementById('wY03').value;
}
//функция на округление для 5*
function artAroundXX (x) {
	if (x > 50){
		x = x - 50;
		return -x;
	}
	else{
		return x;
	}
}
//функция на округление для 5**
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
