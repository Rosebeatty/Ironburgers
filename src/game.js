'use-strict'

function Game () {
    this.canvas = null;
    this.ctx = null;
    this.ingredients = [];
    this.ingredients2 = ["bun", "bun2", "cheese", "patty","salad","tomatoes"];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.burger = [];
    this.gameTime = 100;
    this.countFrames = 0;
    this.countBack = 0;
    this.countSeconds = 0;
    
  
}

// Create `ctx`, a `player` and start the Canvas loop
Game.prototype.start = function() {
    this.canvasContainer = document.querySelector('.canvas-container')
    this.canvas = this.gameScreen.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    
    this.canvas.style.background = "url('./images/bg.jpg')";
    this.canvas.style.backgroundSize = "contain";
    this.canvas.style.marginBottom = "20px;";


    this.livesEle = this.gameScreen.querySelector('.lives .value');
    this.scoreEle = this.gameScreen.querySelector('.score .value');
    this.timerEle = this.gameScreen.querySelector('.time .value');
    this.collectedEle = this.gameScreen.querySelector('.collected');
    this.collectedBurgerEle = this.gameScreen.querySelector('.collected2');

    

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

   // console.log(this.currentTime)

      
    var gameReference = this;

    document.body.addEventListener('keydown', this.handleKeyDown.bind(gameReference));


    this.startLoop();
};



Game.prototype.startLoop = function() {

    var loop = function () {
        //console.log('in loop');


        if(Math.random() > 0.98 && Math.random() > 0.55) {
            var randomX = this.canvas.width * Math.random();
            var ingredient = new Ingredients(this.canvas, randomX, 2.4, this.ingredients.randomIngredient);
            this.ingredients.push(ingredient); 
            //console.log(ingredient)
            }


        //this.timer = Math.floor(this.counter / 60);   
        this.countFrames++
        this.countSeconds = Math.floor(this.countFrames /60);
        this.countBack = this.gameTime - this.countSeconds;

        
        if(this.countBack=== 0) {
            this.gameOver();
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
           
            if(this.burger.length >= 6) {
                this.burger.length = 6;
            } else {
                this.burger.push(ingredient.randomIngredient); 
                this.collectedEle.appendChild(document.createElement('img')).src = `./images/${ingredient.randomIngredient}.png`;

            }
             
            
            // Move the enemy off screen to the left
            ingredient.y = 0 - ingredient.size;
      
            if (this.player.lives === 0) {
              this.gameOver();
            }
          
           //var time1 = parseInt(new Date().getTime());
           //console.log(time1 /3600000000)
        
        
          }
        }, this);
     
};

// Burger array should contain two buns, no duplicates

Game.prototype.checkIngredients = function() {

    if (this.burger.sort().join() !== this.ingredients2.join()) {
        //this.burger.push(ingredient); 
        
        console.log(this.burger)
        return false;
    } else if (this.burger.sort().join() === this.ingredients2.join()) {
        console.log(this.burger)
        return true;
    }
}


Game.prototype.serveBurger = function(serve) {
    /*if(checkIngredients(`${source}`) === true) {
     this.score += 1;
    };
    this.score += 1;*/
    if(serve === 'down') {
        if(this.checkIngredients() === true) {
            this.score += 100;
            this.burger=[];
             this.collectedEle.innerHTML = "";
             this.collectedBurgerEle.appendChild(document.createElement('img')).src = `./images/burger.png`;
        } else if ( this.checkIngredients() === false) {
            this.player.removeLife();
            this.burger=[];
            this.collectedEle.innerHTML= "";
           // console.log(ing)
        }

        }
}

Game.prototype.updateGameStats = function() {
    this.livesEle.innerHTML = this.player.lives;
    this.scoreEle.innerHTML = this.score;
    this.timerEle.innerHTML = this.countBack;

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