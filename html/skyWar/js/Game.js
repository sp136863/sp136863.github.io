class Game {
  constructor() {
    let self = this;
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    // this.can_vas = document.getElementById('can_vas');
    // this.ctx1 = can_vas.getContext('2d');
    this.R = {};
    this.init();
    this.start = function (a, b, c, d) {
      self.canvas.onmousemove = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        self.canvas.onclick = function () {
          if (x > self.canvas.clientWidth / 2 - a &&
            x < self.canvas.clientWidth / 2 + b &&
            y > self.canvas.clientHeight * 0.52 + d &&
            y < self.canvas.clientHeight * 0.52 + c) {
            // if (a == 40) {
            self.canvas.classList.remove('hand');
            self.level_Start({ level: "level_1", CName: "第一关" });
            self.canvas.onmousemove = null;
            self.canvas.onclick = null;
            // } else if (a == -16) {
            // self.canvas.classList.remove('hand');
            // self.start();
            // self.canvas.onmousemove = null;
            // self.canvas.onclick = null;
            // } 
          }
        };
        if (x > self.canvas.clientWidth / 2 - a && x < self.canvas.clientWidth / 2 + b && y > self.canvas.clientHeight * 0.52 + d && y < self.canvas.clientHeight * 0.52 + c) {
          self.canvas.classList.add('hand');
          // self.can_vas.classList.add('can_vas');
        } else {
          self.canvas.classList.remove('hand');
        };
      }
    }
  }
  init() {
    let self = this;
    for (var i in images) {
      // console.log(i);
      this.R[i] = new Image();
      this.R[i].src = images[i];
      this.R[i].onload = function () {
        self.ctx.drawImage(self.R.background, 0, 0);
        self.ctx.drawImage(self.R.start, self.canvas.clientWidth / 2 - 40, self.canvas.clientHeight * 0.52, 80, 60);
        self.start(40, 40, 60, 0);
        // self.canvas.onmousemove = function (e) {
        //   let x = e.clientX;
        //   let y = e.clientY;
        //   self.canvas.onclick = function () {
        //     if (x > self.canvas.clientWidth / 2 - 40 && x < self.canvas.clientWidth / 2 + 40 && y > self.canvas.clientHeight * 0.52 && y < self.canvas.clientHeight * 0.52 + 60) {
        //       self.canvas.classList.remove('hand');
        //       self.start();
        //       self.canvas.onmousemove = null;
        //       self.canvas.onclick = null;
        //     }
        //   };
        //   if (x > self.canvas.clientWidth / 2 - 40 && x < self.canvas.clientWidth / 2 + 40 && y > self.canvas.clientHeight * 0.52 && y < self.canvas.clientHeight * 0.52 + 60) {
        //     self.canvas.classList.add('hand');
        //     // self.can_vas.classList.add('can_vas');
        //   } else {
        //     self.canvas.classList.remove('hand');
        //   };
        // }
      }
    }
  }
  level_Start({ level, CName }) {
    let self = this;
    this.level = level;
    this.background = new Background();
    this.hero = new Hero();
    this.myBulletArr = new Array();
    this.myBulletArr_2 = new Array();
    this.myBulletArr_3 = new Array();
    this.emmy1Arr = new Array();
    this.emmy2Arr = new Array();
    this.emmy3Arr = new Array();
    this.bossArr = new Array();
    this.bossBulletArr_1 = new Array();
    this.bossBulletArr_2 = new Array();
    this.bossBulletArr_3 = new Array();
    this.bossBulletArr_4 = new Array();
    this.bossBulletArr_5 = new Array();
    this.time = 0;
    this.enmy_1Count = 0;
    this.enmy_2Count = 0;
    this.enmy_3Count = 0;
    this.num = 0;
    this.life = 3;
    this.bossScore = 2000;

    switch (this.level) {
      case "level_1":
        self.bossArr.push(new Boss(150, -90, 100, 85));
        self.enmy_1_img = self.R.enmy1
        self.enmy_2_img = self.R.enmy2
        self.boss_img = self.R.boss1
        break;
      case "level_2":
        self.bossArr = [];
        self.bossArr.push(new Boss(150, -90, 100, 85));
        self.enmy_1_img = self.R.enmy1
        self.enmy_2_img = self.R.enmy2
        self.boss_img = self.R.boss2
        break;
    }
    setTimeout(() => {
      this.hero.move();
    }, 1000);
    let timer = setInterval(() => {
      this.ctx.clearRect(0, 0, 400, 550);
      this.background.update();
      this.background.render();
      this.hero.update();
      this.hero.render();
      this.time++;
      //关卡 
      if (this.time <= 100) {
        this.ctx.fillStyle = "red";
        this.ctx.textBaseline = "middle";
        this.ctx.font = "24px Arial";
        this.ctx.fillText(`${CName}`, self.canvas.clientWidth / 2 - 36, self.canvas.clientHeight * 0.4);
      }
      //英雄机子弹生成
      if (this.hero.temp == 0) {
        if (this.time % 8 == 0) {
          self.mybullet = new MyBullet(game.hero.x + 12, game.hero.y + game.hero.temp - 20, 6, 14);
          self.myBulletArr.push(self.mybullet);
          if (this.score >= 500) {
            self.myBulletArr = [];
            self.mybullet_l = new MyBullet(game.hero.x + 5, game.hero.y + game.hero.temp - 20, 6, 14);
            self.mybullet_r = new MyBullet(game.hero.x + 27, game.hero.y + game.hero.temp - 20, 6, 14);
            self.myBulletArr_2.push(self.mybullet_l, self.mybullet_r);
          }
        };
      }
      //英雄机子弹渲染
      for (let i = 0; i < self.myBulletArr_3.length; i++) {
        self.myBulletArr_3[i].update();
        self.myBulletArr_3[i].render();
        if (self.myBulletArr_3[i].y <= 0) {
          self.myBulletArr_3.splice(i, 1);
        }
      };
      //判断弹匣类型
      if (this.myBulletArr.length > 0) {
        this.myBulletArr_3 = this.myBulletArr;
      } else if (this.myBulletArr_2.length > 0) {
        this.myBulletArr_3 = this.myBulletArr_2
      }
      //子弹与一类敌机碰撞检测
      for (let i = 0; i < self.myBulletArr_3.length; i++) {
        for (let j = 0; j < this.emmy1Arr.length; j++) {
          if (enmy_1IsCrash(self.myBulletArr_3[i], this.emmy1Arr[j])) {
            this.emmy1Arr.splice(j, 1);
            this.myBulletArr_3.splice(i, 1);
            this.enmy_1Count++;
          }
        }
      }
      //子弹与二类敌机碰撞检测
      for (let i = 0; i < self.myBulletArr_3.length; i++) {
        for (let j = 0; j < this.emmy2Arr.length; j++) {
          if (enmy_2Iscrash(self.myBulletArr_3[i], this.emmy2Arr[j])) {
            this.emmy2Arr[j].count++;
            this.myBulletArr_3.splice(i, 1);
            if (this.emmy2Arr[j].count >= 5) {
              this.emmy2Arr.splice(j, 1);
              this.enmy_2Count++;
            };
          }
        }
      };
      //子弹与三类敌机碰撞检测
      for (let i = 0; i < self.myBulletArr_3.length; i++) {
        for (let j = 0; j < this.emmy3Arr.length; j++) {
          if (enmy_3Iscrash(self.myBulletArr_3[i], this.emmy3Arr[j])) {
            this.emmy3Arr.splice(j, 1);
            this.myBulletArr_3.splice(i, 1);
            this.enmy_3Count++;
          }
        }
      };
      //子弹与boss碰撞检测
      for (let i = 0; i < self.myBulletArr_3.length; i++) {
        for (let j = 0; j < this.bossArr.length; j++) {
          if (isBossCrash(self.myBulletArr_3[i], self.bossArr[j])) {
            self.bossArr[j].blood--;
            self.myBulletArr_3.splice(i, 1);
            if (self.bossArr[j].blood <= 0) {
              self.bossArr.splice(j, 1);
              clearInterval(timer);
              self.level_Clear(this.score, this.life, this.bossScore);
              // this.level_Start()
            }
          }
        }
      }
      //一类敌机与英雄机碰撞检测
      for (let j = 0; j < this.emmy1Arr.length; j++) {
        if (isHeroCrash({ enmy_1: this.emmy1Arr[j], hero: this.hero })) {
          this.life--;
          this.emmy1Arr.splice(j, 1);
          if (this.life < 0) {
            clearInterval(timer);
            this.restart();
          }
        }
      }
      //boss子弹与英雄机碰撞检测
      for (let i = 0; i < this.bossBulletArr_1.length; i++) {
        if (isHeroCrash_1({ boss_bullet_1: this.bossBulletArr_1[i], hero: this.hero })) {
          this.life--;
          this.bossBulletArr_1.splice(i, 1);
          if (this.life <= 0) {
            clearInterval(timer);
            this.restart();
          }
        }
      }
      for (let i = 0; i < this.bossBulletArr_2.length; i++) {
        if (isHeroCrash_2({ boss_bullet_2: this.bossBulletArr_2[i], hero: this.hero })) {
          this.life--;
          this.bossBulletArr_2.splice(i, 1);
          if (this.life <= 0) {
            clearInterval(timer);
            this.restart();
          }
        }
      }
      for (let i = 0; i < this.bossBulletArr_3.length; i++) {
        if (isHeroCrash_3({ boss_bullet_3: this.bossBulletArr_3[i], hero: this.hero })) {
          this.life--;
          this.bossBulletArr_3.splice(i, 1);
          if (this.life <= 0) {
            clearInterval(timer);
            this.restart();
          }
        }
      }
      for (let i = 0; i < this.bossBulletArr_4.length; i++) {
        if (isHeroCrash_4({ boss_bullet_4: this.bossBulletArr_4[i], hero: this.hero })) {
          this.life--;
          this.bossBulletArr_4.splice(i, 1);
          if (this.life <= 0) {
            clearInterval(timer);
            this.restart();
          }
        }
      }
      for (let i = 0; i < this.bossBulletArr_5.length; i++) {
        if (isHeroCrash_5({ boss_bullet_5: this.bossBulletArr_5[i], hero: this.hero })) {
          this.life--;
          this.bossBulletArr_5.splice(i, 1);
          if (this.life <= 0) {
            clearInterval(timer);
            this.restart();
          }
        }
      }
      //一类敌机生成
      if (this.time % 150 == 0 && this.time <= 3000) {
        this.emmy1_l = new Emmy1(40, 40);
        this.emmy1Arr.push(this.emmy1_l);
        this.emmy1_r = new Emmy1(328, 40);
        this.emmy1Arr.push(this.emmy1_r);
      };
      //一类敌机渲染
      for (let i = 0; i < this.emmy1Arr.length; i++) {
        this.emmy1Arr[i].update();
        this.emmy1Arr[i].render(self.enmy_1_img);
        if (this.emmy1Arr[i].y > 700) {
          this.emmy1Arr.splice(i, 1);
        }
      };
      //二类敌机生成
      if (this.time % 500 == 0 && this.time <= 3000) {
        this.emmy2_l = new Emmy2(30, -150);
        this.emmy2Arr.push(this.emmy2_l);
        this.emmy2_r = new Emmy2(304, -150);
        this.emmy2Arr.push(this.emmy2_r);
      };
      //二类敌机渲染
      for (let i = 0; i < this.emmy2Arr.length; i++) {
        this.emmy2Arr[i].update();
        this.emmy2Arr[i].render(self.enmy_2_img);
        if (this.emmy2Arr[i].emmy) {
          this.emmy2Arr.splice(i, 1);
        }
      };
      //三类敌机生成
      if (this.time % 150 == 0 && this.time <= 3000) {
        this.enmyNum = Math.ceil(Math.random() * 6 + 2);
        switch (this.enmyNum) {
          case 3:
            self.enmy3 = new Emmy3(Math.floor(Math.random() * 360), -100, 40, 40, self.R.enmy3);
            self.emmy3Arr.push(self.enmy3);
            break;
          case 4:
            self.enmy3 = new Emmy3(Math.floor(Math.random() * 343), -100, 57, 45, self.R.enmy4);
            self.emmy3Arr.push(self.enmy3);
            break;
          case 5:
            self.enmy3 = new Emmy3(Math.floor(Math.random() * 317), -100, 83, 66, self.R.enmy5);
            self.emmy3Arr.push(self.enmy3);
            break;
          case 6:
            self.enmy3 = new Emmy3(Math.floor(Math.random() * 317), -100, 83, 66, self.R.enmy6);
            self.emmy3Arr.push(self.enmy3);
            break;
          case 7:
            self.enmy3 = new Emmy3(Math.floor(Math.random() * 338), -100, 62, 43, self.R.enmy7);
            self.emmy3Arr.push(self.enmy3);
            break;
          case 8:
            self.enmy3 = new Emmy3(Math.floor(Math.random() * 343), -100, 57, 43, self.R.enmy8);
            self.emmy3Arr.push(self.enmy3);
            break;
        }
      };
      //三类敌机渲染
      for (let i = 0; i < this.emmy3Arr.length; i++) {
        this.emmy3Arr[i].update();
        this.emmy3Arr[i].render();
        if (this.emmy3Arr[i].y > 700) {
          this.emmy3Arr.splice(i, 1);
        }
      };
      //BOSS登场渲染
      if (this.time >= 3000 && this.bossArr.length == 1) {
        this.bossArr[0].update();
        this.bossArr[0].render(self.boss_img);
        //BOSS子弹
        if (this.time % 40 == 0 && this.bossArr[0].y >= 100) {
          this.bossBullet_1 = new Boss_1_Bullet(game.R.boss1bullet, this.bossArr[0].x + 45,
            this.bossArr[0].y + 86, 10, 10);
          this.bossBulletArr_1.push(this.bossBullet_1);
          this.bossBullet_2 = new Boss_1_Bullet(game.R.boss1bullet, this.bossArr[0].x + 45,
            this.bossArr[0].y + 86, 10, 10);
          this.bossBulletArr_2.push(this.bossBullet_2);
          this.bossBullet_3 = new Boss_1_Bullet(game.R.boss1bullet, this.bossArr[0].x + 45,
            this.bossArr[0].y + 86, 10, 10);
          this.bossBulletArr_3.push(this.bossBullet_3);
          this.bossBullet_4 = new Boss_1_Bullet(game.R.boss1bullet, this.bossArr[0].x + 45,
            this.bossArr[0].y + 86, 10, 10);
          this.bossBulletArr_4.push(this.bossBullet_4);
          this.bossBullet_5 = new Boss_1_Bullet(game.R.boss1bullet, this.bossArr[0].x + 45,
            this.bossArr[0].y + 86, 10, 10);
          this.bossBulletArr_5.push(this.bossBullet_5);
        }
        //BOSS子弹渲染
        for (let i = 0; i < this.bossBulletArr_1.length; i++) {
          this.bossBulletArr_1[i].update_1();
          this.bossBulletArr_1[i].render();
          if (this.bossBulletArr_1[i].y > 550) {
            this.bossBulletArr_1.splice(i, 1);
          }
        }
        for (let i = 0; i < this.bossBulletArr_2.length; i++) {
          this.bossBulletArr_2[i].update_2();
          this.bossBulletArr_2[i].render();
          if (this.bossBulletArr_2[i].y > 550) {
            this.bossBulletArr_2.splice(i, 1);
          }
        }
        for (let i = 0; i < this.bossBulletArr_3.length; i++) {
          this.bossBulletArr_3[i].update_3();
          this.bossBulletArr_3[i].render();
          if (this.bossBulletArr_3[i].y > 550) {
            this.bossBulletArr_3.splice(i, 1);
          }
        }
        for (let i = 0; i < this.bossBulletArr_4.length; i++) {
          this.bossBulletArr_4[i].update_4();
          this.bossBulletArr_4[i].render();
          if (this.bossBulletArr_4[i].y > 550) {
            this.bossBulletArr_4.splice(i, 1);
          }
        }
        for (let i = 0; i < this.bossBulletArr_5.length; i++) {
          this.bossBulletArr_5[i].update_5();
          this.bossBulletArr_5[i].render();
          if (this.bossBulletArr_5[i].y > 550) {
            this.bossBulletArr_5.splice(i, 1);
          }
        }
      }
      //其他属性
      this.ctx.fillStyle = "yellow";
      this.ctx.textBaseline = "middle";
      this.ctx.font = "18px Arial";
      this.score = this.enmy_1Count * 10 + this.enmy_2Count * 100 + this.enmy_3Count * 5;
      if (this.score >= 1000 && this.score < 2000) { this.life = 4 };
      if (this.score >= 2000 && this.score < 4000) { this.life = 5 };
      if (this.score >= 4000) { this.life = 6 };
      this.ctx.fillText(`时间:${Math.floor(parseInt(this.time / 50) / 60)}分${parseInt(this.time / 50) % 60}秒`, 10, 16);
      this.ctx.fillText(`得分:${this.score}分`, 10, 42);
      this.ctx.fillText(`生命:${this.life}条`, 10, 68);
    }, 20);
  };
  restart() {
    this.ctx.fillStyle = "red";
    this.ctx.textBaseline = "middle";
    this.ctx.font = "18px Arial";
    this.ctx.fillText(`大侠你死了,重新来过吧`, self.canvas.clientWidth / 2 - 92, self.canvas.clientHeight * 0.4);
    // this.ctx.fillText(`垃圾不玩`, self.canvas.clientWidth / 2 - 95, self.canvas.clientHeight * 0.52);
    this.ctx.fillText(`再玩一次`, self.canvas.clientWidth / 2 - 35, self.canvas.clientHeight * 0.52);
    this.start(35, 35, 10, -10);
    // this.fun(95, -25, 10, -10);
    // self.ctx.drawImage(self.R.start, self.canvas.clientWidth / 2 - 40, self.canvas.clientHeight * 0.52, 80, 60);
    // this.init();
  };
  level_Clear(score, life, bossScore) {
    this.timer1 = setInterval(() => {
      this.num++;
      this.ctx.fillStyle = "red";
      this.ctx.textBaseline = "middle";
      this.ctx.font = "18px Arial";
      if (this.num == 50) {
        this.ctx.fillText(`恭喜大侠过关`, self.canvas.clientWidth / 2 - 53, self.canvas.clientHeight * 0.4)
      };
      if (this.num == 150) {
        this.ctx.fillText(`Boss奖励:${this.bossScore}分`, self.canvas.clientWidth / 2 - 62, self.canvas.clientHeight * 0.5)
      };
      if (this.num == 250) {
        this.ctx.fillText(`life奖励:${this.life * 1000}分`, self.canvas.clientWidth / 2 - 62, self.canvas.clientHeight * 0.6)
      };
      if (this.num == 350) {
        this.ctx.fillText(`最终得分:${this.score + this.life * 1000 + this.bossScore}分`, self.canvas.clientWidth / 2 - 62, self.canvas.clientHeight * 0.7)
      };
      if (this.num > 400) {
        clearInterval(this.timer1);
        setTimeout(() => {
          this.level_Start({ level: "level_2", CName: "第二关" });
        }, 1000);
      }
    }, 20)
  };
  // level_2_Start(score, life, bossScore) {
  //   setInterval(() => {
  //     this.ctx.clearRect(0, 0, 400, 550)
  //     this.ctx.fillStyle = "yellow";
  //     this.ctx.textBaseline = "middle";
  //     this.ctx.font = "18px Arial";
  //     this.score = score;
  // if (this.score >= 1000 && this.score < 2000) { this.life = 4 };
  // if (this.score >= 2000 && this.score < 4000) { this.life = 5 };
  // if (this.score >= 4000) { this.life = 6 };
  // this.ctx.fillText(`时间:${Math.floor(parseInt(this.time / 50) / 60)}分${parseInt(this.time / 50) % 60}秒`, 10, 16);
  //     this.ctx.fillText(`得分:${this.score}分`, 10, 42);
  //     this.ctx.fillText(`生命:${life}条`, 10, 68);
  //     this.ctx.fillText(`生命:${bossScore}条`, 10, 94);
  //   }, 20);
  // }
}
// this.myBulletArr[i].x < (this.emmy1Arr[j].x + this.emmy1Arr[j].num + 33) &&
//   this.myBulletArr[i].x + 6 > (this.emmy1Arr[j].x + this.emmy1Arr[j].num) &&
//   this.myBulletArr[i].y < (this.emmy1Arr[j].y + this.emmy1Arr[j].initY + 34) &&
//   this.myBulletArr[i].y + 14 > (this.emmy1Arr[j].y + this.emmy1Arr[j].initY)