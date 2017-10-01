<!DOCTYPE html>
<html>
    <head>
       <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
       </head>
	<body>

		<form>
		first number:<br>
		<input type="text" id="num1" value="100">
		<br>
		second number:<br>
		<input type="text" id="num2" value="200">
		<br>
		result: <br>
		<p id="result"> result</p>
		<br>
		</form>

		<button id="add">+</button>
		<button id="substract">+</button>
		<button id="multiply">+</button>
		<button id="divide">+</button>



	</body>
</html>




//button 
var addBtn=document.getElementById("add");


var addBtn=document.getElementById("substract");

var addBtn=document.getElementById("multiply");

// click method

var a_int;

var b_int;


$('#add').click(function(){
    getInputNum();
	
	
	var result = addition(a_int, b_int);

	//var resultHtml = "<p>" + result "</p>";

 	//resultNum.innerHtml = resultHtml;

 	//resultNum.innerHtml = String(result);

 	$('#result').html(String(result));

	
});

$('#substrct').click(function(){
    getInputNum();
	
	var result = subtraction(a_int, b_int);

	//resultNum.innerHtml = String(result);
	$('#result').html(String(result));

});

$('#multiply').click(function(){

	getInputNum();
	
	var result = multiplication(a_int, b_int);

	//resultNum.innerHtml = String(result);
    $('#result').html(String(result));

});


$('#divide').click(function(){

	getInputNum();
	
	var result = division(a_int, b_int);

	//resultNum.innerHtml = String(result);
	$('#result').html(String(result));


});


function getInputNum(){

	// var a=document.getElementById("num1").value;

	// var b = document.getElementById("num2").value;
    var a=$('#num1').val();
    var b= $('#num2').val();


	a_int = parseInt(a, 10);

	b_int = parseInt(b, 10);
}


function addtion(x,y){
	return x+y;
}

function subtraction(x,y){
	return x-y;
}

function multiplication(x,y){
	return x*y;
}

function division(x,y){
	if (y==0){
		alert ('0 can not be divided');
		return;
	}else{
		return x/y;
	}
}



