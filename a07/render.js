import Game from "./engine/game.js";
let start = false;

 const RenderGame = function(game) {
    for(let i = 0; i < game.gameState.board.length; i++){
        console.log(game.gameState.board[i]);

      //  $(`#${i}`).html(game.gameState.board[i].toString());
document.getElementById(`${i}`).innerHTML = game.gameState.board[i];
       console.log($(`#${i}`));
     //  console.log($(`#${i.toString(10)}`));
    }
}

 const handleKeyPress = function(key, gamer){
    switch (key) {
        case '&':
            gamer.move('up');
            break;
        case '(':
            gamer.move('down');
            break;
        case '%':
            gamer.move('left');
            break;
        case '\'':
            gamer.move('right');
            break;
    }

}

 const newGame = function(game){
   
   document.getElementById("scorer").innerHTML = "Your score: 0";
 
     if(start == false){
         start = true;
     
         $('#restart').on("click", function(){
          
            for(let i = 0; i < game.gameState.board.length; i++){
            document.getElementById(`${i}`).innerHTML = "";
            }
           game.setupNewGame();
            document.getElementById("comment").innerHTML = "";
            newGame(game);
        });
        }
$(document).keydown(function(e){
                 var s = String.fromCharCode(e.which);
                 handleKeyPress(s, game);
                 loadgame(game);
  

             });
    RenderGame(game);
};

 const loadgame = function(game){
    RenderGame(game);
   
    document.getElementById("scorer").innerHTML = "Your score: " + game.gameState.score;
    

 if(game.gameState.won == true){
            document.getElementById("comment").innerHTML = "You reached 2048! Good job!";

        }
    if(game.gameState.won == true && game.gameState.over == true){
        document.getElementById("comment").innerHTML = "You reached 2048! But your score should be higher. Press Restart" ;
    }

    if(game.gameState.over == true){
        document.getElementById("comment").innerHTML = "Game Over. Final Score: " + game.gameState.score + ". Press Restart";
    } 
  
}

$(document).ready(function () {
    let game = new Game(4);
    newGame(game);
});
