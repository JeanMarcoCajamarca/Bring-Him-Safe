//Will this even run? LOL, JK 11/27/2026
(function() {
    //Entry Point
    var init = function() {
        game.startScene.handleInput();
        game.summaryScene.handleInput();
        game.gameoverScene.handleInput();
        game.gameScene.handleInput();
    };

    init(); // start the damn game! jeeeez!
}) (); //self-executing function
// Main Game Logic below
game.flow = {
  currentLevel: 3,
  startLevel: function() {
    game.quest = new game.Quest(this.currentLevel);
    game.gameScene.visualize(game.quest);      
  },
  startOver: function() {
    game.startScene.hide();
    game.summaryScene.hide();
    game.gameoverScene.hide();
    game.gameScene.hide();
    game.startScene.show();
  },
  gameWin: function() {
    game.gameScene.hide();
    game.summaryScene.show();
  },
  gameOver: function() {
    game.startScene.show();
    game.gameScene.hide();
    game.gameoverScene.show();
  },
  nextLevel: function() {
    game.startScene.hide();
    game.summaryScene.hide();
    game.gameScene.show();
  },
  finishLevel: function() {
    game.gameScene.hide();
    game.summaryScene.show();
  },
}

var init = function() {
  game.flow.startLevel();
}