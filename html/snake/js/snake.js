class Snake {
  constructor() {
    this.w = game.w;
    this.h = game.h;
    this.createSnake();
  }
  createSnake() {
    for (let i = 0; i < game.body.length; i++) {
      this.r = Math.floor(Math.random() * 256);
      this.g = Math.floor(Math.random() * 256);
      this.b = Math.floor(Math.random() * 256);
      let snake = document.createElement('div');
      game.snakeArr.appendChild(snake);
      snake.style.cssText = `width:${this.w}px; height:${this.h}px;position: absolute;
      top:${game.body[i].y * this.w}px;left:${game.body[i].x * this.w}px;background:rgb(${this.r},${this.g},${this.b})`;
    }
  }
}