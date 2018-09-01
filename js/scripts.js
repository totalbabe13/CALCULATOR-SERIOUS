

// ARITHMETIC FUNCTIONS:
let oppArray = [];

window.addEventListener('keydown',function(e){
	 const keyStroke = document.querySelector(`button[data-key="${e.keyCode}"]`);
	 console.log(keyStroke)
	 if(keyStroke === document.querySelector(`button[data-key="49"]`)){
	 	displayOne();
	 } else if (keyStroke === document.querySelector(`button[data-key="50"]`)){
	 	displayTwo();
	 } else if (keyStroke === document.querySelector(`button[data-key="51"]`)){
	  	displayThree();
	 } else if (keyStroke === document.querySelector(`button[data-key="52"]`)){
	  	displayFour();
	 } else if (keyStroke === document.querySelector(`button[data-key="53"]`)){
	  	displayFive();
	 } else if (keyStroke === document.querySelector(`button[data-key="54"]`)){
	  	displaySix();
	 } else if (keyStroke === document.querySelector(`button[data-key="55"]`)){
	  	displaySeven();
	 } else if (keyStroke === document.querySelector(`button[data-key="56"]`)){
	  	displayEight();
	 } else if (keyStroke === document.querySelector(`button[data-key="57"]`)){
	  	displayNine();
	 } else if (keyStroke === document.querySelector(`button[data-key="48"]`)){
	  	displayZero();
	 } else if (keyStroke === document.querySelector(`button[data-key="187"]`)){
	  	additionDisplay();
	 }	
});

function additionDisplay() {
	 viewer.textContent = "+"
     
     if(oppArray.length > 3) {
     	let operationString = oppArray.join('');
	    let results = eval(operationString);
	    oppArray =[results];
     };

     if( oppArray[oppArray.length-1] !== "+" && oppArray[oppArray.length-1] !== "-" && oppArray[oppArray.length-1] !== "*" && oppArray[oppArray.length-1] !== "/" ){
         oppArray.push("+")
    }; 
    console.log(oppArray)
}

function subtractionDisplay() {
	 viewer.textContent = "-"
     
     if(oppArray.length > 3) {
     	let operationString = oppArray.join('');
	    let results = eval(operationString);
	    oppArray =[results];
     };

     if( oppArray[oppArray.length-1] !== "+" && oppArray[oppArray.length-1] !== "-" && oppArray[oppArray.length-1] !== "*" && oppArray[oppArray.length-1] !== "/" ){
         oppArray.push("-")
    }; 
    console.log(oppArray)
}

function multiplyDisplay() {
	viewer.textContent = "X"
	if(oppArray.length > 3) {
     	let operationString = oppArray.join('');
	    let results = eval(operationString);
	    oppArray =[results];
     };

     if( oppArray[oppArray.length-1] !== "+" && oppArray[oppArray.length-1] !== "-" && oppArray[oppArray.length-1] !== "*" && oppArray[oppArray.length-1] !== "/" ){
         oppArray.push("*")
    }; 
    console.log(oppArray)
}

function divisionDisplay() {
	viewer.textContent = '/'
	if(oppArray.length > 3) {
     	let operationString = oppArray.join('');
	    let results = eval(operationString);
	    oppArray =[results];
     };

     if( oppArray[oppArray.length-1] !== "+" && oppArray[oppArray.length-1] !== "-" && oppArray[oppArray.length-1] !== "*" && oppArray[oppArray.length-1] !== "/" ){
         oppArray.push("/")
    }; 
    console.log(oppArray)
}


function equalsResults(){
	 let operationString = oppArray.join('');
	 let results = eval(operationString);
	// console.log(operationString)
	 console.log(results);
	 viewer.textContent = `${results}`;
	 oppArray =[];
}


//BUTTON elements positions:

let viewer = document.getElementById('numberViewer');


// NUMBER DISPLAY FUNCTIONS:

function displayZero() {
	
	viewer.textContent += "0";
	oppArray.push("0");
	console.log (oppArray);

}

function displayOne() {
	
	viewer.textContent += "1";
	oppArray.push("1");
	console.log (oppArray);

};

function displayTwo() {

	viewer.textContent += "2";
	oppArray.push("2");
	console.log (oppArray);
}

function displayThree() {

    viewer.textContent += "3";
	oppArray.push("3");
	console.log (oppArray);
}

function displayFour() {

	viewer.textContent += "4";
	oppArray.push("4");
	console.log (oppArray);
}

function displayFive() {

	viewer.textContent += "5";
	oppArray.push("5");
	console.log (oppArray);
}

function displaySix() {

	viewer.textContent += "6";
	oppArray.push("6");
	console.log (oppArray);
}

function displaySeven() {

	viewer.textContent += "7";
	oppArray.push("7");
	console.log (oppArray);
}

function displayEight() {

	viewer.textContent += "8";
	oppArray.push("8");
	console.log (oppArray);
}

function displayNine() {

	viewer.textContent += "9";
	oppArray.push("9");
	console.log (oppArray);
}

function displayDecimal() {
	viewer.textContent += "."
	oppArray.push(".");
	console.log (oppArray);
}

// OTHER BUTTONS:

function clearDisplay() {
	viewer.textContent = "";
	oppArray = [];
}







	// currentOperator = "+"
	// console.log(currentOperator)
	
// }



// NUMBER BUTTONS:
// let positionZero = document.getElementById('zeroButton');
// let positionOne = document.getElementById('oneButton'); 
// let positionTwo = document.getElementById('twoButton'); 
// let positionThree = document.getElementById('threeButton'); 
// let positionFour = document.getElementById('fourButton'); 
// let positionFive = document.getElementById('fiveButton'); 
// let positionSix = document.getElementById('sixButton'); 
// let positionSeven = document.getElementById('sevenButton'); 
// let positionEight = document.getElementById('eightButton'); 
// let positionNine = document.getElementById('NineButton'); 

//OTHER BUTTONS:
// let positionsClear = document.getElementById('clearButton');



