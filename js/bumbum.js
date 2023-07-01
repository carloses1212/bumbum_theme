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
  if( !$.trim( $("div[id*='reproductor'] > .layout--onecol:nth-child(1) > .layout__region--content").html() ).length ) {
	  if( $("div[id*='reproductor'] > .layout--onecol:nth-child(1) > .layout__region--content").is(':empty') ) {
		  $("div[id*='reproductor'] > .layout--onecol:nth-child(2)").css("display", "flex");
		  $("div[id*='reproductor'] > .layout--onecol:nth-child(2)").css("justify-content", "center");
		  $("div[id*='reproductor'] > .layout--onecol:nth-child(2) > .layout__region--content").css("position", "relative");
		  $("div[id*='reproductor'] > .layout--onecol:nth-child(2) > .layout__region--content").css("top", "0");
		  $("div[id*='reproductor'] > .layout--onecol:nth-child(2) > .layout__region--content").css("margin", "20px");
		  $("div[id*='reproductor'] > .layout--onecol:last-of-type").css("padding", "0 0 80px 0");
	  }
  }
  
/* End document
--------------------------*/
});
var lightbox = GLightbox();
    lightbox.on('open', (target) => {
                
});