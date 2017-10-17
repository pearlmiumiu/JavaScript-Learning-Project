var animals=[
{name: "fluffykins", species:"rabbit"},
{name:"Caro", species:"dog"},
{name:"Hamilton", species:"dog"},
{name:"Harold", species:"fish"},
{name:"Ursula", species:"cat"},
{name:"Jimmy", species:"fish"}
]

//regular for loop
var names=[];
for (var i=0; i<animals.length; i++){
	names.push(animals[i].name)
}
console.log(names);

//higher order map
var names=animals.map(function(animal){
	return animal.name + "is a" + animal.species;
})

// ES6 arrow
var names=animals.mal((animal)=>animal.name);