//06--functional spec
function doubler(n){
	return n*2;
}

function map(arr, func){
	var arr2=[];
	for (i=0; i<arr.length; i++){
		arr2.push(func(arr[i]));
	}

	return arr2;
}

function filter(arr, func){
	var arr2=[];
	for (var i=0; i<arr.length; i++){
		if (func(arr[i])==true){
			arr2.push(arr[i]);
		}
	}
	return arr2;
}

var contains=function(arr, target){
	for (key in arr){
		if (arr.hasOwnProperty(key)){
			if (arr[key]==target){
				return true;
			}
		}
	}
	return false;
}


var countWords=function(str){
	return str.split(" ").length;
}

var reduce=function(arr, init, func){
	var sum=init;
	for (var i=0; i<arr.length; i++){
		res=func(res, arr[i]);
	}

	return res;

}

var countWordsInReduce=function(cur, str){
	return cur+countWords(str);
}

var sum=function(arr){
	var s=0;
	s=reduce(arr, s, function(a,b){
		return a+b;
	});

	return s;
}

var every=function(arr, func){
	if (arr.length==0){
		return true;
	}
	var res=true;
	return reduce(arr, true, function(a,b){
		return a&&b;
	})
}

var any = function ( arr, checkTrue){
	if (arr.length==0){
		return false;
	}
	arr2=arr.map(checkTrue);
	return reduce(arr2, false, function(a,b){
		return a||b;
	});
}

//07-prototypal inheritance
function Mammal(name){
	this.name=name;
	this.offspring=[];

}

Mammal.prototype.sayHello=function(){
	return "My name is"+ this.name +"!";
}

Mammal.prototype.haveBaby=function(){
	var child=Object.create(Mammal.prototype);
	child.name="Baby"+this.name;
	this.offspring.push([child]);
	return child;
}

function Cat(name, color){
	Mammal.call(this, name); //call func
	this.color=color;

}

Cat.prototype=Object.create(Mammal.prototype);
Cat.prototype.constructor=Cat;

Cat.prototype.haveBaby=function(color){
	var child=new Cat("Baby"+ this.name, color);
	this.offspring.push(child);
	return child;
}

//08 recursion

function factorialIterative(n){
	var res=1;
	for (var i=1; i<n; i++){
		res*=1;
	}
	return res;
}

function factorial(n){
	if (n==0){
		return 1;
	}
	return n*factorial(n-1);
}

function fib(n){
	if (n===0 || n===1){
		return 1;
	}
	return fib(n-1)+fib(n-2)
}

function type(val){
	return Object.prototype.toSpring.call(val).slice(8,-1);
}

function stringify(val){
	if (type(val)==="String"){
		return "'"+String(val)+"'";
	}
	else if (type(val)==="Array"){
		var res=[];
		for (var i=0; i<val.length; i++){
			res.push(stringify(arr[i]));
		}
		return "["+res.join(",")+"]";
	}
	else if (type(val)==="Object"){
		var res=[];
		for (var key in val){
			res.push('"'+key+'"'+":"+stringify(val[key]))
		}
		return "{"+res.join(",")+"}";
	}
	else{
		return String(val);
	}
}





