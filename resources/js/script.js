$(document).ready(function() {

  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window') 
  // }, {
  //   offset: '25%'
  // })

  // For Sticky nav bar
  $('.js--section-features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  })

  // Scroll on Buttons
  $('.js--scroll-to-plan').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
  })

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top}, 1000)
  })

  // Smooth Scrolling
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Animations on Scroll
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {
  offset: '50%'
  });
 
  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInBottomLeft');
  }, {
  offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  }, {
  offset: '50%'
  });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animate__animated animate__flash');
  }, {
  offset: '50%'
  });
});

// Sticky Mobile Navi
$('.js--nav-icon').click(function () {
  const nav = $('.js--main-nav');
  const icon = $('.js--nav-icon i');

  nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');  
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

$(window).resize(function(){
  const nav = $('.js--main-nav');
  const icon = $('.js--nav-icon i');

  if ($(window).width() > 767){
    nav.css("display", "block");
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');
  } else {
    nav.css("display", "none");
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
  }
});