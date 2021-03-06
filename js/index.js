// 顶部的导航
// 关于韩束模块的隐藏显示
$('.about').on('mouseover', function () {
  $('.box').show()
})
$('.about').on('mouseout', function () {
  $('.box').hide()
})
// 胶囊系列模块的隐藏显示
$('.cachet').on('mouseover', function () {
  $('.bigbox').show()
})
$('.cachet').on('mouseout', function () {
  $('.bigbox').hide()
})
// BIO-G系列模块的隐藏显示
$('.bing').on('mouseover', function () {
  $('.smallbox').show()
})
$('.bing').on('mouseout', function () {
  $('.smallbox').hide()
})


// 中间轮播图
// 获取当前的大盒子的宽度
var $width = $('.screen').width();
// 定义全局的索引，控制小方块
var $index = 0;
// 定义变量，控制图片的索引
var $pic = 0;

// 功能2：克隆第一张图片到ul里面
$('.screen>ul').append($('.screen>ul>li:first-child').clone(true))

// 功能3，根据图片创建小方块到ol
var $ulisObjs = $($('.screen>ul>li'))
for (let i = 0; i < $ulisObjs.length - 1; i++) {
  $('.screen>ol').append($('<li></li>'))
}
// 给第一个小方块添加类名current
$('.screen>ol>li:first-child').addClass('current')


// 功能4，点击小方块进行滑动
$('.screen>ol>li').on('mouseenter', function () {
  // 设置$index的值
  $index = $(this).index();
  // 设置$pic的值
  $pic = $(this).index();
  // 当前的小方块添加current类名，其他的移除
  $(this).addClass('current').siblings().removeClass('current')
  // 获取移动的距离
  var $distance = -$index * $width
  // 让上面的ul跟着滑动
  $('.screen>ul').stop().animate({
    left: $distance
  }, 1000)

})

// 功能5：点击右箭头，进行下一张切换
$('.right').on('click', function () {
  // 给小圆点的索引++
  $index++;
  // 判断$index是否是5，如果是5，直接就移动到0的位置整个ul
  if ($pic >= $('.screen>ul>li').length - 1) {
    $('.screen>ul').css('left', 0)
    //重置索引
    $pic = 0;
  }
  // $pic进行++
  $pic++
  // 获取移动的距离
  var $distance = -$pic * $width
  // 让上面的ul跟着滑动
  $('.screen>ul').stop().animate({
    left: $distance
  }, 1000)

  // 控制小圆点的索引
  if ($index == $('.screen>ul>li').length - 1) {
    $index = 0;
  }
  // 让小方块添加类名current
  $('.screen>ol>li').eq($index).addClass('current').siblings().removeClass('current')

})

// 功能6：点击左箭头，进行上一张切换
$('.left').on('click', function () {
  // 小圆点的索引--;
  $index--;
  // 先判断是否是第一张
  if ($pic == 0) {
    // 直接定位到倒数第一张
    $('.screen>ul').css("left", -($('.screen>ol>li').length * $width))
    //重置$pic
    $pic = $('.screen>ol>li').length
  }
  // 之后$pic进行自减
  $pic--;
  // 获取移动的距离
  var $distance = -$pic * $width
  // 让上面的ul跟着滑动
  $('.screen>ul').stop().animate({
    left: $distance
  }, 1000)
  // 控制小圆点的索引
  if ($index < 0) {
    $index = $('.screen>ol>li').length - 1;
  }
  // 让小方块添加类名current
  $('.screen>ol>li').eq($index).addClass('current').siblings().removeClass('current')

})

// 功能7：开启定时器
var timer = setInterval(function () {
  $('.right').click()
}, 7000)

// 鼠标移动到box的时候关闭定时器，鼠标离开开启定时器
$('#box').on('mouseenter', function () {
  clearInterval(timer)
})
// 鼠标离开
$("#box").on('mouseleave', function () {
  timer = setInterval(function () {
    $('.right').click()
  }, 3000)
})


// 列表项
// $('.list ul li').on('mouseover', function () {
//   $('.list ul li .up').hide()
// })
// $('.list ul li').on('mouseout', function () {
//   $('.list ul li .up').show()
// })


$(".list>ul>li").mouseenter(function () {
  //设置当前的li的透明度的同时修改当前的li的所有的兄弟元素li的透明度
  $('.list>ul>li>.up').css({
    'display': 'none'
  })
  $(this).siblings(".up").css({
    'display': 'block'
  });
});
//鼠标离开事件
$(".list>ul>li").mouseleave(function () {
  //从当前的div中所有的li,设置透明度
  $(this).find(".up").css({
    'display': 'block'
  });
});
