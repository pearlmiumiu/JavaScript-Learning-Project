function fizzBuzz(n){
  for (var i=0; i<n; i++){
      if (i%15===0){
      console.log("fizzBuzz");
    }else if(i%3===0){
      console.log("fizz");
    }else if(i%5===0){
      console.log("buzz")
    }else{
      console.log(i)
    }
  }
  
}

fizzBuzz(16);
//fizzBuzz
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzBuzz