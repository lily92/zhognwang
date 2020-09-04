/**
 * 获取滚动条距离顶端的距离
 * @return {}支持IE6
 */  
function getScrollTop() {  
  var scrollPos;  
  if (window.pageYOffset) {  
  scrollPos = window.pageYOffset; }  
  else if (document.compatMode && document.compatMode != 'BackCompat')  
  { scrollPos = document.documentElement.scrollTop; }  
  else if (document.body) { scrollPos = document.body.scrollTop; }   
  return scrollPos;   
} 
$(function () {
  // 加载header
  var scrollTops = 0;
  $('header').load("header.html", "", function (response, status, request) {
    $(this).html(response);
   
    $(window).scroll(function () {
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
        scrollTops = document.body.scrollTop
      }
      if (scrollTop > 30) {
        $('header').addClass('active')
        
      } else {
        $('header').removeClass('active')
      }
    })
    /*pc端导航*/
    $('#case').hover(function () {
      // over
      $('header').addClass('active')
      $('#case_con').stop().slideDown()

    }, function () {
      // out
    });
    $('#case_con').mouseleave(function () {
      $('#case_con').stop().slideUp()
      if($(window).scrollTop() > 30){
        $('header').addClass('active')
      }else{
        $('header').removeClass('active')
      }
    });

    $('.nav-list li').hover(function () {
      // over
      $(this).find('.submenu').stop().slideDown()


    }, function () {
      // out
      $(this).find('.submenu').stop().slideUp()
    });

    /*移动端导航*/
    $('.phone-nav').click(function (e) {
      e.preventDefault();
      $('.phone-nav-list').addClass('active');
    });

    $('.colse-phone-nav').click(function (e) {
      e.preventDefault();
      $('.phone-nav-list').removeClass('active');

    });

    $('.sub-icon').click(function (e) {
      e.preventDefault();
      $(this).parent().find('.submenu').stop().slideToggle();
      $(this).toggleClass('active')

    });


  });


  //加载footer
  $('footer').load("footer.html", "", function (response, status, request) {
    $(this).html(response);
    //当点击跳转链接后，回到页面顶部位置
    $("#totop").click(function () {
      $('body,html').animate({
          scrollTop: 0
        },
        500);

    });

  });

  new WOW().init();



})