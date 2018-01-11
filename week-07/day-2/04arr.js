'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false].join().replace("2","Croissant").replace("false","Ice Cream").split();

// Accidentally we added "2" and "false" to the array. 
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
console.log(shop_items);

