// 所有元素的获取 和变量的声明 都在这里了
let slider = document.querySelector('.slider');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let sliderWidth = slider.offsetWidth;// 获取窗口的宽度
let num = 0;// 声明计算器
let ul = document.querySelector('ul');
let ol = document.querySelector('ol');
let fisrtLi = document.querySelector('ul li:first-child');
// console.log(fisrtLi);
ul.appendChild(fisrtLi.cloneNode(true))
ul.style.width = ul.children.length * sliderWidth + 'px';

// 功能1:鼠标经过轮播图区域左右按钮显示，离开该区域左右按钮隐藏(用css实现更好)
// 1.1.左右按钮 就应该隐藏(在css中写)
// 1.2.获取轮播图对象 左右按钮
// 1.3.给轮播图区域添加mouseover(移入) mouseout(移出)(mouseenter mouseleave)
slider.addEventListener('mouseenter', function () {
  // console.log(slider, prev, next);
  // 1.4.让鼠标移入 按钮显示 移出 按钮隐藏
  prev.style.display = 'block';
  next.style.display = 'block';
})

slider.addEventListener('mouseleave', function () {
  // console.log(slider, prev, next);
  // 1.4.让鼠标移入 按钮显示 移出 按钮隐藏
  prev.style.display = 'none';
  next.style.display = 'none';
})


// 功能2: 点击右箭头 图片往左走 点击一次 走一张图片

// 0.找到ul中的第一个li 克隆节点(第10行)
// 1.把克隆的第一个li添加到ul里面(第10行)
// 2.给右箭头添加点击事件
next.addEventListener('click', function () {
  // 3.判断图片是否走到了最后一个 num
  // 3.1 如果是 num 的值和图片的个数一样 那么就让num为0
  // console.log(num, ul.children.length - 1)
  // 索引是不是最后一个
  if (num == ul.children.length - 1) {

    // 那么就让num为0
    ul.style.left = 0;
    num = 0;
  }
  // 4.让num++
  num++;
  // 5.让ul移动
  animate(ul, {
    left: -num * sliderWidth
  })
})

// 功能3:点击左箭头 图片往右走 点击一次 走一张图片 无缝的轮播
// 3.1.给左边箭头注册点击事件
prev.addEventListener('click', function () {
  // 3.2.判断一下 num是不是0
  if (num == 0) {
    // 3.3.如果是0, 让num为ul数组的最大索引
    num = ul.children.length - 1;
    // 3.4.同时让ul的left变成 - num * 窗口宽度
    ul.style.left = -num * sliderWidth + 'px';
  }
  // 3.5.让num递减
  num--;
  // 3.6.移动ul
  animate(ul, {
    left: -num * sliderWidth
  })

})


// 功能4: 点击小圆点导航 轮播图移动到对应的图片
// 4.1 获取到ul ol
// 4.2 遍历ul中的元素
for (let i = 0; i < ul.children.length - 1; i++) {
  // 4.2.1 通过createElement()方法来创建li
  let li = document.createElement('li');
  li.dataset.index = i;
  // 4.2.2 把创建出来的li添加到ol中去
  if (i == 0) {
    li.classList.add('active');
  }
  // 把创建好的li添加到ol中去
  ol.appendChild(li);

  li.addEventListener('click', function () {
    // console.log(this);
    // 排他
    for (let j = 0; j < ol.children.length; j++) {
      ol.children[j].classList.remove('active');
    }
    // 自己添加active
    this.classList.add('active');

    // 点击谁 就把谁的索引拿出来
    let index = this.dataset.index;
    // console.log(index);
    animate(ul, {
      left: -index * sliderWidth
    })
  })
}
