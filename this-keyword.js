//what is "this"

console.log(this);
//global execution--window


function whatIsThis(){
	console.log(this); //window
}

whatIsThis(); //global execution context


var obj={}
obj.whatIsThis=whatIsThis;

obj.whatIsThis(); // "this "referencing obj object
//whatisthis is the property of obj
//


whatIsThis.call({hello:'world'}); //referencing 'hello:world' object

//implict binding rule
var calculator={
	total:0,
	add: function(number){
		this.total=this.total+number;
	},
	getValue:function(){
		return this.total;
	}
}

calculator.add(5);
console.log(calculator.getValue());

//explicit binding rule
var michael={
	first:"michale", last:"Scott"

};

var pam={
	first:"pam",
	last:"Beesly"
};

function greet(greeting){
	console.log(this);
	console.log(greeting+" "+this.first + " "+this.last+ "!");
}

greet();//global
greet.call(michale,"hello"); //this refer to michale obj, "greeting" arg="hello"
greet.call(pam,"hello"); // could use apply or bind method.
greet.call({},"hello"); // first arg is the "this" object,pass arg to call method.



function Person(first, last){
	this.first=first;
	this.last=last;
}




Person("Forest","Gump"); //window, window.first=forest, this.last=gump

var forest=new Person("Forest", "Gump");  //refer to Person
console.log(forest);

/*
JavaScript has 4 different ways you can invoke a function:

Function Invocation: alert("TGIF!");
Method Invocation: [].push("Fullstack", "Academy");
Constructor Function Invocation: new RegExp("[a-zA-Z]");
Indirect Invocation: Object.prototype.toString.call([]);
The way the function is called determines what value "this" is assigned.
*/

/*
rule 1--default binding rule
By default, the “this” keyword references the global 
object for the current runtime environment (Node.js, Web Browser, etc).

rule 2-implicit binding rule
The "Implicit Binding Rule" describes the case where a method references 
the this keyword. When a method uses the this keyword, this references the 
object the method is called on. This can be identified by locating the dot operator, 
the object the method is called on is left of the dot operator, 
the method is to the right of the dot.

rule 3- explicit binding rule
The "Explicit Binding Rule" describes the scenario when .call, .apply, or .bind is used.


