let gnbHtml = $('.gnb').html();
$('.mo_gnb_box .mo_gnb').html(gnbHtml);

$('.hamburger').click(function(){
    $(this).toggleClass('on')
    $('.mo_gnb_box').toggle();
})