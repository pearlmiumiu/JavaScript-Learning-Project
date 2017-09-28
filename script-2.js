/////////////////////////////////////
// Lecture: Hoisting


// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);




/////////////////////////////////////
// Lecture: Scoping


// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c); 
    console.log(a+d);
}
//third function doesnt have access to second, so no access to variable c
//second function could access to first, global and third
//third function doesnt have access to first, vice versa




/////////////////////////////////////
// Lecture: The this keyword


console.log(this);
//window

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);     //john
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);   //window, regular function
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//function borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();

