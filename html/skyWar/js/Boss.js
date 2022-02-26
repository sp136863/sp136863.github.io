class Boss {
  constructor(x, y, w, h) {
    // this.img = game.R.boss1;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.blood = 500;
  };
  update() {
    this.y++;
    if (this.y > 100) {
      this.y = 100;
    }
  };
  render(img) {
    game.ctx.drawImage(img, this.x, this.y, this.w, this.h);
  }
}