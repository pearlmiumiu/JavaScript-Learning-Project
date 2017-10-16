function CountB(str){
	var count=0;
	for (var i=0; i<str.length; i++){
		if (str[i]==="B"){
			count+=1;
		}
	}
	return count
	
}

function countchar(str, val){
	var count=0;
	for (var i=0; i<str.length; i++){
		if(str.charAt(i)==val){
			count+=1
		}
	}
	
	
	return count;
}


function CountBs(str){
	return countchar(str, "B");
	
	
}