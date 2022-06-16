$(document).ready(function () {

    //AOS
    $(function () {
        AOS.init();
    })

    //notice
    // $('.notice-content').hide();
    $('.notice-title').click(function () {
        $('.notice-title .arrow').toggleClass("rotate");
        $(this).next('.notice-content').slideToggle(500);
    })
  //m版漢堡選單
  $('#toggle').click(function (e) {
    $('.main-nav, nav.main-nav, #toggle, #header').toggleClass('on');
    e.preventDefault();
});
$('.main-nav ul.anchor li a').click(function () {
    $('#header,#toggle, .main-nav').removeClass('on')
})


  //gotop        
  var float_btn = $('.float_btn');
  var gotop = $('#gotop');
  gotop.click(function () {
      $('html,body').animate({
          scrollTop: 0
      }, 500);
  });
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         float_btn.fadeIn();
      } else {
         float_btn.stop().fadeOut();
      }
  });
  if ($(window).width() < 769) {
     
      $(window).scroll(function(){
           //最後一頁scrollTop=body-window，50是預留空間
   last=$("body").height()-$(window).height()-200
   if($(window).scrollTop()>=last){
      $(".float_action_group").hide()
   }
   else{
      $(".float_action_group").show()
   }
       
      })
  }
    //錨點捲動
    $('a[href*="#"]').on('click', function () {
              $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 20
            }, 500, 'linear');
    })          
    
    
})