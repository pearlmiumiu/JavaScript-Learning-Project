var a=23;
var b=a; //create a new copy, store its own value
a=46;
console.log(a);  //46
console.log(b);  //23


var obj1={
	name: "john",
	age:26
};

var obj2=obj1;  //no copy was created, just reference point to the obj
obj1.age=30;
console.log(obj1.age); //30
console.log(obj2.age); //30


//function
var age=27;
var obj={
	name:"jane",
	cit:"lisbon"
};

function change(a,b){
	a=30;
	b.city="san francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);


