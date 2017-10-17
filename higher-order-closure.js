//regular func

function greetMe(me){

	console.og("hello," + me +"!")
	
}
greetMe("tom")

//closure

var me='tom';
function greetMe(){
	console.log("Hello, " + me + "!")
}
greetMe();


function sendRequest(){
	var requestID="123";
	s.ajax({
		url: '/myURL',
		success: function(response){
			alert("Request " + requestID+ "returned")
		}
	});
}

function stopWatch(){
	var startTime= Date.now();
	function getDelay(){
		var elapsedtime=Date.now()-startTime; 
		alert(elapsedtime);
	}
	return getDelay;
}

var timer=stopWatch();
//invoke the returned function
timer();