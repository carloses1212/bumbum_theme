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
        items: 1
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
  $( "#block-bumbum-theme-mapabogota .field--name-field-titulo" ).on( "click", function() {
	$( "#block-bumbum-theme-mapabogota .field--name-field-contenedor-del-mapa" ).slideToggle( "slow", function() {
		map.invalidateSize();
		// Animation complete.
	});
  });
  $( "#block-bumbum-theme-mapabarranquilla .field--name-field-titulo" ).on( "click", function() {
	$( "#block-bumbum-theme-mapabarranquilla .field--name-field-contenedor-del-mapa" ).slideToggle( "slow", function() {
		map2.invalidateSize();
		// Animation complete.
	});
  });
  
  const map = L.map('map-bogota').setView([4.6653243, -74.0965387], 10.5);

  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	minZoom: 5,
	edgeBufferTiles: 5,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  const map2 = L.map('map-barranquilla').setView([10.9635022, -74.8216233], 13);

  const tiles2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	minZoom: 5,
	edgeBufferTiles: 5,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map2);
		
  const marker1 = L.marker([4.7565891, -74.0652716]).on('click', onMapClick).on('mouseover', onMouseOver).addTo(map);
			
  const marker2 = L.marker([4.6031367, -74.0702999]).on('click', onMapClick2).on('mouseover', onMouseOver2).addTo(map);
  
  const marker3 = L.marker([10.9579143, -74.8981703]).on('click', onMapClick3).on('mouseover', onMouseOver3).addTo(map2);
		
  const marker4 = L.marker([10.9927943, -74.7903729]).on('click', onMapClick4).on('mouseover', onMouseOver4).addTo(map2);
	
  const marker5 = L.marker([10.9883732, -74.7838185]).on('click', onMapClick5).on('mouseover', onMouseOver5).addTo(map2);
		
  var popup = L.popup();
  var tooltip = L.tooltip();
  function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<b>Biblioteca Julio Mario Santodomingo</b>")
		.openOn(map);
  }
  function onMapClick2(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<b>Cinemateca de Bogota!</b>")
		.openOn(map);
  }
  function onMapClick3(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<b>La Cueva</b><br />I am a popup.")
		.openOn(map);
  }
  function onMapClick4(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<b>La Casa del Carnaval</b><br />I am a popup.")
		.openOn(map);
  }
  function onMapClick5(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<b>Plaza de la Aduana</b><br />I am a popup.")
		.openOn(map);
  }
  function onMouseOver(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("my tooltip text")
		.openOn(map);
  }
  function onMouseOver2(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("my tooltip text")
		.openOn(map);
  }
  function onMouseOver3(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("my tooltip text")
		.openOn(map);
  }
  function onMouseOver4(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("my tooltip text")
		.openOn(map);
  }
  function onMouseOver5(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("my tooltip text")
		.openOn(map);
  }
  
/* End document
--------------------------*/
});
var lightbox = GLightbox();
    lightbox.on('open', (target) => {
                
});