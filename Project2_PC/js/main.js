var $window, $body;

var project2PC={
	navigation: function(){
		var $depth1=$("#nav > ul > li");

		$depth1.hover(
			function(){
				$(this).addClass("active");
				$("#nav").stop().animate({height:300}, 300);
			},
			function(){
				$(this).removeClass("active");
				$("#nav").stop().animate({height:67}, 300);
			}
		);
		$depth1.children("a").focusin(function(){
			$(this).parent().addClass("active");
			$("#nav").stop().animate({height:300}, 300);
		});
		$("#nav li li:last-child").focusout(function(){
			$(this).parent().parent().removeClass("active");
		});
		$("#nav li:last-child li:last-child").focusout(function(){
			$("#nav").stop().animate({height:67}, 300);
		});
	},
	keyvisual: function(){
		var owl=$(".owl-carousel");

		owl.owlCarousel({
			margin: 0,
			nav: false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				2000: {
					items: 1
				}
			}
		});
		owl.trigger("refresh.owl.carousel");
	},
	notice: function(){
		var $anounce=$(".title .anounce");

		$anounce.click(function(){
			$(".notice_desc").show();
			$(".news_desc").hide();
			$anounce.addClass("active");
			$(".title .news").removeClass("active");
		});
		$(".title .news").click(function(){
			$(".notice_desc").hide();
			$(".news_desc").show();
			$anounce.removeClass("active");
			$(".title .news").addClass("active");
		});
	},
	search: function(){
		var listName="";
		var $areaDt=$(".area_zone dt a");
		var $areaDd=$(".area_zone dd");

		$areaDt.click(function(e){
			e.preventDefault();
			if($(this).parent().next("dd").is(":visible") == false) {
				$areaDd.slideUp(300);
				$(this).parent().next("dd").slideDown(300);
				$(this).addClass("active");
			}
			else {
				$(this).parent().next("dd").slideUp(300);
				$(this).removeClass("active");
			}
		});
		$areaDd.children("a").click(function(e){
			e.preventDefault();
			$areaDd.children("a").removeClass("active");
			$areaDd.slideUp(300);
			$areaDt.removeClass("active");
			listName=$(this).text();
			$(this).parents("dd").prev("dt").children("a").text(listName);
		});
	},
	media: function(){
		var bannerNum=0;
		var bannerPos=0;
		var $controlls=$(".controlls li");

		$controlls.eq(bannerNum).addClass("active");
		$controlls.click(function(e){
			e.preventDefault();
			$controlls.removeClass("active");
			$(this).addClass("active");
			bannerNum=$(this).index();
			bannerPos=-1*368*bannerNum;
			$(".media_moving").animate({left:bannerPos}, 300);
		});
	},
	gallery: function(){
		var gallery=$(".instructor_list ul");
		var gallerypos=0;
		var galleryw=240;
		var $left=$(".left");
		var $right=$(".right");

		function leftMoving(node=gallery, pos=gallerypos, w=galleryw){
			pos-=w;
			$(node).animate({left:pos}, 500, function(){
				$(this).append(node.find("li").first());
				pos+=w;
				$(this).css({left:pos});
			});
		}
		function rightMoving(node=gallery, pos=gallerypos, w=galleryw){
			$(node).prepend(node.find("li").last());
			pos-=w;
			$(node).css({left:pos});

			pos+=w;
			$(node).animate({left:pos}, 500);
		}

		var id=setInterval(leftMoving, 3000);

		$left.click(function(e){
			e.preventDefault();
			rightMoving();
		});
		$right.click(function(e){
			e.preventDefault();
			leftMoving();
		});
		$left, $right.mouseenter(function(){
			clearInterval(id);
		});
		$left, $right.mouseleave(function(){
			id=setInterval(leftMoving, 6000);
		});
	}
}
