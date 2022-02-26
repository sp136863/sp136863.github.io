class MyBullet {
  constructor(x, y, w, h) {
    this.image = game.R.mybullet;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  update() {
    this.y -= 8;
  };
  render() {
    game.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  }
}