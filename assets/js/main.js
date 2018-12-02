"use strict";

$(function() {

	$(".rslides-header").responsiveSlides({
		prevText: '<i class="zmdi zmdi-chevron-left zmdi-hc-2x text-center"></i>',
		nextText: '<i class="zmdi zmdi-chevron-right zmdi-hc-2x text-center"></i>',
		nav: true
	});

	$(".scrolldown").on("click", function(){
		$("html,body").animate({
			scrollTop: $("header").height()
		});
	});

	$(".slick-features").slick({
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<i class="zmdi zmdi-chevron-left zmdi-hc-2x text-center"></i>',
		nextArrow: '<i class="zmdi zmdi-chevron-right zmdi-hc-2x text-center"></i>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
   		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	$(".slick-features2").slick({
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<i class="zmdi zmdi-chevron-left zmdi-hc-2x text-center"></i>',
		nextArrow: '<i class="zmdi zmdi-chevron-right zmdi-hc-2x text-center"></i>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
	});

	$(".slick-testimonials").slick({
		slidesToShow: 1,
		prevArrow: '<i class="zmdi zmdi-chevron-left text-center"></i>',
		nextArrow: '<i class="zmdi zmdi-chevron-right text-center"></i>',
	});

	$(".popular-scrolldown").on("click", function(){
		$('html,body').animate({
          scrollTop: $(".tutorials").offset().top - 50
        }, 1000);
	});

	var $teacher = 	$(".teacher > a");

	$teacher.hover(function(){
		$(this).siblings(".imgcontainer").find(".overlay").fadeIn();
	});

	$teacher.mouseout(function(){
		$(this).siblings(".imgcontainer").find(".overlay").fadeOut();
	});

	$(".jquery-select").selectmenu();

	$("#teacher-single .tutorials").slick({
		slidesToShow: 3,
		prevArrow: '<i class="zmdi zmdi-chevron-left text-center"></i>',
		nextArrow: '<i class="zmdi zmdi-chevron-right text-center"></i>',
		responsive: [
   		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".option-title").on("click", function(){
		var $parent = $(this).parent();
		$parent.addClass("opened");
		$parent.siblings().removeClass("opened");
	});

	$(".courses-side-slick").slick({
		slidesToShow: 1,
		prevArrow: '<i class="zmdi zmdi-chevron-left text-center"></i>',
		nextArrow: '<i class="zmdi zmdi-chevron-right text-center"></i>'
	});

	$(".loadmore").on("click", function(e){
		$(this).fadeOut(500);
		$(".more-categories").slideDown(700);
		$(".service-categories").animate({"margin-bottom": 0}, 700);
		e.preventDefault();
	});


	if(window.innerWidth < 768){
		var $items = $("#myNavbar > ul > li > a");
		$items.each(function(i, el){
			if($(el).attr("href") == "#"){
				$(this).on("click",function(e){
					e.preventDefault();
					$(".submenu").hide();
					$(this).siblings(".submenu").show();

				});
			}
		});
	}
	
});
/*!
 * jQuery meanMenu v2.0.6
 * @Copyright (C) 2012-2013 Chris Wharton (https://github.com/weare2ndfloor/meanMenu)
 *
 */
!function(e){"use strict";e.fn.meanmenu=function(n){var a={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanRevealHoverColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,removeElements:""},n=e.extend(a,n),t=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){function e(){if("center"==c){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";P="left:"+n+";right:auto;",A?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}}function a(){jQuery(W).is(".meanmenu-reveal.meanclose")?W.html(o):W.html(s)}function r(){jQuery(".mean-bar,.mean-push").remove(),jQuery(m).removeClass("mean-container"),jQuery(u).show(),E=!1,M=!1,jQuery(x).removeClass("mean-remove")}function i(){if(d>=t){jQuery(x).addClass("mean-remove"),M=!0,jQuery(m).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+R+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var e=jQuery(u).html();jQuery(".mean-nav").html(e),C&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(u).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",y),jQuery(u).hide(),jQuery(".meanmenu-reveal").show(),jQuery(j).html(s),W=jQuery(j),jQuery(".mean-nav ul").hide(),Q?f?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+l+'">'+g+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(g),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(p),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),W.removeClass("meanclose"),jQuery(W).click(function(e){e.preventDefault(),0==E?(W.css("text-align","center"),W.css("text-indent","0"),W.css("font-size",l),jQuery(".mean-nav ul:first").slideDown(),E=!0):(jQuery(".mean-nav ul:first").slideUp(),E=!1),W.toggleClass("meanclose"),a(),jQuery(x).addClass("mean-remove")}),w&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),E=!1,jQuery(W).toggleClass("meanclose").html(s)})}else r()}var u=n.meanMenuTarget,m=n.meanMenuContainer;n.meanReveal;var o=n.meanMenuClose,l=n.meanMenuCloseSize,s=n.meanMenuOpen,c=n.meanRevealPosition,v=n.meanRevealPositionDistance,h=n.meanRevealColour;n.meanRevealHoverColour;var d=n.meanScreenWidth,y=n.meanNavPush,j=".meanmenu-reveal",Q=n.meanShowChildren,f=n.meanExpandableChildren,g=n.meanExpand,p=n.meanContract,C=n.meanRemoveAttrs,w=n.onePage,x=n.removeElements;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))var A=!0;(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var E=!1,M=!1;if("right"==c&&(P="right:"+v+";left:auto;"),"left"==c)var P="left:"+v+";right:auto;";e();var R="background:"+h+";color:"+h+";"+P,W="";A||jQuery(window).resize(function(){t=window.innerWidth||document.documentElement.clientWidth,t>d?r():r(),d>=t?(i(),e()):r()}),window.onorientationchange=function(){e(),t=window.innerWidth||document.documentElement.clientWidth,t>=d&&r(),d>=t&&0==M&&i()},i()})}}(jQuery);