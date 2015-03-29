/*
 * SKiller - simple widget for skills bargraphs
 * 
 * 
 */


(function($) {
	"use strict";
	
	$.fn.SKiller = function( options ) {
		
		// default settings
		var settings = $.extend({
			type			: null,
			speed			: 500,
			color			: null,
			innerBorder		: null,
			outerBorder		: null,
			complete		: null            
		}, options);
	
		return this.each( function() {
			console.log($(this));
			
			var $skillBars = $(this).find('> div'); 
			
			$skillBars.each(function(){
				var percent = $(this).attr('data-lvl');
				$(this).addClass('skill');
				$(this).find(':first')
					.after('<div class="skill-bar-border"><div class="skill-bar"></div></div>')
				var $skillBar = $(this).find('.skill-bar'); 
				var $barBorder = $(this).find('.skill-bar-border'); 
				var pr = (($barBorder.width())*percent)/100;
				
				if (settings.type == 1) 
				$skillBar.html(percent+'%')
				$skillBar.animate({'width': pr+'px'}, settings.speed);
						
			});		
			
			
			
			// Execute user function after animation complete
			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call( this );
			} 
		});

    }
}(jQuery));




$().ready(function(){
	var $skillers = $(document).find('.skiller-container');
	$('.skills').SKiller({type: 1, speed: 800});
});
