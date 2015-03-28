/*
 * SKiller - simple widget for skills bargraphs
 * 
 * 
 */

$().ready(function(){
	var $skillers = $(document).find('.skiller-container');
	
});


(function($) {
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
			
			if ( $.isFunction( settings.complete ) ) {
        		settings.complete.call( this );
    		} 
        });

    }
}(jQuery));