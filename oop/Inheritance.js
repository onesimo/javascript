function Address(){
	var number = 0;
	var city = '';
	var address = '';
}

Address.prototype.setNumber = function(_number){
	number = _number;
}

Address.prototype.getNumber = function(){
	return number;
}

Address.prototype.setCity = function(_city){
	city = _city;
}

Address.prototype.getCity = function(){
	return city;
}

Address.prototype.setAddress = function(_address){
	address = _address;
}

Address.prototype.getAddress = function(){
	return address;
}

function Person(){
	var name = '';
	var age = 0;
}

Person.prototype = new Address();
Person.prototype.constructor = Person;

Person.prototype.getName = function() {
	return name;
};

Person.prototype.setName = function(_name){
	name = _name;
};


Person.prototype.getAge = function() {
	return age;
};

Person.prototype.setAge = function(_age){
	age = _age;
};


var onesimo = new Person();

onesimo.setName('onesimo');
onesimo.setAge(26);
onesimo.setCity('Sao Paulo');
onesimo.setNumber(123);
onesimo.setAddress('Rua das Oliveiras');

console.log(onesimo instanceof Address);
console.log(onesimo.getCity(), onesimo.getAddress());
