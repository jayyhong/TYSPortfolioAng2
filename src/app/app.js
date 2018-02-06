var app = function ($) {
  var fadeInProject = function ($container) {
      $('.fader').addClass('animate');
      setTimeout(function () {
          $container.addClass('active');
          $('body').addClass('no_scroll');
          $('.screenshots_mobile', $container).slick({
              arrows: false,
              slidesToShow: 1,
              dots: true
          });
          $('.screenshots_container').perfectScrollbar('update');
      }, 800);
      setTimeout(function () {
          $('.fader').removeClass('animate');
      }, 1500);
      setTimeout(function () {
          $container.addClass('in');
      }, 900);
  };
  var initPortfolio = function () {
      $('.projects .project > .holder').click(function (e) {
          e.preventDefault();
          var $obj = $(this).closest('.project');
          fadeInProject($obj);
      });
      $('.projects .project .full .close').click(function (e) {
          e.preventDefault();
          var $obj = $(this);
          var $item = $obj.closest('.project');

          $('.fader').addClass('animate');
          setTimeout(function () {
              $item.removeClass('active').removeClass('in');
              $('body').removeClass('no_scroll');
          }, 800);
          setTimeout(function () {
              $('.fader').removeClass('animate');
          }, 1500);
      });

      $('.screenshots_container').perfectScrollbar();
  };
  var initFader = function () {
      var pageDiagonal = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
      $('.fader').css({
          transform: 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)',
          width: pageDiagonal,
          height: pageDiagonal
      });
      $(window).resize(function () {
          var pageDiagonal = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
          $('.fader').css({
              transform: 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)',
              width: pageDiagonal,
              height: pageDiagonal
          });
      });
  };
  return {
      init: function () {
          initPortfolio();
          initFader();
      }
  };
}(jQuery);

//exports this function to use in app.component.ts
var initializeAnimation = function(){
  app.init()
}

// jQuery(document).ready(function () {
//   app.init();
// });

//# sourceMappingURL=app.js.map
