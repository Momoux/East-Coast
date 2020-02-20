// JavaScript Document

//mobile menu

$(function() {
	menu = $("nav ul");
	
	$("#toggle-btn").on("click", function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function() {
		var w =$(this).width();
		if(w > 580 && menu.is(":hidden")){
			menu.removeAttr("style");
		}
		
	});
	
	$("nav li").on("click", function(e) {
		var w = $(window).width();
		if(w < 580) {
			menu.slideToggle();
		}
	});
	$(".open-menu").height($(window).height());
	
});

$(function() {
	$('.multiple-items').slick({
  	infinite: true,
  	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: false,
	centerpadding: "0",
	prevArrow: $('.prev'),
    nextArrow: $('.next'),
		
});
	
});


