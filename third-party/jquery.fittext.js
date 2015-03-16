/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY,
          'vh' : undefined,
          'vw' : undefined
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {

        var vw = $(window).width();
        var vh = $(window).height();
        
        if (settings.vw != undefined) {
          vw = $(window).width() * (settings.vw / 100);
          $this.css('font-size', Math.max(Math.min(vw, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        } else if (settings.vh != undefined) {
          vh = $(window).height() * (settings.vh / 100);
          $this.css('font-size', Math.max(Math.min(vh, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        } else {
          $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        }
        //console.log("vw: " + vw);
        //console.log("vh: " + vh);
        
        //$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
