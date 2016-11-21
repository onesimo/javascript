function Person(){
	this.name = '';
	this.age = '';
	this.eyesColor = '';
	this.body = '';

	this.move = function() {
		console.log('hello from move');
	};

	this.say = function() {

	};

	this.see = function() {

	}; 
}

var onesimo = new Person();

console.log(typeof Person); // function 
console.log(typeof onesimo); // object

onesimo.age = 26;
onesimo.name = 'Onesimo';
onesimo.eyesColor = 'Brown'
onesimo.body = 'thin';

console.log(onesimo);

var jhon = new Person();

jhon.age = 22;
jhon.name = 'Jhon';
jhon.eyesColor = 'green'
jhon.body = 'fat';

console.log(jhon);