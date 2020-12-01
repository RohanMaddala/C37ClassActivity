class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();

    textSize(30);
    text("Game Start", 120,100);

    Player.getPlayerInfo();

    if (allPlayers!==undefined){

      var pos = 130;

      for(var plr in allPlayers){

        //plr = player1  or player2 or player3 or player4
        if (plr === "player" + player.index){
            fill("red");
        }
        else {
          fill("black");
        }
        textSize(15);
        text (allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, pos);
        pos += 20;
      }

      if (keyDown("up")){
        player.distance +=50;
        player.update();  //update distance into firebase db

      }
    }

  }
}
