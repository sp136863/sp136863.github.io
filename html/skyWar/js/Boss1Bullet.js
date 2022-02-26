class Boss_1_Bullet {
  constructor(img, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.xx = game.hero.x;
    this.yy = game.hero.y;
  }
  update_1() {
    this.y += 2;
  }
  update_2() {
    this.y += 2;
    if (this.y >= 300) {
      this.x += 2;
    } else {
      this.x -= 2;
    }
  }
  update_3() {
    this.y += 2;
    if (this.y >= 300) {
      this.x += 4;
    } else {
      this.x -= 4;
    }
  }
  update_4() {
    this.y += 2;
    if (this.y >= 300) {
      this.x -= 2;
    } else {
      this.x += 2;
    }
  }
  update_5() {
    this.y += 2;
    if (this.y >= 300) {
      this.x -= 4;
    } else {
      this.x += 4;
    }
  }
  render() {
    game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}