class Map {
  constructor() {
    this.w = game.w;
    this.h = game.h;
    this.x = game.xcount;
    this.y = game.ycount;
    this.container = game.container;
    this.map = document.createElement('div');
    this.map.style.cssText = `width:${this.w * this.x}px; height:${this.h * this.y}px;position: absolute;top:0;left:0; `;
    this.container.style.cssText = `width:${this.w * this.x + 2}px; height:${this.h * this.y + 2}px;position: relative;top: 150px;left: 100px;border: 1px #ccc solid`
    this.container.appendChild(this.map);
  }
}