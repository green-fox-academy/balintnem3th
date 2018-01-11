'use strict';

var watchlist = []

var security_alchol_loot = 0

var queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]
// Queue of festivalgoers at entry
// no. of alcohol units 
// no. of guns
// Create a security_check function that returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival
var security_check = function(){
    return queue.filter(people => people.alcohol === 0 && people.guns === 0)
};
var secCheck = security_check();
var whoCanEnter = [];
for(var i =0;i<secCheck.length;i++ ){
    whoCanEnter.push(secCheck[i].name)
}

var takeGunerName = function(){
     return queue.filter(people => people.guns > 0)
}
var gunerList = takeGunerName();
for(var i =0;i<gunerList.length;i++ ){
    watchlist.push(gunerList[i].name)
}

var takeGun = function(){
    queue.map(function(e){
        if(e.guns>0){
            e.guns =0;
        }
    })
}

console.log('who can enter: '+ whoCanEnter);
console.log('watchlist: ' +watchlist);
takeGun();
console.log(queue);