'use-strict'
class Ingredients {
constructor (canvas, x, speed){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.size = 50;
    this.x = x;
    this.y = 0;
    this.speed = speed;
    this.images;
    this.ingredientsList = ["bun", "bun2", "salad", "cheese", "tomatoes", "patty"];
    this.randomIngredient = this.ingredientsList[Math.floor(Math.random() * this.ingredientsList.length)]
    
} 

draw() {
    var image = new Image();
    const imageUrl = `./images/${this.randomIngredient}.png`;
    image.src  = imageUrl;
    this.ctx.drawImage(image, this.x, this.y, 60, 40);

};


updatePosition() {
    this.y =  this.y + this.speed;

};

isInsideScreen() {
    return this.y + this.size  > 0
};
}