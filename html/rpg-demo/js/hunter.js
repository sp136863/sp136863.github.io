class Hunter {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.prite_step = 0;
  }
  update() {
    this.prite_step++;
    if (this.prite_step % 10 === 0) {
      this.prite_step = 0;
      this.x++;
      if (this.x > 3) {
        this.x = 0;
      }
    }
  }
  render() {
    game.ctx.drawImage(game.R.hunter, this.x * 95, this.y, this.w, this.h, 400, 292, 16, 28);
  }
}