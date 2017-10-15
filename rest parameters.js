
//ES 5
function isFullAge5(){
	//console.log(arguments);
	var argsArr=Array.prototype.slice.call(arguments); //trun array like structure into array
	argsArr.forEach(function(cur){
		console.log((2016-cur)>=18);
	})
	
}

isFullAge5(1990,1999,1965);//[1990,1999,1965] is not array, is array like structure


//ES 6

function isFullAge6(...years){
	//console.log(years)-->get an array
	years.forEach(cur=>console.log((2006-cur)>=18));
}

isFullAge6(1990,1999,1965);



// Lecture: Default parameters


// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);  // john, 1990, smith, american
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

