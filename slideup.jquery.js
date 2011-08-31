/*
* Slideup Modals
*
* Copyright 2011, Rigel Glen ( http://rigelglen.tumblr.com )
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*
*/

(function($) {


/*---------------------------
Listener for data-reveal-id attributes
----------------------------*/

$('a[data-reveal-id]').live('click', function(e) {
e.preventDefault();
var modalLocation = $(this).attr('data-reveal-id');
$('#'+modalLocation).reveal($(this).data());
});

/*---------------------------
Options
----------------------------*/

    $.fn.reveal = function(options) {
        
        
        var defaults = {
animationspeed: 500, //how fast animtions are
closeonbackgroundclick: true, //if you click background will modal close?
dismissmodalclass: 'close-slideup-modal' //the class of a button or element that will close an open modal
     };
    
        //Extend dem' options
        var options = $.extend({}, defaults, options);

        return this.each(function() {
        
/*---------------------------
Global Variables
----------------------------*/
         var modal = $(this),
modalHeight = parseInt(modal.css('height')),
         topMeasure = parseInt(modal.css('top')),
topOffset = modal.height() + topMeasure,
           locked = false,
modalBG = $('.slideup-modal-bg');
var modalClose = $('.close-slideup-modal');
/*---------------------------
Create Modal BG
----------------------------*/
if(modalBG.length == 0) {
modalBG = $('<div class="slideup-modal-bg" />').insertAfter(modal);
}

/*---------------------------
Create Close Button
----------------------------*/

$('<a class="close-slideup-modal close-slideup-modal-button">Close</a>').appendTo('.slideup-modal');

     
/*---------------------------
Open & Close Animations
----------------------------*/
//Entrance Animations
modal.bind('reveal:open', function () {
modalBG.unbind('click.modalEvent');
$('.' + options.dismissmodalclass).unbind('click.modalEvent');
if(!locked) {
lockModal();
modal.css({'top': modalHeight*-1.5 ,'visibility' : 'visible', 'display' : 'block'});
modalBG.fadeIn(options.animationspeed/2);
modal.delay(options.animationspeed/2).animate({
"top": '0px',
}, options.animationspeed,unlockModal());


}
modal.unbind('reveal:open');
});

//Closing Animation
modal.bind('reveal:close', function () {
if(!locked) {
lockModal();
modalBG.delay(options.animationspeed/2).fadeOut(options.animationspeed/2);
modal.animate({
"top": "-1000px",
}, options.animationspeed, function() {
modal.css({'top': '-1000px', 'visibility' : 'hidden', 'display' : 'none'});
unlockModal();
});

}
modal.unbind('reveal:close');
});
   
/*---------------------------
Open and add Closing Listeners
----------------------------*/
         //Open Modal Immediately
     modal.trigger('reveal:open')

//Close Modal Listeners
var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
modal.trigger('reveal:close')
});
// Cursor Background Click Close
if(options.closeonbackgroundclick) {
modalBG.css({"cursor":"pointer"})
modalBG.bind('click.modalEvent', function () {
modal.trigger('reveal:close')
});
}
$('body').keyup(function(e) {
         if(e.which===27){ modal.trigger('reveal:close'); } // 27 is the keycode for the Escape key
});



/*---------------------------
Animations Locks
----------------------------*/
function unlockModal() {
locked = false;
}
function lockModal() {
locked = true;
}

        });//each call
    }
})(jQuery);
        
/* That's all folk's yeah ! Just 137 Lines ( 135+2 ) ain't that sweet... The rest is CSS magic and jQuery Voodoo */
