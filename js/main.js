var i = 0;
var a = 0;
// var timer;
$(document).ready(function() {
	$("#bg-img li:nth-child(1)").addClass("show");
	setInterval("sectionOneBackground()", 4000);
    $("#work-experience").mouseenter(workArrowShow);
    $("#work-experience").mouseleave(workArrowHide);
    $(".work-experience-list").eq(0).show().siblings(".work-experience-list").hide();
    carousel();
    // showPlay();
    $(".writing-lists").mouseenter(showPlay);
    $(".writing-lists").mouseleave(hiddenPlay);
    // console.log(i);my-introduce
    $(".menu-right a").click(function () {
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
        return false;
    });
    $(".my-introduce a").click(function () {
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
        return false;
    });
    var sT;
    $(window).scroll(function(e) {
        animationAppear();
    });
})
function sectionOneBackground(){
    var length = 4;
    var randomBgIndex = Math.round(Math.random() * length);
    // console.log(randomBgIndex);
    $("#bg-img li").eq(randomBgIndex).addClass("show").siblings().removeClass("show");
//		$("#bg-img li").eq(randomBgIndex).css("display","block");
}
function workArrowShow() {
    $("#work-arrow-left").stop(true,true).fadeIn(500).css("cursor","pointer");
    $("#work-arrow-right").stop(true,true).fadeIn(500).css("cursor","pointer");
}
function workArrowHide() {
    $("#work-arrow-left").stop().fadeOut(500);
    $("#work-arrow-right").stop().fadeOut(500);
}
function carousel() {
    $("#work-arrow-left").click(function(){
        // clearTimeout(timer)
        if(i==0){
            i=3;
        }else {
            i--;
        }

        showCarousel();
        // console.log(i);
    })
    $("#work-arrow-right").click(function(){
        // clearTimeout(timer)
        if(i==3){
            i=0;
        }else {
            i++;
        }
        showCarousel();
        // console.log(i);
    })
}
function showCarousel() {
    $(".work-experience-list").eq(i).fadeIn(300).siblings(".work-experience-list").fadeOut(300);
}
function showPlay() {
    $(".writing-lists").mouseenter(function(){
        // alert("dws");
        a = $(this).index();
        $(".writing-lists").find(".writing-lists-black").eq(a).css({"display":"block"});
        $(".writing-lists").eq(a).addClass(".ccc");
        console.log(a);
    })
}
function hiddenPlay() {
    $(".writing-lists").mouseleave(function(){
        // alert("dws");
        a = $(this).index();
        $(".writing-lists").find(".writing-lists-black").eq(a).css("display","none");
        console.log(a);
    })
}
function animationAppear() {
    sT = $(window).scrollTop();
    if(sT >= $('.section:eq(0)').offset().top-1000){
        $('.about').addClass('appear-text');
    }
}
$(function(){
    var nav=$("#menu-bar"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=700){
            nav.addClass("menu-bar-fixed");
            // $(".navTmp").fadeIn();
        }else{
            nav.removeClass("menu-bar-fixed");
            // $(".navTmp").fadeOut();
        }
    })
})
		
var nowpage=0;
$(document).ready(function(){
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="up"){
				nowpage=nowpage+1;
			}else if(direction="down"){
				nowpage=nowpage-1;
			}
			if(nowpage>6){
				nowpage=6;
			}
			if(nowpage<0){
				nowpage=0;
			}
			$(".content").animate({"top":nowpage * -100 + "%"},1000,animateOfPage());
		}
	})
