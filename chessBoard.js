function chessboard(n){
  var size=8;
  var res=" ";
  for (var i=0; i<size; i++){
    for (var j=0; j<size; j++){
      if (j%2===0){
        if (i%2===0){
          res+="#";
        }else{
          res+=" ";
        }
      }else{
        if (i%2===0){
          res+=" ";
        }else{
          res+="#";
        }
      }
      res+="\n"; 
    }
    
  }
  return res;
}

chessboard(8)


//alternate solution
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);