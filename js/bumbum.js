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
  $(".articles-blog .layout--onecol:last-of-type .contextual-region .block-content .node-taxonomy-container").children('ul').addClass("article-carousel owl-carousel owl-theme");
  $("#block-bumbum-theme-views-block-articulos-destacados-block-1").children('div.views-view-responsive-grid').addClass("article-d owl-carousel owl-theme");
  $("#block-bumbum-theme-registrobogota .layout--twocol-section--33-67").css("display","none"); 
  $( "#block-bumbum-theme-registrobogota .field--name-field-titulo" ).on( "click", function() {
	$( "#block-bumbum-theme-registrobogota .layout--twocol-section--33-67" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
  $("#block-bumbum-theme-registrobarranquilla .layout--twocol-section--33-67").css("display","none"); 
  $( "#block-bumbum-theme-registrobarranquilla .field--name-field-titulo" ).on( "click", function() {
	$( "#block-bumbum-theme-registrobarranquilla .layout--twocol-section--33-67" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
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
  //Carrusel Articulos Destacados
  var owlad = $('.article-d');
  owlad.owlCarousel({
    margin: 10,
    nav: true,
	dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  }) 
  //Carrusel Articulos
  var owla = $('.taxonomy-terms.article-carousel');
  owla.owlCarousel({
    margin: 10,
    nav: true,
	dots: false,
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
		.setContent("<div class='info-lugar'><img src='' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Biblioteca Julio Mario Santodomingo</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><h4>AGENDA</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>DIRECCI&Oacute;N</span></div><div class='redes-lugar'><i class='fa-brands fa-facebook-f'></i><i class='fa-brands fa-instagram'></i><i class='fa-brands fa-twitter'></i><i class='fa-brands fa-tiktok'></i><i class='fa-brands fa-youtube'></i><i class='fa-brands fa-whatsapp'></i></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map);
  }
  function onMapClick2(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Cinemateca de Bogot&aacute;</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><h4>AGENDA</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>DIRECCI&Oacute;N</span></div><div class='redes-lugar'><i class='fa-brands fa-facebook-f'></i><i class='fa-brands fa-instagram'></i><i class='fa-brands fa-twitter'></i><i class='fa-brands fa-tiktok'></i><i class='fa-brands fa-youtube'></i><i class='fa-brands fa-whatsapp'></i></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map);
  }
  function onMapClick3(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>La Cueva</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><h4>AGENDA</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>DIRECCI&Oacute;N</span></div><div class='redes-lugar'><i class='fa-brands fa-facebook-f'></i><i class='fa-brands fa-instagram'></i><i class='fa-brands fa-twitter'></i><i class='fa-brands fa-tiktok'></i><i class='fa-brands fa-youtube'></i><i class='fa-brands fa-whatsapp'></i></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map2);
  }
  function onMapClick4(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>La Casa del Carnaval</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><h4>AGENDA</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>DIRECCI&Oacute;N</span></div><div class='redes-lugar'><i class='fa-brands fa-facebook-f'></i><i class='fa-brands fa-instagram'></i><i class='fa-brands fa-twitter'></i><i class='fa-brands fa-tiktok'></i><i class='fa-brands fa-youtube'></i><i class='fa-brands fa-whatsapp'></i></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map2);
  }
  function onMapClick5(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Plaza de la Aduana</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><h4>AGENDA</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus consequat purus eu venenatis. Nulla eget scelerisque tortor, nec scelerisque augue. Suspendisse eget ligula pretium, dictum lectus at, sagittis lacus.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>DIRECCI&Oacute;N</span></div><div class='redes-lugar'><i class='fa-brands fa-facebook-f'></i><i class='fa-brands fa-instagram'></i><i class='fa-brands fa-twitter'></i><i class='fa-brands fa-tiktok'></i><i class='fa-brands fa-youtube'></i><i class='fa-brands fa-whatsapp'></i></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map2);
  }
  function onMouseOver(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<b>Biblioteca Julio Mario Santodomingo</b>")
		.openOn(map);
  }
  function onMouseOver2(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<b>Cinemateca de Bogot&aacute;</b>")
		.openOn(map);
  }
  function onMouseOver3(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<b>La Cueva</b>")
		.openOn(map2);
  }
  function onMouseOver4(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<b>La Casa del Carnaval</b>")
		.openOn(map2);
  }
  function onMouseOver5(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<b>Plaza de la Aduana</b>")
		.openOn(map2);
  }
   //Mapas Artistas - Debe crearse uno por cada artista y conforme su ID
  const map_artista = L.map('map').setView([4.6653243, -74.0965387], 10.5);

  const tiles_artista = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	minZoom: 5,
	edgeBufferTiles: 5,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map_artista);
  map_artista.invalidateSize();
  
/* End document
--------------------------*/
});
var lightbox = GLightbox();
    lightbox.on('open', (target) => {
                
});