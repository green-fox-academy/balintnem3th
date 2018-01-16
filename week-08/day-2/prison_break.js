// Create a prison function, that has your name as a private fugutive variable
// The function should return an object that has two methods:
//  - visit() // logs "[yourname] is visited [x] time(s)" to the console.
//    - the [x] times displayes the numbers the function is called
//    - If the fugitive variable is empty, then display "Nobody is here anymore"
//  - escape() // logs "BREAKING NEWS, [yourname] escaped the prison" to the console.
//    - it should empties the fugitive variable
function prison (name){

    class Person{
        constructor(name){
            this.name = name;
            this.counter = 1;
            this.visit = function(){
                if(this.name === ''){
                    console.log("Nobody is here anymore");
                }
                else{
                console.log(this.name + 'is visited ' + this.counter + 'times');
                this.counter += 1; }
            };
            this.escape = function(){
                console.log('BREAKING NEWS : ' + this.name + ' escaped the prison');
                this.name = '';
            };              
        }
    }
    return new Person(name);
}

const alcatraz = prison('Sad Panda');
alcatraz.visit() // Sad Panda is visited 1 time(s)
alcatraz.visit() // Sad Panda is visited 2 time(s)
alcatraz.escape() // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit() // Nobody is here anymore