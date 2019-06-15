$(document).ready(function() {
    /* menu open*/
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        $('#menu, #menu-list').toggleClass('open');
        $('.logo').toggleClass('logoinverse');
        $('.dblarrow').toggleClass('arrowinverse');
        $('#menu-list li:nth-child(1), #menu-list li:nth-child(2), #menu-list li:nth-child(3), #menu-list li:nth-child(4)').toggleClass('open');
     });

     /* resets class -- figure out more efficiant way to reset */
     $('.dblarrow').toggleClass('arrowright');
     $('.logo').toggleClass('logoright');
     $('.logo').toggleClass('logoinverse');
     $('.dblarrow').toggleClass('arrowinverse');


     /* click dblarrow icon, logo expands */
     $('.dblarrow').click(function(clicks) {
         $(this).toggleClass('arrowright');
         $('.logo').toggleClass('logoright');
         $('.addtext').toggleClass('selected');
    });

});

TweenMax.from(".left", 1.6, {
    delay: 0.4,
    width: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".border", 1.2, {
    delay: 0.6,
    x: -20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".product-title", 1.6, {
    delay: 0.8,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".product-desc", 1.6, {
    delay: 1,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".price", 1.6, {
    delay: 1.2,
    x: -20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".btn", 1.6, {
    delay: 1.4,
    x: -10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".left-sidebar", 1.8, {
    delay: 1.6,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".nav", 1, {
    delay: 0.5,
    y: -20,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".robot", 3, {
    delay: 2.1,
    y: -30,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".right-icons", 2, {
    delay: 1.9,
    y: -30,
    opacity: 0,
    ease: Expo.easeInOut
})

