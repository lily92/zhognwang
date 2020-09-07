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
      $(this).addClass('active')
      $('header').addClass('active')
      $('#case_con').stop().fadeIn()

    }, function () {
      // out
    });
    $('#case_con').mouseleave(function () {
      $('#case_con').stop().fadeOut()
      if($(window).scrollTop() > 30){
        $('header').addClass('active')
      }else{
        $('header').removeClass('active')
      }
    });

    $('.nav-list li').hover(function () {
      // over
      $(this).find('.submenu').stop().fadeIn()


    }, function () {
      // out
      $(this).find('.submenu').stop().fadeOut()
    });

    /*移动端导航*/
    $('.menu-btn').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('active');
      $('header,.main').toggleClass('cur');
      $('.phone-menu-list').toggleClass('active');
    });

    $('.service-nav').click(function (e) { 
      e.preventDefault();
      $('.phone-menu-sub').addClass('active')
    });

    $('.menu-back').click(function (e) { 
      e.preventDefault();
      $('.phone-menu-sub').removeClass('active')
    });

    $('#btn_close').click(function (e) { 
      e.preventDefault();
      $('.menu-btn').click()
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

  layui.use('flow', function () {
    var flow = layui.flow;
    //当你执行这样一个方法时，即对页面中的全部带有lay-src的img元素开启了懒加载（当然你也可以指定相关img）
    flow.lazyimg();
  });

  new WOW().init();




})