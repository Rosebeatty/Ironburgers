'use-strict'

function Player (canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.size = 100;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.size;
    this.direction = 0;
    this.speed = 5;
    this.chefList = ['chef']
    this.chef = this.chefList[Math.floor(Math.random() * this.chefList.length)]

}


Player.prototype.setDirection = function(direction) {

    if(direction === 'left') {
        this.direction = -1;
    } else if (direction === "right") {
        this.direction = 1;
    }
};

Player.prototype.caughtIngredient = function() {
}


Player.prototype.didCollide = function(ingredient) {
    
        var playerLeft = this.x;
        var playerRight = this.x + this.size;
        var playerTop = this.y;
        var playerBottom = this.y + this.size;
      
        var ingredientLeft = ingredient.x;
        var ingredientRight = ingredient.x + ingredient.size;
        var ingredientTop = ingredient.y;
        var ingredientBottom = ingredient.y + ingredient.size;
      
        // Check if the ingredient intersects any of the player's sides
        var crossLeft = ingredientLeft <= playerRight && ingredientLeft >= playerLeft;
          
        var crossRight = ingredientRight >= playerLeft && ingredientRight <= playerRight;
        
        var crossBottom = ingredientBottom >= playerTop && ingredientBottom <= playerBottom;
        
        var crossTop = ingredientTop <= playerBottom && ingredientTop >= playerTop;
      
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
          return true;
        }
        return false;

};

Player.prototype.handleScreenCollision = function() {
        this.x = this.x + this.direction * this.speed;

        var screenTop = 0;
        var screenBottom = this.canvas.height;

        if(this.x > screenBottom) {
            this.direction = -1
        } else if (this.x< screenTop) {
                this.direction = 1;
            }
        }

Player.prototype.removeLife = function() {
        if (this.lives >= 1) {this.lives -= 1;

       
        }
};

Player.prototype.draw = function() {
    var image = new Image();
    const imageUrl = `./images/${this.chef}.jpg`;
    image.src  = imageUrl;
    this.ctx.drawImage(image, this.x, this.y, this.size, this.size);

};