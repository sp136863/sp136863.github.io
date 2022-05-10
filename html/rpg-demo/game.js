class Game {
  constructor(x, y) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.R = {};
    this.pockets = [
      { "name": "布衣", "type": "防御力+", "value": 1, "count": 1 },
      { "name": "皮衣", "type": "防御力+", "value": 5, "count": 1 },
      { "name": "风衣", "type": "防御力+", "value": 10, "count": 3 },
      { "name": "铁衣", "type": "防御力+", "value": 100, "count": 1 },
      { "name": "祖传弹弓", "type": "攻击力+", "value": 1, "count": 1 },
      { "name": "散射弩", "type": "攻击力+", "value": 5, "count": 1 },
      { "name": "5mm手枪", "type": "攻击力+", "value": 10, "count": 1 },
      { "name": "16mm手枪", "type": "攻击力+", "value": 11, "count": 1 },
      { "name": "7mm手枪", "type": "攻击力+", "value": 12, "count": 1 },
      { "name": "8mm手枪", "type": "攻击力+", "value": 13, "count": 3 },
      { "name": "9mm手枪", "type": "攻击力+", "value": 14, "count": 1 },
      { "name": "10mm手枪", "type": "攻击力+", "value": 15, "count": 1 },
      { "name": "11mm手枪", "type": "攻击力+", "value": 16, "count": 1 },
      { "name": "150mm手枪", "type": "攻击力+", "value": 17, "count": 1 },
      { "name": "散射弩", "type": "攻击力+", "value": 5, "count": 1 },
      { "name": "15mm手枪", "type": "攻击力+", "value": 18, "count": 1 },
      { "name": "16mm手枪", "type": "攻击力+", "value": 19, "count": 1 },
      { "name": "小型血瓶", "type": "回复气血", "value": 120, "count": 3 },
      { "name": "中级血瓶", "type": "回复气血", "value": 500, "count": 3 },
      { "name": "大型血瓶", "type": "回复气血", "value": 1000, "count": 3 },
      { "name": "顶级血瓶", "type": "回复气血", "value": 2500, "count": 3 },
      { "name": "全回复血瓶", "type": "回复气血", "value": 9999, "count": 3 }
    ];
    this.fightStep = 0;
    this.fight = false;
    this.safe = false;
    this.second = 300;
    this.init();
  }
  init() {
    let self = this;
    this.loadCount = 0;
    for (const key in images) {
      if (Object.hasOwnProperty.call(images, key)) {
        this.R[key] = new Image();
        this.R[key].src = images[key];
        this.R[key].onload = function () {
          self.loadCount++;
          if (self.loadCount === Object.keys(images).length) {
            // if (localStorage.getItem("obj")) {
            //   let obj = localStorage.getItem("obj");
            //   self.hero_1 = new Hero(obj);
            //   self.heroArr.push(self.hero_1);
            //   let a = JSON.parse(obj);
            //   console.log(a.temp_arr_1_fangju);
            //   console.log(a.pockets);
            // } else {
            //   self.hero_1 = new Hero();
            //   self.heroArr.push(self.hero_1);
            // }
            self.map = new Map(0, 0, self.R.map1);//125/3360
            self.hunter = new Hunter(0, 0, 52, 72);
            self.package = new Package();
            function animate() {
              self.start();
              requestAnimationFrame(animate);
            }
            animate();
          }
        }
      }
    }
  }
  start() {
    let self = this;
    this.ctx.clearRect(0, 0, 800, 600);
    if (!this.fight) {
      if (!this.package.open) {
        this.map.update();
        this.map.render();
        this.hunter.render();
      } else {
        this.package.update();
        this.package.render();
      }
      window.onkeydown = function (e) {
        self.map.code = e.code;
        if (self.map.code === "KeyO") { game.package.open = true; }//打开背包,打开人物面板
        if (self.map.code === "KeyP") { game.package.open = false; }//关闭背包,关闭人物面板
        if (self.map.code === "KeyD") { if (game.package.open) { game.package.select_jiantou_y += 30; } }//下选项光标位置
        if (self.map.code === "KeyS") { if (game.package.open) { game.package.select_jiantou_y -= 30; } }//上选项光标位置
        if (self.map.code === "KeyE") { game.package.refresh = true; }//确认道具是否使用,装备是否装备或卸下
        if (!self.package.open && !self.safe) {//确认在背包没有打开的情况下才能进行移动
          self.fightStep++;
          if (self.fightStep > 120) {//确认遇敌条件
            window.onkeydown = null;
            self.fight = true;//进入战斗设置,跳转开始战斗界面
            self.fightStep = 0;//清除步数
            self.map.code = null;//所有键码值清空
          }
        }
        //存档
        if (e.code === "KeyM") {
          //游戏变化
          // self.saveObj.sence = self.sence;
          // self.saveObj.pockets = self.pockets;
          // self.saveObj.gold = self.gold;
          // self.saveObj.guide_npc_talk = self.guide_npc_talk;
          //主角变化
          // self.saveObj.x = self.hero_1.x;
          // self.saveObj.y = self.hero_1.y;
          // self.saveObj.level = self.hero_1.level;
          // self.saveObj.current_blood = self.hero_1.current_blood;
          // self.saveObj.drive_level = self.hero_1.drive_level;
          // self.saveObj.fight_level = self.hero_1.fight_level;
          // self.saveObj.attack = self.hero_1.attack;
          // self.saveObj.defen = self.hero_1.defen;
          // self.saveObj.speed = self.hero_1.speed;
          // self.saveObj.experience = self.hero_1.experience;
          // self.saveObj.temp_arr_1_wuqi = self.hero_1.temp_arr_1_wuqi;
          // self.saveObj.temp_arr_1_fangju = self.hero_1.temp_arr_1_fangju;
          // let data = { "name": "1212121niu" }
          // data = JSON.stringify(data);
          // localStorage.setItem("obj", JSON.stringify(self.saveObj))
        }
      }
      window.onkeyup = function (e) {
        self.map.code = null;//松开时清除所有键码值
      }
    } else {
      //此处进入战斗设置,跳转进入开始战斗界面
      if (self.second % 60 === 0) {
        self.s = self.second / 60;
      }
      game.ctx.fillStyle = "#000";
      game.ctx.textBaseline = "middle";
      game.ctx.font = "18px KaiTi";
      game.ctx.fillText(`战斗界面还不够完善，${self.s}秒后将自动跳转回地图界面`, 150, 360);
      self.second--;
      if (self.second <= 0) {
        self.second = 300;
        self.fight = false;
      }
    }
  }
}

