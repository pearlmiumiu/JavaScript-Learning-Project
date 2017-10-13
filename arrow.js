//arrow functions

const years = [1990, 1965, 1982, 1937];

//es5
var ages5=years.map(function(el){
	return 2016-el;
});
console.log(ages5);


//es6
let ages6=years.map(el==> 2016-el);
console.log(ages6);

ages6 = years.map((el, index)=> 'Age element ${index+1}: ${2016-el}.');
console.log(ages6);

ages6=years.map((el, index)=>{
	const now=new Date().getFullYear();
	const age=now-el;
	return 'Age element ${index+1}: ${age}.'
});

console.log(ages6);

//arrow function does not have "this" key word


//ES 5
var box5={
	color: 'green',
	position: 1,
	clickMe: function(){
		var self=this;
		document.querySelector('.green').addEventListener('click', function(){

			//use self instead of this. as this is regular function "this" key word -->global obj(window")
			//
			var str= 'this is box number'+self.position+'and it is'+ self.color;  
			alert(str);
		})
	}
}

box5.clickMe(); //method call, "this" key word -->box5

//ES 6
const box6={
	color: 'green',
	position: 1,
	clickMe: function(){
		var self=this;
		document.querySelector('.green').addEventListener('click', ()=>{

			
			var str= 'this is box number'+this.position+'and it is'+ this.color;  
			alert(str);
		})
	}
}

box6.clickMe();


//constructor
//ES5
function Person(name){
	this.name=name;
}
Person.prototype.myFriends5=function(friends){
	var arr = friends.map(function(el){
		var arr=friends.map(function(el){
			return this.name+'is friends with '+el;
		}.bind(this)); //bind make a copy of the function

        console.log(arr);
	})
}
var friends =['bob','jane','mark'];
new Person('John').myFriends5(friends);
//ES6

function Person(name){
	this.name=name;
}
Person.prototype.myFriends5=function(friends){
	var arr = friends.map(function(el){
		var arr=friends.map(el=>'${this.name} is friends with ${el}');
		
        console.log(arr);
	})
}
new Person('Mike').myFriends6(friends);




