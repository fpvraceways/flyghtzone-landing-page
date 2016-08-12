/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {
  setTimeout(function () {
      $('.smart-bar').css({"top": "0"});
      $('.navbar-custom.navbar-fixed-top').css({"top": "60px"});
      $('.intro').css({"padding-top": "140px"});
  }, 2000);
});

$('.smart-bar').on('close.bs.alert', function () {
  $('.navbar-custom.navbar-fixed-top').css({"top": "0"});
  $('.intro').css({"padding-top": "80px"});
});

$('.smart-bar a').on('click', function(event) {
    $(this).parent().alert('close');
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
