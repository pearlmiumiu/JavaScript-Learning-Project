function forEach(arr, func) {
  if(arr.length) {
    func(arr[0]);
    forEach(arr.slice(1), func);
  }
}

forEach([1,2,3,4], console.log);
//1
//2
//3
//4


function deepForEach(nestedArr, func) {
  for(var i = 0; i < nestedArr.length; i++) {
    if(Array.isArray(nestedArr[i])) {
      deepForEach(nestedArr[i], func);
    } else {
      func(nestedArr[i]);
    }
  }
}




function deepForEachNoLoops(arr, func) {
  if(arr.length) {
    if(Array.isArray(arr[0])) {
      deepForEachNoLoops(arr[0], func);
    }
    else {
      func(arr[0]);
    }
    deepForEachNoLoops(arr.slice(1), func);
  }
}
