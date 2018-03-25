import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shufflerTitle : string = 'Shuffler-Box-App';
  buttonText : string = 'Create People';
  arrayLength : number;
  nameText : string;
  ageNumber: string;
  classText:string;
  peopleArray = [];
  person={name:'',age:'',class:''};

  constructor() { }
  
  ngOnInit() {
    this.arrayLength = this.peopleArray.length;
  }

  createPerson(){
    this.person = {name:this.nameText,age:this.ageNumber,class:this.classText};
    this.peopleArray.push(this.person);
    this.person={name:'',age:'',class:''};



  }

}

