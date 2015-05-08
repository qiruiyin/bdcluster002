$(document).ready(function () {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		direction: 'vertical',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 0,
		mousewheelControl: true,

		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); 
	    swiperAnimate(swiper); 
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); 
	  } 
	});

	$('body').on('click','[data-link]',function(){
	  swiper.slideTo(6,1000,false);
	});
});