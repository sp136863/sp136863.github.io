class Map {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.up = true;
    this.down = true;
    this.left = true;
    this.right = true;
    this.img = img;
    this.code = null;
  }
  render() {
    game.ctx.drawImage(this.img, this.x, this.y, 800, 600, 0, 0, 800, 600)
  }
  update() {
    let self = this;
    this.fy = Math.floor(this.y / 16);
    this.cy = Math.ceil(this.y / 16);
    this.fx = Math.floor(this.x / 16);
    this.cx = Math.ceil(this.x / 16);
    if (!game.package.open) {
      if (self.code === "ArrowRight") {
        game.hunter.update();
        game.hunter.y = 97 * 2;
        if (!self.up) {
          if (CoordinateSystem[((self.fx * 16 + 400) / 16)][((self.y + 304) / 16) - 1] === "m" ||
            CoordinateSystem[((self.cx * 16 + 400) / 16)][((self.y + 304) / 16) - 1] === "m") {
            self.up = false;
          } else {
            self.up = true;
          }
        }
        if (!self.down) {
          if (CoordinateSystem[((self.fx * 16 + 400) / 16)][((self.y + 304) / 16) + 1] === "m" ||
            CoordinateSystem[((self.cx * 16 + 400) / 16)][((self.y + 304) / 16) + 1] === "m") {
            self.down = false;
          } else {
            self.down = true;
          }
        }
        if (self.right) {
          if (self.x % 16 === 0) {
            if (CoordinateSystem[((self.x + 400) / 16) + 1][(self.fy * 16 + 304) / 16] === "m" ||
              CoordinateSystem[((self.x + 400) / 16) + 1][(self.cy * 16 + 304) / 16] === "m") {
              self.right = false;
            } else {
              self.x += 2;
            }
          } else {
            self.x += 2;
          }
          self.left = true;
        }
      }
      if (self.code === "ArrowLeft") {
        game.hunter.update();
        game.hunter.y = 97 * 1;
        if (!self.up) {
          if (CoordinateSystem[((self.fx * 16 + 400) / 16)][((self.y + 304) / 16) - 1] === "m" ||
            CoordinateSystem[((self.cx * 16 + 400) / 16)][((self.y + 304) / 16) - 1] === "m") {
            self.up = false;
          } else {
            self.up = true;
          }
        }
        if (!self.down) {
          if (CoordinateSystem[((self.fx * 16 + 400) / 16)][((self.y + 304) / 16) + 1] === "m" ||
            CoordinateSystem[((self.cx * 16 + 400) / 16)][((self.y + 304) / 16) + 1] === "m") {
            self.down = false;
          } else {
            self.down = true;
          }
        }
        if (self.left) {
          if ((self.x + 400) % 16 === 0) {
            if (CoordinateSystem[((self.x + 400) / 16) - 1][(self.fy * 16 + 304) / 16] === "m" ||
              CoordinateSystem[((self.x + 400) / 16) - 1][(self.cy * 16 + 304) / 16] === "m") {
              self.left = false;
            } else {
              self.x -= 2;
            }
          } else {
            self.x -= 2;
          }
          self.right = true;
        }
      }
      if (self.code === "ArrowUp") {
        game.hunter.update();
        game.hunter.y = 97 * 3;
        if (!self.right) {
          if (CoordinateSystem[((self.x + 400) / 16) + 1][(self.fy * 16 + 304) / 16] === "m" ||
            CoordinateSystem[((self.x + 400) / 16) + 1][(self.cy * 16 + 304) / 16] === "m") {
            self.right = false;
          } else {
            self.right = true;
          }
        }
        if (!self.left) {
          if (CoordinateSystem[((self.x + 400) / 16) - 1][(self.fy * 16 + 304) / 16] === "m" ||
            CoordinateSystem[((self.x + 400) / 16) - 1][(self.cy * 16 + 304) / 16] === "m") {
            self.left = false;
          } else {
            self.left = true;
          }
        }
        if (self.up) {
          if ((self.y) % 16 === 0) {
            if (CoordinateSystem[((self.fx * 16 + 400) / 16)][((self.y + 304) / 16) - 1] === "m" ||
              CoordinateSystem[((self.cx * 16 + 400) / 16)][((self.y + 304) / 16) - 1] === "m") {
              self.up = false;
            } else {
              self.y -= 2;
            }
          } else {
            self.y -= 2;
          }
          self.down = true;
        }
      }
      if (self.code === "ArrowDown") {
        game.hunter.update();
        game.hunter.y = 97 * 0;
        if (!self.right) {
          if (CoordinateSystem[((self.x + 400) / 16) + 1][(self.fy * 16 + 304) / 16] === "m" ||
            CoordinateSystem[((self.x + 400) / 16) + 1][(self.cy * 16 + 304) / 16] === "m") {
            self.right = false;
          } else {
            self.right = true;
          }
        }
        if (!self.left) {
          if (CoordinateSystem[((self.x + 400) / 16) - 1][(self.fy * 16 + 304) / 16] === "m" ||
            CoordinateSystem[((self.x + 400) / 16) - 1][(self.cy * 16 + 304) / 16] === "m") {
            self.left = false;
          } else {
            self.left = true;
          }
        }
        if (self.down) {
          if ((self.y) % 16 === 0) {
            if (CoordinateSystem[((self.fx * 16 + 400) / 16)][((self.y + 304) / 16) + 1] === "m" ||
              CoordinateSystem[((self.cx * 16 + 400) / 16)][((self.y + 304) / 16) + 1] === "m") {
              self.down = false;
            } else {
              self.y += 2;
            }
          } else {
            self.y += 2;
          }
          self.up = true;
        }
      }
    }
    // if (this.code === "KeyO") { game.openPackage = true; };
    // if (this.code === "keyP") { game.openPackage = false; };
    // // this.ctx.drawImage(this.map, this.x, this.y, 800, 600, 0, 0, 800, 600);
    // if (this.code === "ArrowRight") {
    //   game.hunter.update();
    //   game.hunter.y = 97 * 2;
    //   if (!self.up) {
    //     if (CoordinateSystem[((this.fx * 16 + 400) / 16)][((this.y + 304) / 16) - 1] === "m" ||
    //       CoordinateSystem[((this.cx * 16 + 400) / 16)][((this.y + 304) / 16) - 1] === "m") {
    //       this.up = false;
    //     } else {
    //       this.up = true;
    //     }
    //   }
    //   if (!self.down) {
    //     if (CoordinateSystem[((this.fx * 16 + 400) / 16)][((this.y + 304) / 16) + 1] === "m" ||
    //       CoordinateSystem[((this.cx * 16 + 400) / 16)][((this.y + 304) / 16) + 1] === "m") {
    //       this.down = false;
    //     } else {
    //       this.down = true;
    //     }
    //   }
    //   if (this.right) {
    //     if (this.x % 16 === 0) {
    //       if (CoordinateSystem[((this.x + 400) / 16) + 1][(this.fy * 16 + 304) / 16] === "m" ||
    //         CoordinateSystem[((this.x + 400) / 16) + 1][(this.cy * 16 + 304) / 16] === "m") {
    //         this.right = false;
    //       } else {
    //         this.x += 2;
    //       }
    //     } else {
    //       this.x += 2;
    //     }
    //     this.left = true;
    //   }
    // this.data_r = game.ctx.getImageData(409, 298, 1, 16);
    // this.data_u = game.ctx.getImageData(392, 297, 16, 1);
    // this.data_d = game.ctx.getImageData(392, 315, 16, 1);
    // for (let i = 0; i < 28; i++) {
    //   if (this.data_r.data[4 * i] === 5 &&
    //     this.data_r.data[4 * i + 1] === 5 && this.data_r.data[4 * i + 2] === 5) {
    //     this.right = false;
    //   }
    // }
    // for (let i = 0; i < 16; i++) {
    //   if (this.data_u.data[4 * i] === 5 &&
    //     this.data_u.data[4 * i + 1] === 5 && this.data_u.data[4 * i + 2] === 5) {
    //     this.up = false;
    //   } else { this.up = true; }
    // }
    // for (let i = 0; i < 16; i++) {
    //   if (this.data_d.data[4 * i] === 5 &&
    //     this.data_d.data[4 * i + 1] === 5 && this.data_d.data[4 * i + 2] === 5) {
    //     this.down = false;
    //   } else { this.down = true; }
    // }
    // }
    // if (this.code === "ArrowLeft") {
    //   game.hunter.update();
    //   game.hunter.y = 97 * 1;
    //   if (!self.up) {
    //     if (CoordinateSystem[((this.fx * 16 + 400) / 16)][((this.y + 304) / 16) - 1] === "m" ||
    //       CoordinateSystem[((this.cx * 16 + 400) / 16)][((this.y + 304) / 16) - 1] === "m") {
    //       this.up = false;
    //     } else {
    //       this.up = true;
    //     }
    //   }
    //   if (!self.down) {
    //     if (CoordinateSystem[((this.fx * 16 + 400) / 16)][((this.y + 304) / 16) + 1] === "m" ||
    //       CoordinateSystem[((this.cx * 16 + 400) / 16)][((this.y + 304) / 16) + 1] === "m") {
    //       this.down = false;
    //     } else {
    //       this.down = true;
    //     }
    //   }
    //   if (self.left) {
    //     if ((this.x + 400) % 16 === 0) {
    //       if (CoordinateSystem[((this.x + 400) / 16) - 1][(this.fy * 16 + 304) / 16] === "m" ||
    //         CoordinateSystem[((this.x + 400) / 16) - 1][(this.cy * 16 + 304) / 16] === "m") {
    //         this.left = false;
    //       } else {
    //         this.x -= 2;
    //       }
    //     } else {
    //       this.x -= 2;
    //     }

    //     this.right = true;
    //     // this.left = true;
    //     // this.up = true;
    //     // this.down = true;
    //   }
    //   // this.data_l = game.ctx.getImageData(391, 298, 1, 16);
    //   // this.data_u = game.ctx.getImageData(392, 297, 16, 1);
    //   // this.data_d = game.ctx.getImageData(392, 315, 16, 1);
    //   // for (let i = 0; i < 28; i++) {
    //   //   if (this.data_l.data[4 * i] === 5 &&
    //   //     this.data_l.data[4 * i + 1] === 5 && this.data_l.data[4 * i + 2] === 5) {
    //   //     this.left = false;
    //   //   }
    //   // }
    //   // for (let i = 0; i < 16; i++) {
    //   //   if (this.data_u.data[4 * i] === 5 &&
    //   //     this.data_u.data[4 * i + 1] === 5 && this.data_u.data[4 * i + 2] === 5) {
    //   //     this.up = false;
    //   //   } else { this.up = true; }
    //   // }
    //   // for (let i = 0; i < 16; i++) {
    //   //   if (this.data_d.data[4 * i] === 5 &&
    //   //     this.data_d.data[4 * i + 1] === 5 && this.data_d.data[4 * i + 2] === 5) {
    //   //     this.down = false;
    //   //   } else { this.down = true; }
    //   // }
    // }
    // if (this.code === "ArrowUp") {
    //   game.hunter.update();
    //   game.hunter.y = 97 * 3;
    //   if (!self.right) {
    //     if (CoordinateSystem[((this.x + 400) / 16) + 1][(this.fy * 16 + 304) / 16] === "m" ||
    //       CoordinateSystem[((this.x + 400) / 16) + 1][(this.cy * 16 + 304) / 16] === "m") {
    //       this.right = false;
    //     } else {
    //       this.right = true;
    //     }
    //   }
    //   if (!self.left) {
    //     if (CoordinateSystem[((this.x + 400) / 16) - 1][(this.fy * 16 + 304) / 16] === "m" ||
    //       CoordinateSystem[((this.x + 400) / 16) - 1][(this.cy * 16 + 304) / 16] === "m") {
    //       this.left = false;
    //     } else {
    //       this.left = true;
    //     }
    //   }
    //   if (self.up) {
    //     if ((this.y) % 16 === 0) {
    //       if (CoordinateSystem[((this.fx * 16 + 400) / 16)][((this.y + 304) / 16) - 1] === "m" ||
    //         CoordinateSystem[((this.cx * 16 + 400) / 16)][((this.y + 304) / 16) - 1] === "m") {
    //         this.up = false;
    //       } else {
    //         this.y -= 2;
    //       }
    //     } else {
    //       this.y -= 2;
    //     }

    //     // this.right = true;
    //     // this.left = true;
    //     // this.up = true;
    //     this.down = true;
    //   }
    //   // this.data_u = game.ctx.getImageData(392, 297, 16, 1);
    //   // this.data_l = game.ctx.getImageData(391, 298, 1, 16);
    //   // this.data_r = game.ctx.getImageData(409, 298, 1, 16);
    //   // for (let i = 0; i < 16; i++) {
    //   //   if (this.data_u.data[4 * i] === 5 &&
    //   //     this.data_u.data[4 * i + 1] === 5 && this.data_u.data[4 * i + 2] === 5) {
    //   //     this.up = false;
    //   //   }
    //   // }
    //   // for (let i = 0; i < 28; i++) {
    //   //   if (this.data_l.data[4 * i] === 5 &&
    //   //     this.data_l.data[4 * i + 1] === 5 && this.data_l.data[4 * i + 2] === 5) {
    //   //     this.left = false;
    //   //   } else { this.left = true; }
    //   // }
    //   // for (let i = 0; i < 28; i++) {
    //   //   if (this.data_r.data[4 * i] === 5 &&
    //   //     this.data_r.data[4 * i + 1] === 5 && this.data_r.data[4 * i + 2] === 5) {
    //   //     this.right = false;
    //   //   } else { this.right = true; }
    //   // }
    // }
    // if (this.code === "ArrowDown") {
    //   game.hunter.update();
    //   game.hunter.y = 97 * 0;
    //   if (!self.right) {
    //     if (CoordinateSystem[((this.x + 400) / 16) + 1][(this.fy * 16 + 304) / 16] === "m" ||
    //       CoordinateSystem[((this.x + 400) / 16) + 1][(this.cy * 16 + 304) / 16] === "m") {
    //       this.right = false;
    //     } else {
    //       this.right = true;
    //     }
    //   }
    //   if (!self.left) {
    //     if (CoordinateSystem[((this.x + 400) / 16) - 1][(this.fy * 16 + 304) / 16] === "m" ||
    //       CoordinateSystem[((this.x + 400) / 16) - 1][(this.cy * 16 + 304) / 16] === "m") {
    //       this.left = false;
    //     } else {
    //       this.left = true;
    //     }
    //   }
    //   if (self.down) {
    //     if ((this.y) % 16 === 0) {
    //       if (CoordinateSystem[((this.fx * 16 + 400) / 16)][((this.y + 304) / 16) + 1] === "m" ||
    //         CoordinateSystem[((this.cx * 16 + 400) / 16)][((this.y + 304) / 16) + 1] === "m") {
    //         this.down = false;
    //       } else {
    //         this.y += 2;
    //       }
    //     } else {
    //       this.y += 2;
    //     }

    //     // this.right = true;
    //     // this.left = true;
    //     this.up = true;
    //     // this.down = true;
    //   }
    //   // this.data_d = game.ctx.getImageData(392, 315, 16, 1);
    //   // this.data_l = game.ctx.getImageData(391, 298, 1, 16);
    //   // this.data_r = game.ctx.getImageData(409, 298, 1, 16);
    //   // for (let i = 0; i < 16; i++) {
    //   //   if (this.data_d.data[4 * i] === 5 &&
    //   //     this.data_d.data[4 * i + 1] === 5 && this.data_d.data[4 * i + 2] === 5) {
    //   //     this.down = false;
    //   //   }
    //   // }
    //   // for (let i = 0; i < 28; i++) {
    //   //   if (this.data_l.data[4 * i] === 5 &&
    //   //     this.data_l.data[4 * i + 1] === 5 && this.data_l.data[4 * i + 2] === 5) {
    //   //     this.left = false;
    //   //   } else { this.left = true; }
    //   // }
    //   // for (let i = 0; i < 28; i++) {
    //   //   if (this.data_r.data[4 * i] === 5 &&
    //   //     this.data_r.data[4 * i + 1] === 5 && this.data_r.data[4 * i + 2] === 5) {
    //   //     this.right = false;
    //   //   } else { this.right = true; }
    //   // }
    // }
  }
}
