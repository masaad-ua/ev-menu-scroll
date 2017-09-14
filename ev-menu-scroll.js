(function ($){

	"use strict";

	$.fn.evMenuScroll = function(obj){
		var downing = true,
			wasFixed = false,
			fixed = 0,
			currentValue = 0,
			vm = this,
			heightMenu = vm.outerHeight(true),
			parentOfMenu = vm.parent();

			parentOfMenu.prepend($('<div/>')
				.addClass('empty-block')
				.css({'position': 'static', 'width': '100%','height': heightMenu}));


		function showMenu(){
			vm.css({'position': 'fixed', 'top': -heightMenu});
			obj.animate ? vm.css({'position': 'fixed', 'top': -heightMenu}) : vm.css({'position': 'fixed'});
			obj.animate && vm.css({'transform': 'translateY(' + heightMenu + 'px)'}).addClass('ev-custom');

		}

		function hideMenu(){
			obj.animate && vm.css({'transform': 'translateY(0px)'}).removeClass('ev-custom');
			obj.animate && vm.bind( "transitionend",function(){
				vm.css({'position': 'absolute', 'top': 0, 'left': 0});
			});
			!obj.animate && vm.css({'position': 'absolute', 'top': 0, 'left': 0});
		}


		$(window).scroll(function(e){


			if(!obj.fixedAlways){
				if(currentValue <  $(this).scrollTop()){
					currentValue =  $(this).scrollTop();
					/////DOWN
					if( $(this).scrollTop() > obj.startShow && downing && !obj.fixedWhenUp ){
						vm.unbind("transitionend");///
						showMenu();
						downing = false;
					}

					///if ---> obj.fixedWhenUp
					else if( $(this).scrollTop() > obj.startShow && obj.fixedWhenUp && !wasFixed){
						vm.unbind("transitionend");///
						showMenu();
					}
					else if( $(this).scrollTop() < obj.startShow  && obj.fixedWhenUp && wasFixed ){
						hideMenu();
						wasFixed = false;
					}


				}

				else if(currentValue > $(this).scrollTop()){
					currentValue =  $(this).scrollTop();
					///UP
					if ($(this).scrollTop() < obj.endShow && !downing && !obj.fixedWhenUp){
						hideMenu();
						downing = true;
					}
					///if ---> obj.fixedWhenUp
					else if(obj.fixedWhenUp && !wasFixed){
						wasFixed = true;
					}

				}
			}

			else if(obj.fixedAlways){
				vm.css({'position': 'fixed', 'top': 0, 'left': 0 })
			}

		});

	}
})(jQuery);