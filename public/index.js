//........................................................Fade in animation...........................................................................

// function showImages(el) {
//     var windowHeight = jQuery( window ).height();
//     $(el).each(function(){
//         var thisPos = $(this).offset().top;
//
//         var topOfWindow = $(window).scrollTop();
//         if (topOfWindow + windowHeight - 200 > thisPos ) {
//             $(this).addClass("fadeIn");
//         }
//     });
// }
//
// // if the image in the window of browser when the page is loaded, show that image
// $(document).ready(function(){
//     showImages('.third-container');
// });
//
// // if the image in the window of browser when scrolling the page, show that image
// $(window).scroll(function() {
//     showImages('.third-container');
// });

//........................................................Slide in animation..........................................................................

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".slide-in");

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});
