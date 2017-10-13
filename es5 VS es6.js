//es5--function scope
var name5="jane smaith";
var age5=23;
name5="jane miller";
console.log(name5);

//es6 --block scope
const name6="jane smith"; //const variable is immutable
let age6=23;//can be reassign new value
name6="jane miller"; //does not work

//es5
function driversLicence5(passedTest){
	if (passedTest){
		var firstName ="john";
		var yearOfbirth = 1990;
		console.log(firstName+ ", born in " +yearOfBirth + 'is nowcan drive');
	}
    //can access variables within the same function
	console.log(firstName+ ", born in " +yearOfBirth + 'is nowcan drive');//can work outside
}
	driversLicence5(true); //print out above log


//es6

function driversLicence6(passedTest){
	if (passedTest){
		let firstName ="john"; //can't use variable not declared
		const yearOfbirth = 1990;
		console.log(firstName+ ", born in " +yearOfBirth + 'is nowcan drive');
	}

	console.log(firstName+ ", born in " +yearOfBirth + 'is nowcan drive'); //does not work out side block
}
	driversLicence6(true); //print out above log

