(function(){
	$('.banner-list li').mouseover(function(){
		$(this).find('div').stop().show().animate({marginTop:'-3px'},200)
	}).mouseleave(function(){
		$(this).find('div').stop().animate({marginTop:'0px'},200).hide(10)
	})
	var status = false;
	$('.search input').focus(function(){
		status = true;
		$('.search').css({boxShadow:'0 0 7px #4178be'})
	}).mouseover(function(){
		$('.search').css({boxShadow:'0 0 7px #4178be'})
	}).blur(function(){
		$('.search').css({boxShadow:'none'})
		status = false;	
	}).mouseleave(function() {
		if(!status){
			$('.search').css({boxShadow:'none'})
		}else{
			$('.search').css({boxShadow:'0 0 7px #4178be'})
		}
	})

	$('.user-li1').mouseover(function(){
		$(this).find('div').stop().show().animate({marginTop:'-3px'},200,function(){
			$('.user-li1').find('ul').show()
		})
	})
	$('.user-li1').mouseleave(function(){
		$(this).find('div').stop().animate({marginTop:'0px'},200).hide(10)
		$(this).find('ul').hide()	
	})
	$('.user-li2').mouseover(function(){
		$(this).find('div').stop().show().animate({marginTop:'-3px'},200,function(){
			$('.user-li2').find('ul').show()
		})
	})
	$('.user-li2').mouseleave(function(){
		$(this).find('div').stop().animate({marginTop:'0px'},200).hide(10)
		$(this).find('ul').hide()	
	})
	$('.services-left li').mouseover(function(){
		var index = $(this).index();
		$(this).css({color:'#fff',background:'#4178be'}).siblings().css({fontWeight:'500',color:'#323232'})
		$(this).find('span').show()
		$('.services-right .services-right-list').eq(index).show().siblings().hide()
	}).mouseleave(function(){
		$(this).css({background:'#f4f4f4',color:'#4178be',fontWeight:'600'}).stop().animate({transform:'scale(1.2)'},500)
		$(this).find('span').hide()
	})	
	$('.banner-list li').mouseover(function(){
		if($(this).index() == 2){
			$('.services').slideDown()
		}else{
			$('.services').slideUp()
		}
	})
	$('.services').mouseover(function(){
		$('.banner-list li:nth-child(3)').find('div').stop().show().animate({marginTop:'-3px'},200)
	}).mouseleave(function(){
		$('.banner-list li:nth-child(3)').find('div').stop().animate({marginTop:'0px'},200).hide(10)
			$('.services').slideUp()
	})
	$('.slide-up').click(function(){
		$('.services').slideUp()
	})
	$('.user-li2').click(function(){
		$('.zhezhao').show().find('.zhezhao-right').stop().animate({right:'0'},300)
		$('body').css({overflow:'hidden'})
	})
	$('.zhezhao-right-close').click(function(){
		$('.zhezhao-right').stop().animate({right:'-380px'},300,function(){
			$('.zhezhao').hide()
			$('body').css({overflow:'scroll'})
		})
	})
	var i = 1;
	$('.products1').click(function(){
		if(i==1){
			$('.all-products1').slideUp(300)
			$('.products1').find('.products-slideup').hide()
			$('.products1').find('.products-slidedown').show()
			i=2;
		}else{
			$('.all-products1').slideDown(300)
			$('.products1').find('.products-slideup').show()
			$('.products1').find('.products-slidedown').hide()
			i=1;
		}
	})
	var j = 1;
	$('.products2').click(function(){
		if(j==1){
			$('.all-products2').slideUp(300)
			$('.products2').find('.products-slideup').hide()
			$('.products2').find('.products-slidedown').show()
			j=2;
		}else{
			$('.all-products2').slideDown(300)
			$('.products2').find('.products-slideup').show()
			$('.products2').find('.products-slidedown').hide()
			j=1;
		}
	})
	var k = 1;
	$('.products3').click(function(){
		if(k==1){
			$('.all-products3').slideUp(300)
			$('.products3').find('.products-slideup').hide()
			$('.products3').find('.products-slidedown').show()
			k=2;
		}else{
			$('.all-products3').slideDown(300)
			$('.products3').find('.products-slideup').show()
			$('.products3').find('.products-slidedown').hide()
			k=1;
		}
	})
	$('.zhezhao-left').click(function(){
		$('.zhezhao-right').stop().animate({right:'-380px'},300,function(){
			$('.zhezhao').hide()
			$('body').css({overflow:'scroll'})
		})
	})
	var x = 0;
	function lunFont(){
		$('.lunbo li').eq(x).fadeOut(1500).siblings().fadeIn(1500)
		x++;
		if(x>$('.lunbo li').length-1){
			x=0;
		}
	}
	setInterval(lunFont,300);

	var bannerShow1 = $('body').scrollTop();
	$(window).scroll(function(){
		var bannerShow2 = $('body').scrollTop();
		if(bannerShow2>bannerShow1&&$(window).scrollTop()>500){
			$('.banner').stop().animate({top:'-50px'},10)
			$('.services').stop().css({height:"95%"}).animate({top:'0'},10)
			$('.slide-up').css({bottom:'70px'})
		}else if(bannerShow2<bannerShow1&&(bannerShow1-bannerShow2)>15){
			$('.services').stop().css({height:"100%"}).animate({top:'50px'},10)
			$('.banner').stop().animate({top:'0'},10)
			$('.slide-up').css({bottom:'30px'})
		}
		bannerShow1=bannerShow2;
	})
	$('.scroll-top').click(function(){
		$(document.body).animate({scrollTop:'0'},100)
	})
	$(window).scroll(function(){
		if($('body').scrollTop()<800){
			$('.scroll-top').stop().animate({right:'-40px'},200)
		}else{
			$('.scroll-top').stop().animate({right:'30px'},200)
		}
	})

	$('.foot-input1').click(function(){
		$('.vallist').show()
		$(this).css({border:'2px solid black'}).blur()
		$('.vallist input').focus()
	})
	$('.vallist li').click(function(){
		$('.foot-input1').val($(this).html())
		$('.vallist').hide()
	})
})()