function interviewQuestion(job){
	if(job=="designer"){
		return function(name){
			console.log(name+", can you please explain what UX design is?");
		}
	}else if (job =="teacher"){
			return function(name){
				console.log("what subject do you teach,"+name+"?");
			}
		}else{
			return function(name){
				console.log("Hello"+name+", what do you do?");
			}
		}
	}

var teacherQuestion = interviewQuestion("teacher");

var designerQuestion=interviewQuestion("designer");

teacherQuestion("john"); //teacherQuestion is a function because interviewQestion return a function that store at teacherquestion
designerQuestion("jane");

//as same

interviewQestion("teacher")("Mark");


//immidiate invoke function expression
function game(){
	var score = Math.random()*10;
	console.log(score>=5);
}
game();

(function (){
	var score=Math.random()*10;
	console.log(score>=5);
})();//wrap up function as a expression so it could call use ();

(function(goodLuck){
	var score = Math.random()*10;
	console.log(score>=5-goodLuck);
})(5); //5 is pass in goodluck

