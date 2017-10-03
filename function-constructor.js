var Person = function(name, yearOfBirth, job){
	this.name=name;
	this.yearOfBirth=yearOfBirth;
	this.job=job;
	this.calculateAge = function(){
		console.log(2016-this.yearOfBirth);
	}
}

//same as above
var Person = function(name, yearOfBirth, job){
	this.name=name;
	this.yearOfBirth=yearOfBirth;
	this.job=job;
	
}

Person.prototype.calculateAge =  function(){
		console.log(2016-this.yearOfBirth);
	}





var john = new Person("john", 1990, "teacher");

john.calculateAge();

var jane = new Person("jane", 1969, "designer");

var mark = new Person("mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

Person.prototype.lastName = 'Smith';


console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);





