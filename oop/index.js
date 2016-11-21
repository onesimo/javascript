function Person(){
	this.name = '';
	this.age = '';
	this.eyesColor = '';
	this.body = '';

	//private attribute
	var tatoo = '';

	//private method
	var swin = function (){
		return console.log("I'm swing")
	}

	this.move = function(canSwin) {
		if(canSwin){
			return swin();
		}

		return console.log("I'm walking");
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
onesimo.move(true);

console.log(onesimo);

var jhon = new Person();

jhon.age = 22;
jhon.name = 'Jhon';
jhon.eyesColor = 'green'
jhon.body = 'fat';
jhon.move();

console.log(jhon);