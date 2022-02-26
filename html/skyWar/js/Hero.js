class Hero {
  constructor() {
    this.image = game.R.hero;
    this.x = game.canvas.clientWidth / 2 - 16;
    this.y = game.canvas.clientHeight - 83;
    this.temp = 150;
    this.up = false;
    this.down = false;
    this.left = false;
    this.P1 = 122;
    this.P2 = 74;
    this.right = false;
    // this.myBulletArr = new Array();
  }
  update() {
    this.temp -= 3;
    if (this.temp < 0) {
      this.temp = 0;
    }
  }
  render() {
    let self = this;
    game.ctx.drawImage(this.image, this.P1, 0, this.P2, 87, this.x, this.y + this.temp, 32, 43);
  }
  move() {
    let self = this;
    window.onkeydown = function (e) {
      switch (e.keyCode) {
        case 38: self.up = true; self.P1 = 122; self.P2 = 74; break;
        case 40: self.down = true; self.P1 = 122; self.P2 = 74; break;
        case 37: self.left = true; self.P1 = 0; self.P2 = 54; break;
        case 39: self.right = true; self.P1 = 261; self.P2 = 54; break;
      }
    };
    window.onkeyup = function (e) {
      switch (e.keyCode) {
        case 38: self.up = false; self.P1 = 122; self.P2 = 74; break;
        case 40: self.down = false; self.P1 = 122; self.P2 = 74; break;
        case 37: self.left = false; self.P1 = 122; self.P2 = 74; break;
        case 39: self.right = false; self.P1 = 122; self.P2 = 74; break;
      }
    };
    setInterval(function () {
      if (self.up) {
        self.y -= 4;
        if (self.y < 0) { self.y = 0 };
      } else if (self.down) {
        self.y += 4;
        if (self.y > game.canvas.clientHeight - 43) { self.y = game.canvas.clientHeight - 43 };
      } else if (self.left) {
        self.x -= 4;
        if (self.x < 0) { self.x = 0 };
      } else if (self.right) {
        self.x += 4;
        if (self.x > game.canvas.clientWidth - 32) { self.x = game.canvas.clientWidth - + 32 };
      }
    }, 20);
  }
  // shot() {
  //   let self = this;
  //   let temp = 0;
  //   setInterval(function () {
  //     game.ctx1.clearRect(0, 0, 400, 550);
  //     temp += 10;
  //     if (temp % 100 == 0) {
  //       self.mybullet = new MyBullet(self.x + 12, self.y + self.temp - 20, 6, 14);
  //       self.myBulletArr.push(self.mybullet);
  //     }
  //     for (let i = 0; i < self.myBulletArr.length; i++) {
  //       if (self.myBulletArr[i].y < -5) {
  //         self.myBulletArr.splice(i, 1);
  //       }
  //       self.myBulletArr[i].update();
  //       self.myBulletArr[i].render();
  //     };
  //   }, 20);
  // }
}