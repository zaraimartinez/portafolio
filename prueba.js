  $(window).scroll(function() {
  	var menu= $(this).scrollTop();
  	if (menu > 200){
  		$(".navbar").addClass("scroll");
  	}
    // if ($(window).scrollTop() > ($(window).height() - 10)) {
    else if (menu < 450){
      $(".navbar").removeClass("scroll");
    }

  });


$(document).ready(function(){
  $(".nav").hover(function(){
    $(".hover-llaves").toggleClass("hidden");
 
  });
});