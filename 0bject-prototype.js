function Vector(x,y){
	this.x=x;
	this.y=y;
	
}

Vector.prototype.plus=function(other){
	return new Vector(this.x+other.x, this.y+other.y);
}

Vector.prototype.minus=function(other){
	return new Vector(this.x-other.x, this.y-other.y);
}

Object.defineProperty(Vector.prototype, 'length',{
	get: function(){
		return Math.sqrt(this.x*this.x+this.y*this.y);
	}
});


function StretchCell(inner, width, height){
	this.inner=inner;
	this.width=width;
	this.height=height;
}

StretchCell.prototype.minWidth=function(){
	return Math.max(this.width, this.inner.minWidth());
}
StretchCell.prototype.minHeight=function(){
	return Math.max(this.heigher, this.inner.minHeight());
}
StretchCell.prototype.draw=function(width, height){
	return this.inner.draw(width, height);
}

var sc=new StretchCell(new TextCell('abc'), 1, 2);


function logFive(sequence){
	for (var i=0; i<5; i++){
		if (!sequence.next())
			break;
		console.log(sequence.current());
	}
}

function ArraySeq(array){
	this.pos=-1;
	this.array=array;
}
ArraySeq.prototype.next=function(){
	if (this.pos>=this.array.length-1)
		return false;
	this.pos++;
	return true;
}

ArraySeq.prototype.current=function(){
	return this.array[this.pos];
}
function RangeSeq(from ,to ){
	this.pos=from -1;
	this.to=to;
}
RangeSeq.prototype.next=function(){
	if (this.pos>=this.to)
		this.false;
	this.pos++;
	return true;
}

RangeSeq.prototype.current=function(){
	return this.pos;
}