//第一页动画
$(".page1-bg").fadeIn(1000,function(){
	$(".page1-nh").animate({width:"20%",height:"40%",bottom:"10%"},3000)
})
})
function animateOfPage(){
	if(nowpage==1){
		//第二页的动画
	    $(".page2-clock").fadeIn(1000,function(){
		    $(".page2-tellurin").fadeIn(500,function(){
			    $(".page2-tellurin").animate({top:"50%"},700,function(){
				    $(".page2-books").fadeIn(500,function(){
					    $(".page2-books").animate({top:"56%"},700,function(){
						    $(".page2-caculator").fadeIn(500,function(){
							    $(".page2-caculator").animate({top:"54%"},700)
//						
						    })
					    })
				    })
					
			    })
		    })
	    })
				
	}
	if(nowpage==2){
		//第三页的动画
	    $(".page3-black").fadeIn(1500,function(){
		    $(".page3-earth").fadeIn(1000,function(){
		        $(".page3-black").fadeOut(2000,function(){
		    	    $(".page3-earth").fadeOut(1000,function(){
			            $(".page3-shoulashou").fadeIn(1000,function(){				
//	     	    	        $(".page3-shoulashou").fadeOut(1500,function(){		    		    
		    			        $(".page3-school").fadeIn(1500)
//		    		        })
		    	        })
		            })	   
	            })  
	        })		
	    })			
	}
	if(nowpage==3){
		//第四页的动画
	    $(".page4-bg1").fadeIn(3000);
	    $(".page4-text").fadeIn(3000);
	    $(".page4-text1").fadeIn(2000,function(){
		    $(".page4-bg1").fadeOut(2000);
		    $(".page4-text").fadeOut(2000);
		    $(".page4-text1").fadeOut(2000,function(){
			    $(".page4-bg").fadeIn(2000);
			    $(".page4-music").fadeIn(2000,function(){
				    $(".page4-person1").animate({width:"100%",height:"80%"})
		            $(".page4-person2").animate({width:"100%",height:"80%"})
			    });
		    });
	    });		
	}
	if(nowpage==4){
		//第五页的动画
	$(".page5-bg").fadeIn(2000,function(){
		$(".page5-boy").animate({width:"20%",height:"60%",left:"33.5%",bottom:"5%"},4000)
		$(".page5-girl").animate({width:"20%",height:"58.1%",right:"33.5%",bottom:"5%"},4000,function(){
			$(".page5-heart").fadeIn(2000)
		})
	})

	}
	if(nowpage==5){
	    //第六页的动画
	    $(".page7-ball1").animate({top:"-1%"},7000,function(){
		    $(".page7-ball2").animate({top:"-10%"},3000)
		    $(".page7-ball3").animate({top:"-10%"},3500,function(){
			    $(".page7-ball1").fadeOut(100)
			    $(".page7-ball2").fadeOut(100)
			    $(".page7-ball3").fadeOut(100,function(){
			    	$(".page7-text").fadeIn(1000)
			    })
		    })
	    })	    
	}
	
}
function playPause(img)
{
	var player = document.getElementById("ad")
	if(player.paused)
	{
		player.play();
		img.src = "img/images/musicBtn.png";
	}
	else
	{
		player.pause();
		img.src = "img/images/musicBtnOff.png";
	}
}
function buttonClick1(obj){
	$(".page2-tellurin").fadeOut(1000)
	$(".page2-books").fadeOut(1000)
	$(".page2-caculator").fadeOut(1000)	
	$(".page2-background").fadeOut(1500)
	$(".page2-clock").fadeOut(1500,function(){
		$(".page2-earth").animate({width:"70%",height:"45%",top:"25%"},2000,function(){
			$(".page2-plane").fadeIn(500,function(){
				$(".page2-plane").animate({right:"100%"},2000,function(){
					$(".page2-box").fadeIn(500)
				})
			})
		})
			
		$(".page2-wave").fadeIn(1500)
	})
}
function buttonClick2(obj){
	$(".page6-beijing").fadeOut(1000);
	$(".page6-ipad").fadeOut(1000);
	$(".page6-dianwo").fadeOut(1000);
	$(".page6-yanjing").fadeOut(1000,function(){
		$(".page6-daipad").fadeIn(1000)
		$(".page6-wenzi").fadeIn(1000)
		
	})
}


