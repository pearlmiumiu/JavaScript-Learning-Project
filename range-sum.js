function range(left, right){
	var res=[]
	for (var i=left; i<right+1; i++){
		res.push(i)
	}

	return res;
}

function sum(arr){
	var total=0;
	for (var i=0; i<arr.length; i++){
		total+=arr[i];
	}
}
return total;


function range2(start, end, steps){
	if (steps==null) step =1;
	var arr=[];
	if (steps>0){
		for (var i=start; i<=end; i+=steps){
			arr.push(i);
		}
	}else{
		for (var i=start; i>=end; i+=steps){
			arr.push(i);
		}
	}
	return arr;
}

console.log(sum(range2(1,10,2))); //25