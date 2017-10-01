function createsAFunc(){
	return function(){
		console.log('new function ran!')
	}
}

var newFunc=createsAFunc();
newFun()


function runs3Times(func){
	for(var i=0; i<3; i++){
		func();
	}
}

runs3Times(function() {console.log('hello')})



//example3
var createsAFunction=function(){
	var newFunc= function(message){
		console.log('Message:', message);
	}
	return newFunc;
}

createsAFunction()("Hello Fullstackers!")


//exampel4

var decorator = function(func){
	return function(){
		console.log('I decorated the function!')
		func()
	}
}

decorator(function() {console.log('Hello World')})
var decorated=decorate(function(){ console.log("hello world")})
//I decorated the function
//hello world
