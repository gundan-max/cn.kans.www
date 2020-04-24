

$('.tab .top li').on('click', function () {
    $('.tab .bottom img').hide()
    let index = $(this).index()
    $('.tab .bottom img').eq(index).show()
})