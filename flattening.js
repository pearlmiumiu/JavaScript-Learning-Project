//flattening

function flattening(arr){
	return arr.reduce(function(flat, cur){  //flat is init value, cur is current element in arr
		return flat.concat(cur) //a.concat(b)
	}, []) //flat=[]
		
}