//00

function runNumtimes(func, n){
	for (var i=0; i<n;i++){
		func();
	}

}

//01
var sum=callReduceOnThisArray.reduce(function(a,b){return a+b;}, 100)

//02
function reject(arr, func){
	var res=[];
	for (var i=0; i<arr.length; i++){
		if (func(arr[i])==false){
			res.push(arr[i])
		}
	}
	return res;
}

//03
function threeTimes(func){
	
	var count=3;

	var res=function(){
		if (count>0){
			count-=1;
			return 5;
		}
	}
	return res;
}

//04
function recSmallestInt(arr){

	if (arr.length==1){
		return arr[0];
	}
	else{
		var x=arr[0];
		var y=recSmallestInt(arr.slic(1));
		if (x>y){
			return y;
		}
		return x;
	}

}

//05
function newObj(objname){
	var res=Object.creat(objname);
	Object.setPrototypeOf(res, objname.prototype);
	return res;
}

//06
function callAll(obj, arr){
	var res=[];
	for (var i=0; i<arr.length; i++){
		res.push(arr[i].call(obj));
	}

	return res;
}
