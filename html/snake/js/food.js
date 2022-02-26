class Food {
  constructor() {
    this.w = game.w;
    this.h = game.h;
    this.x = Math.floor(Math.random() * game.xcount);
    this.y = Math.floor(Math.random() * game.ycount);
    this.container = game.container;
    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);
    this.food = document.createElement('div');
    this.food.style.cssText = `width:${this.w}px; height:${this.h}px;background:rgb(${this.r},${this.g},${this.b});
    position: absolute;top:${this.y * this.h}px;left:${this.x * this.w}px; border-radius:5px`;
    this.container.appendChild(this.food);
  }
}