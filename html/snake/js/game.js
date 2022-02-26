class Game {
  constructor() {
    this.container = document.getElementById('container');
    this.startBtn = document.getElementById('start');
    this.time = document.getElementById('level');
    this.snakeArr = document.getElementById('snake');
    this.w = 15;
    this.h = 15;
    this.xcount = 60;
    this.ycount = 40;
    this.frame = 0;
    this.body = [
      { x: 2, y: 0 },//蛇头方向
      { x: 1, y: 0 },
      { x: 0, y: 0 }];
    this.init();
    this.keyboardCode();
    this.direction = 'right';
    this.levelText = null;
    this.valve = false;
  }
  init() {
    let that = this;
    window.onload = function () {
      new Map();
      new Snake()
      that.food = new Food();
      that.run();
    }
  }
  run() {
    let that = this;
    this.startBtn.onclick = function () {
      clearInterval(that.timer);
      that.valve = !that.valve;
      if (that.valve) {
        that.startBtn.innerHTML = '暂停';
        that.timer = setInterval(() => {
          that.time.innerHTML = `速度:${that.levelText}秒`;
          that.frame++;
          if (that.body.length < 20 && that.frame % 12 == 0) {
            level();
            that.levelText = 12 * 20 / 1000;
          }
          if (that.body.length >= 20 && that.body.length < 40 && that.frame % 10 == 0) {
            level();
            that.levelText = 10 * 20 / 1000;
          }
          if (that.body.length >= 40 && that.body.length < 80 && that.frame % 7 == 0) {
            level();
            that.levelText = 7 * 20 / 1000;
          }
          if (that.body.length >= 80 && that.frame % 5 == 0) {
            level();
            that.levelText = 5 * 20 / 1000;
          }
        }, 20);
        function level() {
          if (that.body[0].x == that.food.x && that.body[0].y == that.food.y) {
            that.container.removeChild(that.food.food);
            that.food = new Food();
            that.body.push({ x: null, y: null });
          }
          for (let i = that.body.length - 1; i > 0; i--) {
            that.body[i].x = that.body[i - 1].x;
            that.body[i].y = that.body[i - 1].y;
          }
          switch (that.direction) {
            case 'right': that.body[0].x++; break;//up
            case 'left': that.body[0].x--; break;//down
            case 'up': that.body[0].y--; break;//left
            case 'down': that.body[0].y++; break;//right
          }
          that.snakeArr.innerHTML = '';
          new Snake();
          if (that.body[0].x < 0 || that.body[0].x > that.xcount || that.body[0].y < 0 || that.body[0].y > that.ycount) {
            clearInterval(that.timer);
            alert('你真菜!!!');
            that.reStart();
          }
          for (let i = 4; i < that.body.length; i++) {
            if (that.body[0].x == that.body[i].x && that.body[0].y == that.body[i].y) {
              clearInterval(that.timer);
              alert('你真菜!!!');
              that.reStart();
            }
          }
        }
      } else {
        clearInterval(that.timer);
        that.startBtn.innerHTML = '开始';
      }
    }
  }
  reStart() {
    this.snakeArr.innerHTML = '';
    this.body = [
      { x: 2, y: 0 },//蛇头方向
      { x: 1, y: 0 },
      { x: 0, y: 0 }];
    new Snake();
    this.valve = false;
    this.startBtn.innerHTML = '开始';
    this.direction = 'right';
    this.run();
  }
  keyboardCode() {
    let that = this;
    window.onkeydown = function (e) {
      let event = e;
      switch (event.keyCode) {
        case 38: if (that.direction != 'down') { that.direction = 'up'; break; }//up
        case 40: if (that.direction != 'up') { that.direction = 'down'; break; }//down
        case 37: if (that.direction != 'right') { that.direction = 'left'; break; }//left
        case 39: if (that.direction != 'left') { that.direction = 'right'; break; }//right
      }
    }
  }
}
let game = new Game();

