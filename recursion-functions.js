function countdown(n){
	if (n==0) return ;
	console.log(n);
	countdown(n-1);
}

countdown(10);


/////

function sum(){
	var arg=Array.from(arguments);
	var first=args[0];
	var second=arg[1];
	if (args.length==2){   //base case
		return first+second;
	}
	return first+sum.apply(null, args.slice(1));  //turn sum([2,3,4]) ==> sum(2,3,4)
}

var result=sum(1,2,3,4);
console.log(result);