var orders=[
{amount: 250},
{amount: 400},
{amount:100},
{amount: 325}
]

//regular for loop
var totalAmount=0;
for (var i=0; i<orders.length; i++){
	totalAmount+=orders[i].amount
}

console.log(totalAmount)

//reduce

var totalAmount=orders.reduce(function(sum){ //sum is 0 at the beginning, then the result of sum+orders.amount 

	return sum+orders.amount

},0 ) //0 is the init val

//advanced reduce

//text data
mark johanson waffle iron 80 2
mark johanson blender 200 1
mark johanson knife 10 4
nikita smither waffle iron 80 1
nikita smither knife 10 2
nikita smither pot 20 3


import fs from 'fs'
var output = fs.readFileSync('data.txt', 'utf8')
 .trim[]
 .split('\n')
 .map(line => line.split('\t'))
 .reduce((customers, line)=>{
 	customers[line[0]]=[]
 	customers[lin[0]].push({
 		name:line[1],
 		price: line[2],
 		quantity: line[3]
 	})
 	return customers
 }, {}) //pass empty object


