function reverseArray(arr){
	var arr2=[];
	for (var i=arr.length-1; i>=0;i--){
		arr2.push(arr[i])
	}
	return arr2;
}

function reverseArrayInPlace(arr){
	if (arr.length===1){
		return arr;
	}
	return reverseArrayInPlace(arr.slice(1)).concat(arr[0])
}

//alternative way

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}