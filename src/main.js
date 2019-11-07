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
    <main id="instructions-main">
    <h2 id="instructions-title">HOW TO PLAY</h2>

    <div id="objective-text"> 
    <p>Objective: Serve as many burgers as possible in 100 seconds and without losing all 3 lives</p>
 </br>
    <p>Make a burger by collecting two buns, a tomato, salad, a patty and cheese.</p>
    </br>
    <p> Burger = 100 points </p>
    </br>
    <p>Lose a life by serving a burger containing the wrong ingredients</p>
    </br>
    

</div>

    <h2 id="objective"> Controls</h2>
  
    

    <button id="back-button">Back To Menu</button>
   
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
      <main stlye="background-color:black;">
       <div id="title-page">
        <h1 id="splash-title">IRONBURGERS</h1>
        <button id="start-button">START</button>
        <button id="instructions-button"">HOW TO PLAY</button>
        <input class="player-name" type="text" maxlength="6" placeholder="Your Name"s>
       </div>
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
    <main class="game container" id="gameTop">
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
        <table id="score-board">
        <p id="score-title"> SCOREBOARD</p>
        <tbody>
        <tr>
        <th id ="userName">Name</th>  
        </tr>
        <tr>
        <th id="userScore">Score</th>
        </tr>
        </tbody>
        </table>
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
  
    var name = splashScreen.querySelector('.player-name').value
    console.log(name);
    game = new Game(name);
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