'use strict';

// Creates DOM elements from a string representation
function buildDom(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString

   return div.children[0]
};

// Runs on initial start and contains calls all other functions that manage the game
function main() {
  var game; // instance of the Game
  var splashScreen; // Start Screen
  var gameOverScreen;
  var instructionsScreen;


  function createInstructionsScreen() {
    instructionsScreen = buildDom(`
    <main>
    <h1 id="">Instructions</h1>
    <p id="objective"> <span>Objective:</span></p>
    <p id="controls"> <span>Controls</span></p>
    

    <button id="back-button">Back</button>
   
    </main>
    
    `);
    removeSplashScreen();
    
    document.body.appendChild(instructionsScreen);

    var backButton = instructionsScreen.querySelector('button');

    backButton.addEventListener('click', backToSplashScreen);
  }


  function backToSplashScreen() {
    removeInstructionsScreen();
    createSplashScreen();
  }
  

  function removeInstructionsScreen() {
    instructionsScreen.remove();

};
    
  // -- splash screen

  function createSplashScreen() {
      splashScreen = buildDom(`
      <main style="background: url(./images/burger.png) no-repeat;
      background-size:800px 800px; background-color:black; background-position: 50% 5%;">
        <h1 id="splash-title">IRONBURGERS</h1>
       
        <button id="start-button">START</button>
        <button id="instructions-button"">INSTRUCTIONS</button>
        <label id="name-input">YOUR NAME: </label>
        <input class="player-name" type="text" maxlength="6">
        </main>`
      );

    
    document.body.appendChild(splashScreen);

    var startButton = splashScreen.querySelector('button');
    
    startButton.addEventListener('click', startGame);

    var instructionsButton = splashScreen.querySelector('button:nth-of-type(2)');

    instructionsButton.addEventListener('click',  createInstructionsScreen);

  }

  function removeSplashScreen() {
        splashScreen.remove();

  };


  // -- game screen

  function createGameScreen() {
    var gameScreen = buildDom(`
    <main class="game container">
      <header>
      <div class="time">
          <span class="label">TIME:</span>
          <span class="value"></span>
        </div>
        <div class="lives">
          <span class="label">LIVES:</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">SCORE:</span>
          <span class="value"></span>
        </div>
      </header>
      <div class="canvas-container">
      
        <canvas></canvas>
      </div>
      <div class="collected2">
      <span class="label" id="collect">INGREDIENTS:</span>
      <div class="collected">
      </div>
      </div>
    </main>
  
  `);

    document.body.appendChild(gameScreen);
    return gameScreen;
  };

  

  function removeGameScreen() {
      game.removeGameScreen();

  };


    
  // -- game over screen

  function createGameOverScreen(score) {
    gameOverScreen = buildDom(`
      <main>
        <h1 id="game-over">GAME OVER</h1>
        <p id="your-score">Your Score: <span></span></p>
        
        <div id="score-board">SCOREBOARD</div>

        <button id="restart-button">RESTART</button>
       
        </main>
    `);
  
    var button = gameOverScreen.querySelector('button');
    button.addEventListener('click', startGame);
  
    var span = gameOverScreen.querySelector('span');
    span.innerText = score;
  
    document.body.appendChild(gameOverScreen);
  }

  function removeGameOverScreen() {
    if (gameOverScreen !== undefined) {
      gameOverScreen.remove();
    }
  }

  // -- Setting the game state 

  
function startGame() {
    removeSplashScreen();
    // later we need to add clearing of the gameOverScreen
    removeGameOverScreen();
  
    game = new Game();
    game.gameScreen = createGameScreen();
  
    game.start();
    // End the game
    game.passGameOverCallback( function() {		// <-- UPDATE
        gameOver(game.score);					// <-- UPDATE
      });
  }


  function gameOver(score) {
    removeGameScreen();
    createGameOverScreen(score);
  };

    
  // -- initialize Splash screen on initial start
  createSplashScreen();
}

// Runs the function `main` once all resources are loaded
window.addEventListener('load', main);