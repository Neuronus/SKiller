/*
 * SKiller - simple widget for skills bargraphs
 * 
 * 
 */

$().ready(function(){
	var $skillers = $(document).find('.skiller-container');
	
});


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
		
		
		
			// Execute user function after animation complete
			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call( this );
			} 
		});

    }
}(jQuery));
