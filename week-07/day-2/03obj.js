'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 10 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 10 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]
// Create function that returns the name and balance of cash on an account

// Create function that transfers an amount of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
/*var accInfo = function(acc_number){
    var infoArray = [];
    accounts.forEach(function(e){
        if(acc_number === e.account_number){
            infoArray.push(e.client_name);
            infoArray.push(e.balance);
        }
    });
    return infoArray;
}*/
var accInfo = function(acc_number){
    return accounts.filter(account => account.account_number === acc_number)
};

var transfer = function(from_acc,to_acc,amount){
    if(accInfo(from_acc)[0] && accInfo(to_acc)[0]){
    accInfo(from_acc)[0].balance -= amount;
    accInfo(to_acc)[0].balance += amount;
    } 
    else{
        console.log("404 - account not found");
    }
}
transfer(11234543, 43546731, 10);
