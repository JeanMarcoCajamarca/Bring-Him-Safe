// this files is singular not plural, so idk how it is gonna work and run... JK 11.27.2026
(function() {
    var game = this.BringHimSafe = this.BringHimSafe || {};
// put common scene logic into 'scene' object.
    var scene = {
    node: document.querySelector('.scene'),
    show: function() {
        this.node.classList.remove('out');
        this.node.classList.add('in');
        }
    },
    hide: function() {
        this.node.classList.remove('in');
        this.node.classList.add('out');
    }
};
// scene instances code to go here
    var gameScene = game.gameScene = Object.create(scene);
    gameScene.node = document.getElementById('game-scene');
    gameScene.handleInput = function() {    
        document.getElementById('finish-btn').onclick = function() {
            game.flow.finishLevel();
        };
        document.getElementById('gameover-btn').onclick = function() {
            game.flow.gameOver();
        };
};
    var startScene = game.startScene = Object.create(scene);
    startScene.node = document.getElementById('start-scene');
    startScene.handleInput = function() {    
        document.getElementById('start-btn').onclick = function() {
            game.flow.nextLevel();
        };
};
    var summaryScene = game.summaryScene = Object.create(scene);
    summaryScene.node = document.getElementById('summary-scene');
    summaryScene.handleInput = function() {    
        document.getElementById('next-level-button').onclick = function() {
            game.flow.nextLevel();
        };
};
)();
