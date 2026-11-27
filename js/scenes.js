//Learning this from a 2014 book called HTML5 Game Development HOTSHOT from Makzan, PACKT Publishing
var gameoverScene = game.gameoverScene = Object.create(scene);
gameoverScene.node = document.getElementById('gameover-scene');
gameoverScene.handleInput = function() {
  var scene = this;
  document.getElementById('back-to-menu-button').onclick =  
function() {
    game.flow.startOver();
  };
};