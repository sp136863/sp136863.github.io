class Emmy1 {
  constructor(x, y) {
    this.x = x;
    this.y = 0;
    this.initY = y;
    this.num = 0;
    this.space_x = game.hero.x - this.x;
  }
  update() {
    this.y += 3;
    this.num += this.space_x / 150;
  };
  render(img) {
    game.ctx.drawImage(img, this.x + this.num, this.y + this.initY, 33, 34);
  }
};
//2
class Emmy2 {
  constructor(x, y) {
    this.x = x;
    this.y = 0;
    this.initY = y;
    this.count = 0;
    this.shot = true;
    this.emmy = false;
  }
  update() {
    this.y++;
    if (this.y > 300) {
      this.y = 300;
      if (this.shot) {
        // new bullet();
        setTimeout(() => { this.emmy = true; }, 1000);
        this.shot = false;
      }
    }
  };
  render(img) {
    game.ctx.drawImage(img, this.x, this.y + this.initY, 66, 48);
    // game.ctx.drawImage(img, this.rx, this.y + this.initY, 98, 67);
  }
};
//3
class Emmy3 {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
  }
  update() {
    this.y++;
  };
  render() {
    game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}