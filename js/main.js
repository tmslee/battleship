class Game{
  constructor(){
    this.player = new Player(true);
    this.cpu = new Player(false);
    this.attacker = Math.random() < 0.5 ? this.player : this.cpu;
    this.winner;
  }

  changeAttacker(){
    this.attacker = this.attacker === this.player ? this.cpu : this.player;
  }
   
  startGame(){
    this.player.initializeShips();
    this.cpu.initializeShips();
    while(this.player.lives > 0 && this.cpu.lives > 0){
      let currAtt = this.attacker;
      let currDef = currAtt === this.player ? this.cpu : this.player;
      let attCoord = currAtt.getMove();
      currDef.checkHit(attCoord[0], attCoord[1]);
      this.changeAttacker();
    }
    this.winner = this.player.lives === 0? this.cpu : this.player;
  }

  declareWinner(){
    //interact with DOM elements and show winner. 
  }
}

class Player{
  constructor(user){
    this.user = user;
    this.board = new Array(10).fill(0).map(x => new Array(10).fill(0));
    this.lives = 0;
    this.notPlacedYet = Set(['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']);
  }
  
  getMove(){
    if(this.user){
      //interact with DOM to get user input from board and return [row, col]
    }
    else{
      //write some clever algo for cpu moves
    }
  }

  checkPlacable(shipType, orientation, row, col){

  }

  placeShip(shipType, orientation, row, col){

  }

  initializeShips(){

  }

  checkHit(row, col){

  }
}


