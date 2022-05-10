class Package {
  constructor() {
    this.open = false;
    this.level = 0;
    this.current_blood = 80;
    this.drive_level = 1;
    this.fight_level = 1;
    this.attack = 100;
    this.defen = 5;
    this.speed = 20;
    this.experience = 0;//人物经验
    this.current_hero = "0000";//主角名称
    //装备道具选取相关
    this.select_page = 0;//显示第几页
    this.select_jiantou_y = 90;//选取装备的图标
    this.temp_arr_1_wuqi = [];//人物1身上的武器
    this.temp_arr_1_fangju = [];//人物1身上的防具
    //道具刷新速度
    this.refresh = false;
  }
  update() {
    let self = this;
    if (this.open) {
      switch (game.map.code) {
        //装备道具选取
        case "KeyD":
          // self.select_jiantou_y += 30;
          if (self.select_page < Math.floor(game.pockets.length / 10)) {
            if (self.select_jiantou_y > 360) {
              self.select_page++;
              self.select_jiantou_y = 90;
            }
          }
          if (self.select_page == Math.floor(game.pockets.length / 10)) {
            if (self.select_jiantou_y >= 90 + 30 * (game.pockets.length % 10 - 1) && game.pockets.length != 0) {
              self.select_jiantou_y = 90 + 30 * (game.pockets.length % 10 - 1);
              self.select_page = Math.floor(game.pockets.length / 10);
            } else { self.select_jiantou_y = 90 }
          }
          break;
        case "KeyS":
          // self.select_jiantou_y -= 30;
          if (self.select_jiantou_y < 90) {
            if (self.select_page > 0) {
              self.select_page--;
              self.select_jiantou_y = 360;
              // console.log(self.select_page);
            } else {
              // console.log(self.select_page);
              self.select_jiantou_y = 90;
              self.select_page = 0;
            }
          }
          break;
        case "KeyE":
          if (self.refresh) {
            self.refresh = false;
            self.similar_wuqi = game.pockets.find(item => { self.temp_arr_1_wuqi.includes(item) });
            self.similar_fangju = game.pockets.find(item => { self.temp_arr_1_fangju.includes(item) });
            if (game.pockets.length > 0) {
              switch (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].type) {
                case "攻击力+":
                  if (self.temp_arr_1_wuqi.length <= 0) {
                    self.temp_arr_1_wuqi.push(game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)]);//装备武器
                    self.attack += self.temp_arr_1_wuqi[0].value;//增加攻击力

                    if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count === 1) {
                      game.pockets.splice(self.select_page * 10 + (self.select_jiantou_y - 90) / 30, 1);//无叠加时
                      self.select_jiantou_y -= 30;
                      if (self.select_jiantou_y < 90) {
                        self.select_jiantou_y = 90;
                      }
                    }
                    if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count > 1) {
                      game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count--;//叠加数量减少1
                    }
                  } else {
                    if (self.similar_wuqi) {
                      self.similar_wuqi.count++;

                      self.attack -= self.temp_arr_1_wuqi[0].value;
                      self.temp_arr_1_wuqi = [];

                      self.temp_arr_1_wuqi.push(game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)]);
                      self.attack += self.temp_arr_1_wuqi[0].value;

                      if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count === 1) {
                        game.pockets.splice(self.select_page * 10 + (self.select_jiantou_y - 90) / 30, 1);//无叠加时
                        self.select_jiantou_y -= 30;
                      } else {
                        game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count--;//叠加数量减少1
                      }
                    } else {
                      game.pockets.push(self.temp_arr_1_wuqi[0]);

                      self.attack -= self.temp_arr_1_wuqi[0].value;
                      self.temp_arr_1_wuqi = [];

                      self.temp_arr_1_wuqi.push(game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)]);
                      self.attack += self.temp_arr_1_wuqi[0].value;

                      if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count === 1) {
                        game.pockets.splice(self.select_page * 10 + (self.select_jiantou_y - 90) / 30, 1);//无叠加时
                        self.select_jiantou_y -= 30;
                      } else {
                        game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count--;//叠加数量减少1
                      }
                    }
                  }
                  break;
                case "防御力+":
                  if (self.temp_arr_1_fangju.length <= 0) {
                    self.temp_arr_1_fangju.push(game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)]);//装备武器
                    self.defen += self.temp_arr_1_fangju[0].value;//增加攻击力

                    if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count === 1) {
                      game.pockets.splice(self.select_page * 10 + (self.select_jiantou_y - 90) / 30, 1);//无叠加时
                      self.select_jiantou_y -= 30;
                      if (self.select_jiantou_y < 90) {
                        self.select_jiantou_y = 90;
                      }
                    }
                    if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count > 1) {
                      game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count--;//叠加数量减少1
                    }
                  } else {
                    if (self.similar_fangju) {
                      self.similar_fangju.count++;

                      self.defen -= self.temp_arr_1_fangju[0].value;
                      self.temp_arr_1_fangju = [];

                      self.temp_arr_1_fangju.push(game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)]);
                      self.defen += self.temp_arr_1_fangju[0].value;

                      if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count === 1) {
                        game.pockets.splice(self.select_page * 10 + (self.select_jiantou_y - 90) / 30, 1);//无叠加时
                        self.select_jiantou_y -= 30;
                      } else {
                        game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count--;//叠加数量减少1
                      }
                    } else {
                      game.pockets.push(self.temp_arr_1_fangju[0]);

                      self.defen -= self.temp_arr_1_fangju[0].value;
                      self.temp_arr_1_fangju = [];

                      self.temp_arr_1_fangju.push(game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)]);
                      self.defen += self.temp_arr_1_fangju[0].value;

                      if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count === 1) {
                        game.pockets.splice(self.select_page * 10 + (self.select_jiantou_y - 90) / 30, 1);//无叠加时
                        self.select_jiantou_y -= 30;
                      } else {
                        game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count--;//叠加数量减少1
                      }
                    }
                  }
                  break;
                case "回复气血":
                  self.current_blood += game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].value;
                  if (self.current_blood >= Math.floor(80 + (self.level + self.level / 50) * 40)) {
                    self.current_blood = Math.floor(80 + (self.level + self.level / 50) * 40);
                  }
                  game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count--;
                  if (game.pockets[(self.select_page * 10 + (self.select_jiantou_y - 90) / 30)].count <= 0) {
                    game.pockets.splice(self.select_page * 10 + ((self.select_jiantou_y - 90) / 30), 1);
                    self.select_jiantou_y -= 30;
                  }
                  break;
              }
              if (self.select_jiantou_y < 90) {
                if (self.select_page > 0) {
                  self.select_jiantou_y = 360;
                  self.select_page--;
                } else {
                  self.select_jiantou_y = 90;
                  self.select_page = 0;
                };
              }
            }
            break;
          }
      }
    }
  }
  render() {
    game.ctx.fillStyle = "#000";
    game.ctx.textBaseline = "middle";
    game.ctx.font = "18px KaiTi";
    if (this.open) {
      game.ctx.fillText(`升级经验:${this.experience}/${50 + Math.floor((this.level + this.level * this.level / 10) * 200)}`, 10, 580);//升级经验
      game.ctx.fillText(`${this.current_hero}`, 130, 70);//主角名称
      game.ctx.textAlign = "right";
      game.ctx.fillText(`人物血量:`, 150, 100);
      game.ctx.fillText(`人物等级:`, 150, 130);
      game.ctx.fillText(`驾驶等级:`, 150, 160);
      game.ctx.fillText(`战斗等级:`, 150, 190);
      game.ctx.fillText(`攻击力:`, 150, 220);
      game.ctx.fillText(`防御力:`, 150, 250);
      game.ctx.fillText(`行动速度:`, 150, 280);
      game.ctx.textAlign = "left";
      game.ctx.fillText(`${this.current_blood}/${Math.floor(80 + (this.level + this.level / 50) * 40)}`, 160, 100);
      game.ctx.fillText(`${this.level}`, 160, 130);
      game.ctx.fillText(`${this.drive_level}`, 160, 160);
      game.ctx.fillText(`${this.fight_level}`, 160, 190);
      game.ctx.fillText(`${this.attack}`, 160, 220);
      game.ctx.fillText(`${this.defen}`, 160, 250);
      game.ctx.fillText(`${this.speed}`, 160, 280);
      //人物身上装备
      game.ctx.fillText(`当前装备:`, 200, 370);
      if (this.temp_arr_1_wuqi.length != 0) {
        game.ctx.textAlign = "right";
        game.ctx.fillText(`武器:`, 150, 400);
        game.ctx.textAlign = "left";
        game.ctx.fillText(`${this.temp_arr_1_wuqi[0].name}`, 160, 400);
        game.ctx.fillText(`${this.temp_arr_1_wuqi[0].type}`, 260, 400);
        game.ctx.fillText(`${this.temp_arr_1_wuqi[0].value}`, 350, 400);
      }
      if (this.temp_arr_1_fangju.length != 0) {
        game.ctx.textAlign = "right";
        game.ctx.fillText(`防具:`, 150, 430);
        game.ctx.textAlign = "left";
        game.ctx.fillText(`${this.temp_arr_1_fangju[0].name}`, 160, 430);
        game.ctx.fillText(`${this.temp_arr_1_fangju[0].type}`, 260, 430);
        game.ctx.fillText(`${this.temp_arr_1_fangju[0].value}`, 350, 430);
      }
      //人物袋子
      game.ctx.fillText(`第${this.select_page + 1}页`, 650, 70);
      game.ctx.drawImage(game.R.jiantou, 470, this.select_jiantou_y, 30, 20);
      if (Math.floor(game.pockets.length / 10) > this.select_page) {
        for (let i = 0; i < 10; i++) {
          game.ctx.textAlign = "right";
          game.ctx.fillText(`${game.pockets[i + (this.select_page * 10)].name}:`, 600, 100 + (30 * i));
          game.ctx.textAlign = "left";
          game.ctx.fillText(`${game.pockets[i + (this.select_page * 10)].type}`, 610, 100 + (30 * i));
          game.ctx.fillText(`${game.pockets[i + (this.select_page * 10)].value}`, 690, 100 + (30 * i));
          game.ctx.fillText(`X${game.pockets[i + (this.select_page * 10)].count}`, 740, 100 + (30 * i));
        }
      }
      if (Math.floor(game.pockets.length / 10) == this.select_page) {
        for (let i = 0; i < game.pockets.length % 10; i++) {
          game.ctx.textAlign = "right";
          game.ctx.fillText(`${game.pockets[i + (this.select_page * 10)].name}:`, 600, 100 + (30 * i));
          game.ctx.textAlign = "left";
          game.ctx.fillText(`${game.pockets[i + (this.select_page * 10)].type}`, 610, 100 + (30 * i));
          game.ctx.fillText(`${game.pockets[i + (this.select_page * 10)].value}`, 690, 100 + (30 * i));
          game.ctx.fillText(`X${game.pockets[i + (this.select_page * 10)].count}`, 740, 100 + (30 * i));
        }
      }
    }
  }
}