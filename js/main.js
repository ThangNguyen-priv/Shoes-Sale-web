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

// script chọn kích cỡ
document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('.size-option').forEach(button => {
		button.addEventListener('click', function() {
			document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('active'));
			this.classList.add('active');
		});
	});
});

//hướng dẫn chọn size khi ấn vào link footer
document.addEventListener("DOMContentLoaded", function () {
    // Tạo modal và thêm vào body
    const modalHTML = `
        <div id="sizeGuideModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Hướng dẫn chọn size</h4>
                    </div>
                    <div class="modal-body">
                        <img src="https://myshoes.vn/image/catalog/banner/chon-size.png" alt="Hướng dẫn chọn size" class="img-responsive">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>`;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
});

$(document).on("click", "#openSizeGuide", function (e) {
	e.preventDefault();
	$("#sizeGuideModal").modal("show");
});
