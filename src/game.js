'use-strict'

function Game () {
    this.canvas = null;
    this.ctx = null;
    this.ingredients = [];
    this.ingredients2 = ["bun", "bun", "burger", "cheese", "salad","tomato"];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.burger = []
}

// Create `ctx`, a `player` and start the Canvas loop
Game.prototype.start = function() {
    this.canvasContainer = document.querySelector('.canvas-container')
    this.canvas = this.gameScreen.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    
    this.canvas.style.background = "url('./images/classic-checkerboard.jpg')";


    this.livesEle = this.gameScreen.querySelector('.lives .value');
    this.scoreEle = this.gameScreen.querySelector('.score .value');

    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    this.player = new Player(this.canvas, 3);

    
    this.handleKeyDown = function (event) {
        if(event.key === "ArrowLeft") {
            console.log("left");
            this.player.setDirection('left');
        } else if (event.key === "ArrowRight") {
            console.log("right");
            this.player.setDirection('right');
            }
          else if (event.key === 'ArrowDown') {
              this.serveBurger('down');
          }
    }

    var gameReference = this;

    document.body.addEventListener('keydown', this.handleKeyDown.bind(gameReference));

    this.startLoop();
};

Game.prototype.startLoop = function() {

    var loop = function () {
        //console.log('in loop');

        if(Math.random() > 0.98) {
            var randomX = this.canvas.width * Math.random();
          
            var ingredient = new Ingredients(this.canvas, randomX, 5, this.ingredients.randomIngredient);
            this.ingredients.push(ingredient); 
            //console.log(ingredient)
            }

        this.checkCollisions();
        this.player.handleScreenCollision();

        this.ingredients = this.ingredients.filter(function(ingredientObj) {
            ingredientObj.updatePosition();
            
            return ingredientObj.isInsideScreen();
        });

        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

        this.player.draw();

        this.ingredients.forEach(function(ingredientObj) {
            ingredientObj.draw();
        })

        if(!this.gameIsOver) {

        window.requestAnimationFrame(loop);
    }
    
   this.updateGameStats();
}.bind(this);

window.requestAnimationFrame(loop);


};

Game.prototype.checkCollisions = function() {

        this.ingredients.forEach( function(ingredient) {
          //console.log(ingredient.randomIngredient)
          // We will implement didCollide() in the next step
          if ( this.player.didCollide(ingredient) ) {
      
            //this.player.removeLife();
           // console.log('lives', this.player.lives);

            this.checkIngredients(ingredient.randomIngredient);
           
             this.burger.push(ingredient.randomIngredient); 
            
            // Move the enemy off screen to the left
            ingredient.y = 0 - ingredient.size;
      
            if (this.player.lives === 0) {
              this.gameOver();
            }
          }
        }, this);
        // We have to bind `this`
        // as array method callbacks have a 

};

// Burger array should contain two buns, no duplicates, no false ingredients

Game.prototype.checkIngredients = function() {

    if (this.burger.sort().join() !== this.ingredients2.join()) {
        //this.burger.push(ingredient); 
        
        console.log(this.burger)
        return false
    } else if (this.burger.sort().join() === this.ingredients2.join()) {
        console.log(this.burger)
        return true;
    }
}

//If the burger has the correct ingredients return true or false 
/*
Game.prototype.checkBurger = function() {

var ing = this.ingredients.randomIngredient;
if(this.checkIngredients(ing) === true) {
    return true
} else {
return false
}
}
*/

//Serve Burger??

Game.prototype.serveBurger = function(serve) {
    /*if(checkIngredients(`${source}`) === true) {
     this.score += 1;
    };
    this.score += 1;*/
    if(serve === 'down') {
        this.burger.length = 6;
        if(this.checkIngredients() === true) {
       
            this.score += 1;
        } else if ( this.checkIngredients() === false) {

           
            this.player.removeLife();
            
           // console.log(ing)
        }

        }
}

Game.prototype.updateGameStats = function() {
    this.livesEle.innerHTML = this.player.lives;
    this.scoreEle.innerHTML = this.score;
  };

Game.prototype.passGameOverCallback = function(gameOver) {
    this.onGameOverCallback = gameOver;

};

Game.prototype.gameOver = function() {
      // flag `gameIsOver = true` stops the loop
     this.gameIsOver = true;
     this.onGameOverCallback();
    console.log('GAME OVER');
  
  // Call the gameOver function from `main` to show the Game Over Screen
  //...

};

Game.prototype.removeGameScreen = function() {
    this.gameScreen.remove();
};