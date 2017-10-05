function retirement(retirementAge){
	var a="year left until retirement.";
	return function(){
		var age=2016-yearOfBirth;
		console.log((retirementAge-age)+a);
	}
}

var retirementUS=retirement(66);
retirementUS(1990);
//same as  retirement(66)(1990);

//closures summary-an inner function has always access to the variables an parameters of its 
//outer function, even after the outer function has returned.

function interviewQuestion(job){
	return function(name){
		if(job==="designer"{
			console.log(name+"can you please explain what ux design is?")

		} else if(job==="teacher"){
			console.log("what subject do you teach"+name+"?");

		}else{
			console.log("hello"+name+"what do you do?");

		})
	}
}

interviewQuestion("teacher")("john");

