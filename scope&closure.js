/*global scope*/

var newYorkBoroughs=['Brooklyn', 'The Bronx','Manhattan','Queens','Staten Island'];
;
		}

		chelsea();

	}

	soHo();
}

Manhattan();


/*shadowing*/

var bestBoardGame='Settler of Catan';

function needFuncToCreateLocalScope(){

	var bestBoardGame = "MonoPoly";

	console.log("bestBoardGame from needFuncToCreateLocalScope:" + bestBoardGame);

}

console.log("bestBoardGame from Global Scope: " +bestBoardGame)

needFuncToCreateLocalScope();

/*lexical scope*/

function manhattan(){
	var chelsea ="chelsea";

	function logger(){
		console.log(chelsea);
	}
	logger();
}

manhattan();




/*closure*/

function sum() {
  var startingValue = Math.floor(Math.random() * 100) + 1;
  
  return function funcFromSum(num) {
    console.log('startingValue ' + startingValue);
    return num + startingValue;
  }

}

var calculateSum = sum();

console.log(calculateSum(22));
console.log(calculateSum(33));
console.log(calculateSum(44));
console.log(calculateSum(55));
