//blocks and IIFEs
//es 6 block

{
	const a=1;
	let b=2;
	var c=3;
}
console.log(a+b); //not defined
console.log(c); //can work

//es 5
(function(){
   var c=3;


})();
console.log(c); //not defined

//string
let firstName="john";
let lastName="Smith";
const yearOfBirth = 1990;

function calcAge(year){
	return 2016-year;
}

//ES5
console.log("this is"+ firstName+" "+ lastName);

//ES6
console.log(`this is ${firstName} ${lastName}. he was born in ${yearOfBirth} today he is ${calcAge(yearOfBirth)} years old! `);

const n=`${firstName} ${lastName}`;
console.log(n.starsWith("j")); //--true;
console.log(n.endsWith("j"));//false
console.log(n.includes(" ")); //true
console.log(firstName.repeat(5))///johnjohnjohn
console.log(`${firstName}`.repeat(5));//john john john john john
