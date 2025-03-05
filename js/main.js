/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});

/*press to left and right*/

$(document).ready(function () {
	let currentPosition = 0;
	const totalSlides = 2; // 10 sản phẩm, mỗi lần 5 sản phẩm
	const slideWidth = 100 / totalSlides; // 50% mỗi lần trượt

	$(".next-btn").click(function () {
		if (currentPosition < totalSlides - 1) {
			currentPosition++;
			$(".product-container").css("transform", `translateX(-${currentPosition * slideWidth}%)`);
		}
	});

	$(".prev-btn").click(function () {
		if (currentPosition > 0) {
			currentPosition--;
			$(".product-container").css("transform", `translateX(-${currentPosition * slideWidth}%)`);
		}
	});
});
