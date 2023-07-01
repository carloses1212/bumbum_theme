/* Load jQuery.
--------------------------*/
jQuery(document).ready(function ($) {
  // Mobile menu.
  $('.mobile-menu').click(function () {
    $(this).next('.primary-menu-wrapper').toggleClass('active-menu');
  });
  $('.close-mobile-menu').click(function () {
    $(this).closest('.primary-menu-wrapper').toggleClass('active-menu');
  });
  // Full page search.
  $('.search-icon').on('click', function() {
    $('.search-box').addClass('open');
    return false;
  });

  $('.search-box-close').on('click', function() {
    $('.search-box').removeClass('open');
    return false;
  });

  // Scroll To Top.
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $('.scrolltop').fadeIn('slow');
    } else {
      $('.scrolltop').fadeOut('slow');
    }
  });
  $('.scrolltop').click(function () {
    $('html, body').animate( { scrollTop: 0 }, 'slow');
  });
  $(".field--name-sb-banner-a-url a").click(function(){
	  $(".homepage-content").show();
  });
  //Carrusel
  var owl = $('.revive');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })
  //Banner
  var owlb = $('.owl-carousel-banner');
  owlb.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  if( !$.trim( $("div[id*='reproductor'] > .layout--onecol:nth-child(1) > .layout__region--content").text() ).length == 0 ) {
	  $('.layout__region--content:empty').each(function() {
		  $(".layout--onecol").parent().find('.layout__region--content').addClass('content-modified');
	  });
	  $("div[id*='reproductor']").children('layout--onecol')[1].addClass('content-modified-2');
	  $("div[id*='reproductor']").children('layout--onecol')[2].css("padding", "0 0 80px 0");
	}
  
/* End document
--------------------------*/
});
var lightbox = GLightbox();
    lightbox.on('open', (target) => {
                
});