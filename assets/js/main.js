/* Scroll */
function menu_scroll() {
  $('a.scroll[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

}

/* Banner */
function banner() {
  var $item = $('.carousel .item');
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('full-screen');

  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image': 'url(' + $src + ')',
      'background-color': $color
    });
    $(this).remove();
  });

  $(window).on('resize', function() {
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });
}


/*Menu animation */
function menu_animation() {
  $(".mobile__label").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

      $(window).bind('scroll', function() {

        if ($(window).scrollTop() > 150)
          $('.navbar').addClass('nav-down');
        else
          $('.navbar').removeClass('nav-down');
      });

      // Hide Header on on scroll down
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.navbar').outerHeight();

      $(window).scroll(function(event) {

        var st = $(this).scrollTop();

        var mq = window.matchMedia( "(max-width: 767px)" );
        if (mq.matches) {
          return;
        }
      
        if (Math.abs(lastScrollTop - st) <= delta)
          return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
          $('.navbar').removeClass('nav-down').addClass('scrolled');
        } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('scrolled');
          }
        }

        lastScrollTop = st;
      });

}



function slide() {
  $(window).scroll(function() {
    $('.img-serv').each(function() {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 400) {
        $(this).addClass("slideUp");
      }
    });
  });
}

function pull() {
  $(window).scroll(function() {
    $('.content-ideas').each(function() {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 400) {
        $(this).addClass("pullUp");
      }
    });
  });
}

function scrollFunction() {
  window.onscroll = function() {
    document.getElementById("scrolltop").style.display = (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? "block" : "none";
    document.getElementById("scrolldown").style.display = (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? "none" : "block";
  };
}

$(function() {
  menu_animation();
  menu_scroll();
  banner();
  slide();
  scrollFunction();
  // pull();

});