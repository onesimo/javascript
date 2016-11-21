function Bank() {
	var name = '';
	var account = '';
	var amount = 0;

	this.setName = function(_name){
		name = _name;
	}

	this.getName = function(){
		return name;
	}

	this.setAccount = function(_account){
		account = _account;
	}

	this.getAccount = function(){
		return account;
	}

	this.setAmount = function(_amount){
		amount = _amount;
	}

	this.getAmount = function(){
		return amount;
	}
}

function BankStrategy(strategy, bank){
	this.strategy = strategy;
	this.bank = bank;
}

BankStrategy.prototype;doStrategy = function(){
	return this.strategy();
}

var deposit = function(bank, value) {
	var amount = bank.getAmount() + value;

	console.log('Deposit', amount);
}

var withdraw = function(bank, value){
	var amount = bank.getAmount() - value;

	console.log('withdraw strategy =>', amount);
}

function Main(){
	var name = window.prompt("what is your bank name?");
	var account = window.prompt("what is your account?");
	var amount = parseInt(window.prompt("how much do you have?"));

	var bank = new Bank();
	bank.setName(name);
	bank.setAccount(account);
	bank.setAmount(amount);
 
 	var option  = parseInt(window.prompt(' 1 - Deposit \n 2 - withdraw'));

 	while(option !== 0){
 		value = parseInt(window.prompt("Enter amount : "));

 		if(option === 1){
 			return new BankStrategy(deposit(bank, value));
 		}
 		if(option === 2){
 			return new BankStrategy(withdraw(bank, value));
 		}
 			
 	}



	console.log(bank.getName(), bank.getAccount(), bank.getAmount());
}

Main();
/*
var bank = new Bank();

bank.setName('caixa');
bank.setAccount('1223-C');
bank.setAmount(150);

console.log(bank.getName(), bank.getAccount(), bank.getAmount());
*/