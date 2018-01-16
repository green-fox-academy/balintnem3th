'use strict';
// Create and object called car
//  - It should store its petrol level called petrolLevel
//  - It should store its petrol capacity called petrolCapacity
//  - It should have a refill(amount) method, that increments the petrol level,
//    than returns how much petrol it consumed from the given amount
//  - Initialize the petrol level to zero and the capacity to 50 
//
// Create an object called station
//  - It should store petrol amount called petrolStorage
//  - It should have a provide(car) method that calls the refill method of the car
//    with the stored petrol amount as a parameter, then decrement the used petrol
//  - Initialize the petrol amount to 3000


class Car {

    constructor(petrolLvl,capacity) {
      this.petrolLvl = petrolLvl;
      this.capacity = capacity;
    }
  
    refill(amount) {
      
      this.petrolLvl += amount;
      console.log(this.petrolLvl);
      console.log()
    }
  }
  
  class Station{
    constructor(petrolStorage){
      this.petrolStorage = petrolStorage;
    }
    provide(car){
        car.refill(petrolStorage)
    }
  }

var kocsi =  new Car(0,50);
console.log(kocsi.petrolLvl);
var station = new Station(3000);

