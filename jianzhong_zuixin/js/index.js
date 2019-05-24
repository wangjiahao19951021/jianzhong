// 首页Js

// 导航
function href_nav1() {
    window.location.href = "./index.html"
}
function href_nav2() {
    window.location.href = "./group.html"
}
function href_nav3() {
    window.location.href = "./contact.html"
}

// 中英文
function zhongwen() {
	$(".languageTab-header").removeClass("en-active")
	$(".languageTab-header").find("div").eq(1).removeClass("lang_color")
	$(".languageTab-header").addClass("cn-active")
	$(".languageTab-header").find("div").eq(0).addClass("lang_color")
}
function yingwen() {
	$(".languageTab-header").removeClass("cn-active")
	$(".languageTab-header").find("div").eq(0).removeClass("lang_color")
	$(".languageTab-header").addClass("en-active")
	$(".languageTab-header").find("div").eq(1).addClass("lang_color")
 }

// 时间轴

// 时间轴左
$(function(){
	$('.L-timebox').click(function(){
		$('.L-time > li').removeClass('time_active');
		$(this).parent('li').addClass('time_active');
		var year = $(this).find("div").eq(0).attr('for');

		$('#' + year).prevAll('li').slideUp(800);

		$('#'+year).slideDown(800).nextAll('li').slideDown(800);
	});
});

// 时间轴右
$(function () {
	function e() {
		for (i = 0; 4 > i; i++)
			$("." + [i] + "").stop(!0, !1).animate({ backgroundPosition: "0px " + -24 * a[i] }, { duration: 200 })
	}
	$(".R-time .R-Rtime").mouseover(function () {
		$(".R-time li").removeClass("thiscur");
		$(this).parent().addClass("thiscur")
	});
	var b = 0, f = $(".R-time li").length, d = 0, a = !0;
	(function () {
		var a = $(window).height();
		890 <= a && (row = 6);
		800 <= a && 890 > a && (row = 5);
		726 <= a && 800 > a && (row = 4);
		726 > a && (row = 3)
	}
	)();
	var h = f - row;
	$(".R-time").height(180 * row);
	$(".R-time-course").height(180 * row + 25);
	$(".R-time").mousewheel(function (b, c) {
		Math.abs(c);
		if (a) {
			0 < c ? 0 != d && ($(".arrowup").addClass("arrow_active"), $(".arrowup").trigger("click")) : d > -180 * h && ($(".arrowdown").addClass("arrow_active"), $(".arrowdown").trigger("click"))
		}
	});
	$(".R-time li:gt(" + (row - 1) + ")").find(".L-Rtime").css({ left: "-400px" });
	$(".R-time li:gt(" + (row - 1) + ")").find(".R-Rtime").css({ right: "-700px" });

});