'use-strict'

function Ingredients (canvas, x, speed){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 80;
    this.x = x;
    this.y = 0;
    this.speed = speed;
    this.images;
    this.ingredientsList = ["bun", "bun2", "salad", "cheese", "tomatoes", "patty"];
    this.randomIngredient = this.ingredientsList[Math.floor(Math.random() * this.ingredientsList.length)]
    
}
    

Ingredients.prototype.draw = function() {
   
    var image = new Image();
    const imageUrl = `./images/${this.randomIngredient}.png`;
    image.src  = imageUrl;
    this.ctx.drawImage(image, this.x, this.y, this.size, this.size);

};

Ingredients.prototype.collect = function() {
   
    var image = new Image();
    image.src  = 
    this.ctx.drawImage(image, this.x, this.y, this.size, this.size);

};


Ingredients.prototype.updatePosition = function() {
    this.y =  this.y + this.speed;

};

Ingredients.prototype.isInsideScreen = function() {
    return this.y + this.size  > 0
};