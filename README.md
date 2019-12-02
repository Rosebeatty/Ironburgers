# IRONBURGERS

## Description
Ironburgers is a game where the chef (player) must catch 6 ingredients to make a burger (Two buns, a burger, cheese, tomato and lettuce). The player serves burgers to gain points and has 100 seconds to make and serve as many burgers as possible. If the chef tries to serve a burger containing the wrong ingredients, they must make the burger again from scratch. The game is over when the chef serves 3 wrong burgers, or after 100 seconds. 


</br>

## MVP (DOM - CANVAS)
A Canvas game in which the player catches burger ingredients and serves burgers.

</br>

## Backlog
    -False Ingredients 
    -Burger must be in a particular order  
    -Levels 



## Data structure
<h2>Main.js</h2>


    createSplashScreen(){
    } 
    createGameScreen(){
    } 
    createGameOverScreen(){
    }



<h2> Game.js</h2>

    Game(){
      this.canvas;
      this.ctx; 
      this.ingredients; 
      this.player; 
      this.gameIsOver;
      this.gameScreen; 
      this.score; 
      this.burger;
    }

    Game.prototype.start(){

    }

    Game.prototype.startLoop(){

    }

    Game.prototype.checkCollision(){

    }

    Game.prototype.checkBurger(){

    }

    Game.prototype.checkIngredients(){

    }

    Game.prototype.updateGameStats(){

    }

    Game.prototype.gameOver(){

    }

    Game.prototype.removeGameScreen(){

    }

    Game.prototype.drawCanvas(){ 
    }

   

<h2>Player.js</h2>

    Player() {
        this.canvas; 
        this.ctx;
        this.size;
        this.x;
        this.y;
        this.speed;
        this.direction;
        this.lives
    }


    Player.prototype.setDirection(){

    }

    Player.prototype.caughtIngredient(){

    }

    Player.prototype.serveBurger(){

    }

    Player.prototype.removeLife() {
      
    }

    Player.prototype.playerImage() {

    }

  

<h2>Ingredients.js</h2>

    Ingredients() {
        this.canvas; 
        this.ctx;
        this.size;
        this.x;
        this.y;
        this.speed;
        this.images;
    }


    Ingredients.prototype.updatePosition() {

    }

    Ingredients.prototype.isInsideScreen () {
        
    }

    Ingredients.prototype.ingredientsImage () {

    }

    

## States and State Transitions


    - createSplashScreen()
        - addEventListener(startGame)
      
      
    - startGame()
      - create new Game()
      - game.start()
      
      
    - gameOver()
      - createGameOverScreen()
      - addEventListener(startGame)



## Tasks
    Main - buildDom 
    Main - createSplashScreen 
    Main - addEventListener 
    Main - createGameScreen 
    Game - createdGameOverScreen 
    Game - start 
    Game - removeGameScreen 
    Game - updateGameStats 
    Game - drawCanvas 
    Game - gameOver 
    Game - checkCollision 
    Game - checkIngredients 
    Game - checkBurger 
    Player - setDirection 
    Player - caughtIngredient 
    Player - serveBurger 
    Player - removeLife 
    Player - playerImage 
    Ingredients - updatePosition 
    Ingredients - isInsideScrren 
    Ingredients - ingredientsImage 



## Links

  ### Trello
  https://trello.com/invite/b/xTLLCaOx/d77ae65958d049690f5a47848254994d/ironburgers


  ### Git


  ### Slides


