var pets=[

  {name: 'Fira', age:1.5, species: 'snake'},
  
  {name: 'Loki', age: 3, species:'lizard'},

  {name: 'Phoebe', age: 8, species: 'dog'},

  {name:"Herby", age:12, species:'cat'}

];


pets.map(function(pet){
	pet.age=pet.age*60;
	return pet;
}).map(function(pet){
	return pet.name+"is"+ pet.age+"minutes old";
}).forEach(function(petStatement){
	console.log(petStatement);
})



var pets={

  'Fira':{age:1.5, species: 'snake'},
  
  'Loki':{age: 3, species:'lizard'},

  'Phoebe':{age: 8, species: 'dog'},

  "Herby":{age:12, species:'cat'}

};

var str= Object.keys(pets).map(function(pet){
	return pet+' is a '+ pets[pet].species;
}).sort().join(', ');

