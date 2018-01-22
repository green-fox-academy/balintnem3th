let TennisGame3 = function(player1Name, player2Name) {
    this.player2 = 0;
    this.player1 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame3.prototype.getScore = function() {
    let score;
    if ((Math.max(this.player1 , this.player2 )< 4) && this.player1 + this.player2 < 6) {
        let point = ["Love", "Fifteen", "Thirty", "Forty"];
        score = point[this.player1];
        return (this.player1 === this.player2) ? score + "-All" : score + "-" + point[this.player2];
    } 
    else {
        if (this.player1 === this.player2){
            return "Deuce";
        }
        score = this.player1 > this.player2 ? this.player1Name : this.player2Name;
        return ((this.player1 - this.player2) * (this.player1 - this.player2) == 1) ? "Advantage " + score : "Win for " + score;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName === "player1"){
        this.player1 += 1;
    }
    else{
        this.player2 += 1;
    }
};
if (typeof window === "undefined") {
    module.exports = TennisGame3;
}