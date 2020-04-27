// 顶部的导航隐藏显示
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