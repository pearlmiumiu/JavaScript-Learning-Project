var john = {
	name:"john",
	age:26,
	job:"teacher",
	presentation: function(style, timeOfDay){
		if (style=="formal"){
			console.log("good "+ timeOfDay+"ladies and gentlemen!"+"iam"+ this.name+"iam"+this.job+ "and iam+"this.age);
		}else if (style=="friendly"){
			console.log();
		}
	}
}

var emily={
	name:"Emily",
	age:35,
	job:"designer"

}


john.presentation("formal","morning");

john.presentation.call(emily, "friendly","afternoon");


john.presentation.apply(emily,"friendly","afternoon");

var johnFriendly=john.presentation.bind(john, "friendly");

johnFriendly("morning");


var emilyFormal=john.presentation.bind(emily,"formal");
emilyFormal("afternoon");

