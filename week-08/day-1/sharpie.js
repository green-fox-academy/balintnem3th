class Sharpie{

    constructor(color,width,){
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
    }

    use(){
      this.inkAmount -= this.width;
    }
}

var redSharpie = new Sharpie('red',5);
  
while(redSharpie.inkAmount >= 0){
    console.log("inkAmount:" + redSharpie.inkAmount);
    redSharpie.use();
}