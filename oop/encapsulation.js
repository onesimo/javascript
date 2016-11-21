function Person(){
	this.name = '';
	this.age = 0; 

	this.getName = function() {
		return this.name;
	}
	this.setName = function(_name) {
		this.name = _name;
	}
	this.getAge = function() {
		return this.age;
	}
	this.setAge = function (_age){
		this.age = _age;
	}
}

var onesimo = new Person;

onesimo.setName('Onesimo');
console.log(onesimo.getName());

console.log(onesimo);