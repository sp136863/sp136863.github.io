class Background {
  constructor() {
    this.image = game.R.background;
    this.width = game.canvas.clientWidth;
    this.height = game.canvas.clientHeight;
    this.step = 0;
  }
  update() {
    this.step++;
    if (this.step > 550) {
      this.step = 0;
    }
  }
  render() {
    game.ctx.drawImage(this.image, 0, 0 + this.step, this.width, this.height);
    game.ctx.drawImage(this.image, 0, -550 + this.step, this.width, this.height);
  }
}


