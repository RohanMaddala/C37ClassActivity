class Player {
  constructor(){
    this.index=null;
    this.name=null;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name : this.name,
      distance : this.distance
    });
  }

  static getPlayerInfo() {
    var ref = database.ref('players')
    ref.on('value',function(data){
     allPlayers = data.val(); 
    })
    console.log(allPlayers);
  }

}

/*JSON
allPlayers = {player1, player2, player3, player4}
player1 = {name:, distance: }
player2 = {}

*/


/*
{
  gameState : 0,
  playerCount : 0,
  players:{
    player1 : {
      name: 
      distance
    }
    player2 : {
      name: 
      distance
    }
  }
    
}


Game Start
Rohan: 0
Naren: 0
Rayan: 0
Ravtej:0

*/