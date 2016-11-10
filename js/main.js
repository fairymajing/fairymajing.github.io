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


