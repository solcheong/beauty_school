var $window, $body;

var project2Mobile={

	navigation: function(){

		$depth1=$("#nav > ul > li");
		$tab=$(".tab");
		$menu=$(".menu");
		$close=$(".close");

		$tab.click(function(e){
			e.preventDefault();
			$menu.addClass("active");
			$body.addClass("fixed");
		});
		$close.click(function(e){
			e.preventDefault();
			$menu.removeClass("active");
			$body.removeClass("fixed");

			$depth1.each(function(){
				if($(this).hasClass("active") == true){
					$(this).removeClass("active");
					$(this).find("ul").slideUp(300);
				}
			});
		});
		$depth1.click(function(e){
			e.preventDefault();

			if($(this).hasClass("active") == false){
				$depth1.removeClass("active");
				$(this).addClass("active");
				$("#nav ul ul").slideUp(300);
				$(this).find("ul").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	},
	display: function(){
		var w;
		var $dim=$(".dim");

		$window.resize(function(){
			w=$window.width();

			if(w > 760){
				if($dim.hasClass("active")){
					$dim.trigger("click");
				}
			}
		});
		$window.trigger("resize");
	},
	slider: function(){
		var swiper1 = new Swiper('#keyvisual .swiper-container', {
			loop: true,
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
	});
		var swiper2 = new Swiper('.curriculum_gallery .swiper-container', {
			loop: true,
			autoplay: {
				delay: 3000,
			},
			slidesPerView: 3,
			spaceBetween: 20,
		});
		var swiper3 = new Swiper('.instructor_gallery .swiper-container', {
			loop: true,
			autoplay: {
				delay: 3000,
		},
			navigation: {
				prevEl: '.swiper-button-prev',
		},
			pagination: {
				el: '.swiper-pagination',
			},
		});
		var swiper4 = new Swiper('.eventlist .swiper-container', {
			loop: true,
			autoplay: {
				delay: 3000,
		},
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		});
		var swiper5 = new Swiper('.eventlist_text .swiper-container', {
			loop: true,
			autoplay: {
				delay: 3000,
		},
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		});
	}
}
