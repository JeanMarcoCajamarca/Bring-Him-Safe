//Learning this from a 2014 book called HTML5 Game Development HOTSHOT from Makzan, PACKT Publishing
var gameoverScene = game.gameoverScene = Object.create(scene);
gameoverScene.node = document.getElementById('gameover-scene');
gameoverScene.handleInput = function() {
  var scene = this;
gameScene.visualize = function(quest) {
  var questData = quest.data;
  var patternsToShow = [];
  for (var i in questData) {
    for (var j in questData[i]) {
      patternsToShow.push(questData[i][j]);
    }
  }
  //Quest
  // visualize the quest composition view:
  var questCompositionNode = document.getElementById('quest-composition');
  // empty the DOM view
questCompositionNode.removeAllChildren();
  // visualize the pattern view:
  for (var i in patternsToShow) {
    var patternNode = document.querySelector('#element-template.pattern').cloneNode(/*clone children=*/true);
    patternNode.setAttribute('data-pattern', patternsToShow[i]);
    questCompositionNode.appendChild(patternNode);
  }    
};

function() {
    game.flow.startOver();
  };
};