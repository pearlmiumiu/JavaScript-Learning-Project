var myArray=[1,2,3,4,5];

var sum=myArray.reduce(addingFunc);

function addingFunc(sum, currentElement){
	return sum+currentElement;
}


var twoDimArray=[[1,2],[3,4],[5,6,7]];

var flattenedArray=twoDimArray.reduce(function(flattened,arr){
	return flattened.concat(arr);
});



function myFilter(arr, filterFunc){
	return arr.reduce(function(filtered, element){
		if(filterFunc(element)){
			filtered.push(element);
		}
		return filtered;
	},[])
}

var filteredArray = myFilter([1,2,3,4,5], function(elem){
	return elem
})