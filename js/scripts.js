

// ARITHMETIC FUNCTIONS:


let oppArray = [];

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


function equalsResults(){
	 let operationString = oppArray.join('');
	 let results = eval(operationString);
	// console.log(operationString)
	 console.log(results);
	 viewer.textContent = `${results}`;
}

//BUTTON elements positions:

let viewer = document.getElementById('numberViewer');


// NUMBER DISPLAY FUNCTIONS:

function displayZero() {
	viewer.textContent += "0";
}

function displayOne() {
	viewer.textContent += "1";
	oppArray.push("1");
	console.log (oppArray);


 //   if(checkOperation(currentOperator) === true){
 //   	valueOne += "1" ;
	// viewer.textContent += "1";
	// console.log(valueOne)
 // } else {
	// valueTwo += "1";
	// viewer.textContent += " 1";
	// console.log(valueTwo)
 //  }
};

function displayTwo() {
	// if(checkOperation(currentOperator) === true){
 //   	valueOne += "2" ;
	// viewer.textContent += "2";
	// console.log(valueOne)
 // } else {
	// valueTwo += "2";
	// viewer.textContent += " 2";
	// console.log(valueTwo)
 //  }
}

function displayThree() {
	// if(checkOperation(currentOperator) === true){
 //   	valueOne += "3" ;
	// viewer.textContent += "3";
	// console.log(valueOne)
 // } else {
	// valueTwo += "3";
	// viewer.textContent += " 3";
	// console.log(valueTwo)
 //  }
}

function displayFour() {
	viewer.textContent += "4";
}

function displayFive() {
	viewer.textContent += "5";
}

function displaySix() {
	viewer.textContent += "6";
}

function displaySeven() {
	viewer.textContent += "7";
}

function displayEight() {
	viewer.textContent += "8";
}

function displayNine() {
	viewer.textContent += "9";
}

function displayDecimal() {
	viewer.textContent += "."
}

// OTHER BUTTONS:

function clearDisplay() {
	viewer.textContent = "";
}



function multiplyDisplay() {
	viewer.textContent = "X"
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



