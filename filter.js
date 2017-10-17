//function is a value
//takes a function as argument, called higher-order functions

var animals=[
{name: "fluffykins", species:"rabbit"},
{name:"Caro", species:"dog"},
{name:"Hamilton", species:"dog"},
{name:"Harold", species:"fish"},
{name:"Ursula", species:"cat"},
{name:"Jimmy", species:"fish"}
]

//regular loop
var dogs=[]
for (var i=0; i<animals.length; i++){
	if (animals[i].species==="dog"){
		dogs.push(animals[i])
	}
}

//higher order functional programming using filter

var dogs=animals.filter(function(animal){
	return animal.species==="dog"
})

//de-compose
var isDog=function(animal){  //call back function take each item of the orignal array
	return animal.species==="dog"  //return true or false
}

var dogs=animals.filter(isDog);

otheranimals=animal.reject(isDog);