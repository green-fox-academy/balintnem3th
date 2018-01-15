'use strict';

class Animal{

    constructor(){
        this.hunger = 5;
        this.thirst = 5;
    }

    eat(){
      this.hunger -= 1;
    }
    drink(){
        this.thirst -= 1;
    }
    play(){
        this.hunger += 1;
        this.thirst += 1;
    }
}

class Farm{

    constructor(animalAmount){
        this.slots = 2;
        this.list = [];
        this.animalAmount = animalAmount;
    }

    createAnimalList(){
        var i =0;
        while(i !== this.animalAmount){
            let newAnimal = new Animal;
            this.list.push(newAnimal);
            i+=1;
        }
    }

    breed(){
     if(this.slots !== 0){
        let newAnimal = new Animal;
        this.list.push(newAnimal);
        this.slots -= 1;
      } 
    }
    slaughter(){
        var minHungry = this.list[0].hunger;
        var minIndex = 0;
        for(var i=0;i<this.list.length;i++){
            if(this.list[i].hunger<minHungry){
                minHungry = this.list[i].hunger;
                minIndex = i;
            } 
        }
        this.list.splice(minIndex, 1);
    }
    printReport(){
        var report = "";
        if(this.list.length === 0){
            report = "bankrupt" ;
        }
        else if(this.list.length>0 && this.list.length < this.slots){
            report = "okay";
        }
        else{
            report = "full";
        }
        console.log("The farm has "+ this.list.length + " living animal we are "  + report);

    }
   progress(){

        for(var i=0;i<this.list.length;i++){
            var eatChance = Math.floor(Math.random() * Math.floor(2));
            var drinkChance = Math.floor(Math.random() * Math.floor(2));
            var playChance = Math.floor(Math.random() * Math.floor(2));
            if(eatChance === 1){
                this.list[i].eat();
            }
            if(drinkChance === 1){
                this.list[i].drink();
            }
            if(playChance === 1){
                this.list[i].play();
            }
        }
        this.slaughter();
        this.printReport();
    }
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);
SheepFarm.createAnimalList();
console.log(SheepFarm.list); // Should log 20 Animal objects
const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', SheepFarm.progress.bind(SheepFarm));

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full