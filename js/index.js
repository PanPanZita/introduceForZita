window.onload = function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		loop: true,
		pagination: '.swiper-pagination',
		paginationType: 'progress',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	})
	var oBtn = $("#music-off");
	var oMusic = document.getElementById("cusMedia");
	oBtn.click(function() {
		console.log("111");
		if(oMusic.paused) {
			console.log("222");
			oMusic.play();
			oBtn[0].style.webkitAnimationPlayState = "running";
		} else {
			oMusic.pause();
			oBtn[0].style.webkitAnimationPlayState = "paused";
		}
	})
	
  
}
