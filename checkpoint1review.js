
//00
function Rectangle(color, height, width){
	this.color=color;
	this.height=height;
	this.width=width;
}

Rectangle.prototype.getArea=function(height, width){
	return this.height*this.width;
}

//01
function findObjPropHasOwn(shape){
	var res=[];
	for (var key in shape){
		if (shape.hasOwnProperty(key)){
			res.push(key);
		}
	}
	return result.join(",");

}

function findObjKeys(shape){
	var res=Object.keys;
	return res.join(",");
}

//02

function dontSpillTheBeans(message){
	var result=[];
	result.setSecret=function(new_message){
		message=new_message;
	};

	result.getSecrete=function(){
		return message;
	};

	return result;

}


//03
function rightTriangle(n){
	var res=[]
	for (var i=n; i>0; i--){
		//res.push("*"*n);
		res.push("*".repeat(n));
	}

	return res.join("\n");
}

//04

function Pokemon(name, health, attackBonus){
	this.name=name;
	this.health=health;
	this.attackBonus=attackBonus;
}

Pokemon.prototype.biteAttack=function(){
	var sum=2;
	sum+=this.attackBonus;

	return sum;
}

Pokemon.prototype.isDefeated=function(){
	if(this.health>=1){
		return false;
	}
	return true;
}

function simulateBattle(pokemon1, pokemon2, str){

	while (Pokemon1.health>0 && Pokemon2.heath>0){
		Pokemon2.heath-=Pokmon1.biteAttack();
		if (Pokemon2.health<=0){
			return Pokemon1.name+'Wins!';
		}
		Pokemon1.health-=Pokemon2.biteAttack()
		if(Pokemon2.health<=0){
			return Pokemon2.name+"Wins!"
		}
	}

	return " ";

}















}


