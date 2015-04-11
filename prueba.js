  $(window).scroll(function(none) {
  	// var scroll = $(this).scrollTop();
  	// $('#zarai').text("El scrollTop actual es: " + scroll);
    if ($(window).scrollTop() > ($(window).height() - 10)) {
      $(".menu").addClass('on-scroll');
    } else {
      $(".menu").removeClass('on-scroll');
    }
  });
