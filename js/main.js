let welcome = document.querySelector('.welcome');
let main = document.querySelector('.main');
let base = document.querySelector('.base');
let nav_1 = document.querySelector('.nav_1');
let arr_1 = nav_1.getElementsByTagName('div');
let nav_2 = document.querySelector('.nav_2');
let arr_2 = nav_2.getElementsByTagName('div');
let container = document.querySelector('.container');
let up = document.querySelector('.up');
let lbtn = document.querySelector('#first');
let csstex = lbtn.getElementsByTagName('div');
let down = document.querySelector('.down');
let down_arr = down.getElementsByTagName('div');
let div_2 = document.createElement('div');
let div_3 = document.createElement('div');
div_2.classList.add('week');
div_3.classList.add('day');
up.appendChild(div_2);
up.appendChild(div_3);

window.addEventListener('load', () => {
  let temp = 'html';
  main.style.height = document.body.scrollHeight - 103 + 'px';
  welcome.style.height = Math.ceil(window.innerHeight * 0.15) + 'px';

  let arr_week = ['日', '一', '二', '三', '四', '五', '六'];
  let month_day = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let day_count = null;
  let date = new Date();
  let year = date.getFullYear();//年
  let month = date.getMonth() + 1;//月
  let day = date.getDate();//日
  let week_day = date.getDay();//星期几
  let first_day = date.setDate(1);//设置1号
  let first_week_day = date.getDay();//一号星期几
  function show(year, month, first_week_day) {
    if (month < 10) {
      month = '0' + month;
    }
    let str_3 = year + '年' + month + '月';
    csstex[1].innerText = `${str_3}`;
    if (month == 2) {
      if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
        day_count = 29;
        month_day[2] = 29;
      } else {
        day_count = 28;
        month_day[2] = 28;
      }
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      day_count = 31;
    } else {
      day_count = 30;
    }

    for (let i = 0; i < 7; i++) {
      div_2.innerHTML += `<div>${arr_week[i]}</div>`
    }
    for (let i = 0; i < first_week_day; i++) {
      div_3.innerHTML += `<div style="color:#fff">${month_day[month - 1] - first_week_day + i + 1}</div>`
    }
    for (let i = 1; i <= day_count; i++) {
      div_3.innerHTML += `<div>${i}</div>`
    }
    div_3.children[day + first_week_day - 1].classList.add('active')
  }
  show(year, month, first_week_day);
  csstex[0].onclick = function () {
    div_2.innerHTML = '';
    div_3.innerHTML = '';
    month--;
    if (month < 1) {
      month = 12;
      year--;
    }
    date.setMonth(month - 1);
    date.setDate(1);
    show(year, month, date.getDay());
  }
  csstex[2].onclick = function () {
    div_2.innerHTML = '';
    div_3.innerHTML = '';
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
    date.setMonth(month - 1);
    date.setDate(1);
    show(year, month, date.getDay());
  }



  let xhr = new XMLHttpRequest();
  xhr.open("get", "html.json");
  xhr.send(null);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      let html_arr = JSON.parse(xhr.responseText);
      // console.log(html_arr.arr[0].url);
      if (html_arr) {
        for (const i in left_info) {
          // console.log(i);
          down.innerHTML += `<div><a href="${html_arr.arr[i].url}" target="_blank" rel="noopener noreferrer">${left_info[i].info}</a></div>`;
        }
      } else {
        console.log("an error happend ,nothing get");
      }
    }
  }



  for (const i of nav_1_info) {
    nav_1.innerHTML += `<div>${i}</div>`;
  }
  arr_1[0].classList.add('active_1');

  for (const i of htmlSource) {
    nav_2.innerHTML += `<div>${i}</div>`;
  }
  arr_2[0].classList.add('active_1');

  container.innerText = detail_info[temp][0];

  nav_1.onclick = function (e) {
    for (i = 0; i < arr_1.length; i++) {
      arr_1[i].classList.remove('active_1');
      arr_1[i].index = i;
    }
    e.target.classList.add('active_1');
    switch (e.target.index) {
      case 0:
        nav_2.innerHTML = '';
        for (const i of htmlSource) {
          nav_2.innerHTML += `<div>${i}</div>`;
        }
        arr_2[0].classList.add('active_1');
        temp = 'html';
        container.innerText = detail_info[temp][0];
        break;
      case 1:
        nav_2.innerHTML = '';
        for (const i of cssSource) {
          nav_2.innerHTML += `<div>${i}</div>`;
        }
        arr_2[0].classList.add('active_1');
        temp = 'css';
        container.innerText = detail_info[temp][0];
        break;
      case 2:
        nav_2.innerHTML = '';
        for (const i of jsSource) {
          nav_2.innerHTML += `<div>${i}</div>`;
        }
        arr_2[0].classList.add('active_1');
        temp = 'js';
        container.innerText = detail_info[temp][0];
        break;
      case 3:
        nav_2.innerHTML = '';
        for (const i of canvasSource) {
          nav_2.innerHTML += `<div>${i}</div>`;
        }
        arr_2[0].classList.add('active_1');
        temp = 'canvas';
        container.innerText = detail_info[temp][0];
        break;
      // case 4:
      //   nav_2.innerHTML = '';
      //   for (const i of webglSource) {
      //     nav_2.innerHTML += `<div>${i}</div>`;
      //   }
      //   arr_2[0].classList.add('active_1');
      //   temp = 'webgl';
      //   container.innerText = detail_info[temp][0];
      //   break;
      case 4:
        nav_2.innerHTML = '';
        for (const i of vueSource) {
          nav_2.innerHTML += `<div>${i}</div>`;
        }
        arr_2[0].classList.add('active_1');
        temp = 'vuejs';
        container.innerText = detail_info[temp][0];
        break;
      case 5:
        nav_2.innerHTML = '';
        for (const i of nodeSource) {
          nav_2.innerHTML += `<div>${i}</div>`;
        }
        arr_2[0].classList.add('active_1');
        temp = 'nodejs';
        container.innerText = detail_info[temp][0];
        break;
    }
  }

  nav_2.onclick = function (e) {
    for (i = 0; i < arr_2.length; i++) {
      arr_2[i].classList.remove('active_1');
      arr_2[i].index = i;
    }
    if (e.target == nav_2) {
      container.innerText = '看看其他的吧,这里啥也没有,别点这里';
    } else {
      e.target.classList.add('active_1');
      container.innerText = detail_info[temp][e.target.index];
    }
  }
})
window.addEventListener('resize', () => {
  main.style.height = document.body.scrollHeight - (welcome.style.height + 103) + 'px';
  welcome.style.height = Math.ceil(window.innerHeight * 0.15) + 'px';
})