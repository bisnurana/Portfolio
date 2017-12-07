(function($) {
  smoothScroll(500);
  navMenu();
})(jQuery);

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
      $('#nav-icon').toggleClass('open');
      $('.menu').toggleClass('menu-open');
      $('.menu-item').toggleClass('menu-item-open');
    }
  });
}

function navMenu() {
  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $('.menu').toggleClass('menu-open');
    $('.menu-item').toggleClass('menu-item-open');
  });
}
