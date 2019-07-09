$(document).ready(function(){

    $(".buttonheading").click(function () {
        $("#heading").toggle();
        
    })
    

	
	
	
});


	var
		slidingTimer = 0,
		sliding = function() { 
			clearInterval(slidingTimer); 
			slidingTimer = setInterval(function(){
				if ($('main .slider button.active').next(':not([hidden])').length) {
					$('main .slider button.active').next().trigger('click');
				}
				else {
					$('main .slider button:last').trigger('click');
					$('main .slider button:eq(0)').addClass('active');
					setTimeout(function(){
						$('main .slider .wrapper').removeClass('animated');
						$('main .slider button:eq(0)').trigger('click');
						setTimeout(function(){$('main .slider .wrapper').addClass('animated');},20);
					},700);
				}
			}, 6000);
		}
$(function(){

	$('main .slider').on('click','button', function(event){
		event.stopPropagation();
		var i = $(this).parent().children('button').removeClass('active').index($(this)); 
		$(this).addClass('active').closest('.wrapper').css({marginLeft: -i*100+'%', marginRight: i*100+'%'});
		sliding();
	});
	{
		var wrapper, buttons;
		wrapper = $('.slider .wrapper');
wrapper.children('.buttons').remove();
		wrapper.children(':first').clone().appendTo(wrapper);
		wrapper.append('<span class="buttons"></span>');
		buttons = wrapper.children(':last');
		for (var i=1; i<wrapper.children().length; i++) buttons.append('<button type="button"></button>');
		buttons.children(':first').addClass('active');
		buttons.children(':last').attr('hidden','hidden').addClass('none');
		wrapper.addClass('animated');
		sliding();
	}
	$('body')
		.on('click',function(){
			$('header .left-menu menu, header .top-menu menu, header .top-menu li').removeClass('active');
		})
	$('header .left-menu')
		.on('click',function(event){
			$(this).children('menu').toggleClass('active');
			event.stopPropagation();
		})
		.on('click', 'menu', function(event){
			event.stopPropagation();
		})
		.on('click', 'li', function(){
			$(this).closest('menu').removeClass('active');
			$('body > ' + $(this).children('a').attr('href')).removeAttr('hidden');
		});
	$('header .top-menu')
		.on('click',function(event){
			$(this).children('menu').toggleClass('active');
			event.stopPropagation();
		})
		.on('click', 'menu ul', function(event){
			event.stopPropagation();
		})
		.on('click', 'menu', function(event){
		})
		.on('click', 'li', function(event){
			if ($(this).hasClass('active')) $(this).removeClass('active');
			else {
				$(this).parent().children().removeClass('active');
				$(this).addClass('active').children('ul')
			}
			event.stopPropagation();
		})
		.on('click', 'li li', function(event){
				event.stopPropagation();
		});
	var 
		doNotClose = false;
	$('.dialog-box')
		.on('click',function(){
			if (!doNotClose) $(this).attr('hidden','hidden');
			doNotClose = false;
		})
		.on('click','.dialog', function(event){
			doNotClose = true;			
		})
		.on('click','button.close',function(){
			$(this).closest('.dialog-box').attr('hidden','hidden');
		})
	
});