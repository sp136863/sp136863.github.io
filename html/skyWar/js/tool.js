function enmy_1IsCrash(me, enmy) {
  if (me.x < (enmy.x + enmy.num + 33) &&
    me.x + 6 > (enmy.x + enmy.num) &&
    me.y < (enmy.y + enmy.initY + 34) &&
    me.y + 14 > (enmy.y + enmy.initY)) {
    return true;
  }
};
function enmy_2Iscrash(me, enmy) {
  if (me.x < (enmy.x + 66) &&
    me.x + 6 > (enmy.x) &&
    me.y < (enmy.y + enmy.initY + 48) &&
    me.y + 14 > (enmy.y + enmy.initY)) {
    return true;
  }
};
function enmy_3Iscrash(me, enmy) {
  if (me.x <= (enmy.x + enmy.w) &&
    me.x + 6 >= (enmy.x) &&
    me.y <= (enmy.y + enmy.h) &&
    me.y + 14 >= (enmy.y)) {
    return true;
  }
};
function isBossCrash(me, boss) {
  if (me.x < (boss.x + 100) &&
    me.x + 6 > boss.x &&
    me.y < (boss.y + 85) &&
    me.y + 14 > boss.y) {
    return true;
  }
};
function isHeroCrash({ enmy_1, hero }) {
  if ((enmy_1.x + enmy_1.num + 33) > hero.x &&
    (enmy_1.x + enmy_1.num) < hero.x + 32 &&
    (enmy_1.y + enmy_1.initY + 34) > (hero.y + hero.temp) &&
    (enmy_1.y + enmy_1.initY) < (hero.y + hero.temp + 43)) {
    return true;
  }
};
function isHeroCrash_1({ hero, boss_bullet_1 }) {
  if (boss_bullet_1.x < hero.x + 32 &&
    boss_bullet_1.x + 10 > hero.x &&
    boss_bullet_1.y < (hero.y + hero.temp + 43) &&
    boss_bullet_1.y + 10 > (hero.y + hero.temp)) {
    return true;
  }
};
function isHeroCrash_2({ hero, boss_bullet_2 }) {
  if (boss_bullet_2.x < hero.x + 32 &&
    boss_bullet_2.x + 10 > hero.x &&
    boss_bullet_2.y < (hero.y + hero.temp + 43) &&
    boss_bullet_2.y + 10 > (hero.y + hero.temp)) {
    return true;
  }
};
function isHeroCrash_3({ hero, boss_bullet_3 }) {
  if (boss_bullet_3.x < hero.x + 32 &&
    boss_bullet_3.x + 10 > hero.x &&
    boss_bullet_3.y < (hero.y + hero.temp + 43) &&
    boss_bullet_3.y + 10 > (hero.y + hero.temp)) {
    return true;
  }
};
function isHeroCrash_4({ hero, boss_bullet_4 }) {
  if (boss_bullet_4.x < hero.x + 32 &&
    boss_bullet_4.x + 10 > hero.x &&
    boss_bullet_4.y < (hero.y + hero.temp + 43) &&
    boss_bullet_4.y + 10 > (hero.y + hero.temp)) {
    return true;
  }
};
function isHeroCrash_5({ hero, boss_bullet_5 }) {
  if (boss_bullet_5.x < hero.x + 32 &&
    boss_bullet_5.x + 10 > hero.x &&
    boss_bullet_5.y < (hero.y + hero.temp + 43) &&
    boss_bullet_5.y + 10 > (hero.y + hero.temp)) {
    return true;
  }
};