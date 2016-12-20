$(document).ready(function(){
	$(window).scroll(function(){
		var ftop = $(window).scrollTop();
		var width = $(window).width();
	  	if (ftop > 80 && width > 640)
	  	{
	  		$('header').addClass('fixed');	
	  		ftop += 50;
	  	}
	  	else 
	  	{
	  		$('header').removeClass('fixed');
	  		//ftop -= 50;	
	  	}
	  	
    	// var fleft = $('.sidebar-column').offset().left;
    	if (ftop > 130)
    	{
    		$('.custom-content').css({top: ftop + 'px'});
    	}

    	if (ftop < 80) 
    	{
    		$('.custom-content').css({top: 0 + 'px'});	
    	}
	});

	$("header .header-menu ul.menu li").click(function(){
        $('header .header-menu ul.menu li').removeClass('current-item');    
        $(this).addClass('current-item');    
    });

	$("header .header-menu li.menu-item-has-children").hover(function(){
		$("header .header-menu li.menu-item-has-children ul.sub-menu").show();
	}, function(){
		$("header .header-menu li.menu-item-has-children ul.sub-menu").hide();
	});

	$(window).resize(function(){
   		var width = $(window).width();
   		if(width < 640)
   		{
       		$('.header').removeClass('fixed');
   		}
   		else
   		{
   			$('.header').addClass('fixed');	
   		}
	});

	$('.post-container .post img').click(function(){
		$('header .header-menu ul.menu li').removeClass('current-item');
	});
});