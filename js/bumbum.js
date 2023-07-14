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
  $(".articles-blog .layout--onecol:last-of-type .block .block-content .node-taxonomy-container").children('ul').addClass("article-carousel owl-carousel owl-theme");
  /*$("#block-bumbum-theme-views-block-articulos-destacados-block-1 .block-content .contextual-region").children('.views-view-responsive-grid').addClass("article-d owl-carousel owl-theme");*/
  $("#block-bumbum-theme-views-block-articulos-destacados-block-1 .block-content div[class*='js-view-dom']").children('.views-view-responsive-grid').addClass("article-d owl-carousel owl-theme");
  $("#block-bumbum-theme-registrobogota .layout--twocol-section--33-67").css("display","none");
  $( ".festival-bog .field--name-body" ).css("display","none");
  $( ".festival-barr .field--name-body" ).css("display","none");
  $( ".festival-bog .layout--threecol-section--33-34-33" ).css("display","none");
  $( ".festival-barr .layout--threecol-section--33-34-33" ).css("display","none");
  $( ".festival-bog .field--name-field-titulo" ).on( "click", function() {
	$( ".festival-bog .field--name-body" ).slideToggle( "slow", function() {
		// Animation complete.
	});
	$( ".festival-bog .layout--threecol-section--33-34-33" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
  $( ".festival-barr .field--name-field-titulo" ).on( "click", function() {
	$( ".festival-barr .field--name-body" ).slideToggle( "slow", function() {
		// Animation complete.
	});
	$( ".festival-barr .layout--threecol-section--33-34-33" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
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
		
  const marker1 = L.marker([4.7567351, -74.0675975]).on('click', onMapClick).on('mouseover', onMouseOver).addTo(map);
			
  const marker2 = L.marker([4.5714201, -74.0914916]).on('click', onMapClick2).on('mouseover', onMouseOver2).addTo(map);
  
  const marker3 = L.marker([10.9857615, -74.798878]).on('click', onMapClick3).on('mouseover', onMouseOver3).addTo(map2);
		
  const marker4 = L.marker([10.9927769, -74.7903845]).on('click', onMapClick4).on('mouseover', onMouseOver4).addTo(map2);
	
  const marker5 = L.marker([10.9883733, -74.7815225]).on('click', onMapClick5).on('mouseover', onMouseOver5).addTo(map2);
		
  var popup = L.popup();
  var tooltip = L.tooltip();
  function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/JulioMarioSantoDomingo.jpeg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Biblioteca P&uacute;blica Julio Mario Santo Domingo</h3><p>La Biblioteca P&uacute;blica Julio Mario Santo Domingo es una de las megabibliotecas de Bibliored. Hace parte del Centro Cultural Julio Mario Santo Domingo y presta sus servicios a 1,2 millones de habitantes en la localidad de Suba y los sectores del norte de Bogot&aacute;. Cuenta con salas especializadas para la primera infancia, m&aacute;s de 600 puestos de lectura y uno de los acervos m&aacute;s amplios especializados en arte, arquitectura y literatura de la ciudad.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>Calle 170 # 67-51</span></div><div class='redes-lugar'><a href='https://www.biblored.gov.co/bibliotecas/biblioteca-julio-mario'><i class='fa-sharp fa-regular fa-earth-americas'></i></a><a href='https://www.facebook.com/BibloRedBogota/'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/bibloredbogota/'><i class='fa-brands fa-instagram'></i></a><a href='https://twitter.com/BiblioredBogota'><i class='fa-brands fa-twitter'></i></a><a href='https://www.youtube.com/channel/UCZSYoAl6dw3ws76sPKydLaw'><i class='fa-brands fa-youtube'></i></a><a href='https://www.tiktok.com/@bibloredbogota'><i class='fa-brands fa-tiktok'></i></a></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map);
  }
  function onMapClick2(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/CinematecaBogota.jpeg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Cinemateca de Bogot&aacute;</h3><p>La Cinemateca de Bogot&aacute; – Centro Cultural de las Artes Audiovisuales es un espacio de encuentro entre las distintas formas y culturas de los medios audiovisuales. que busca transformar la mirada de los colombianos a trav&eacute;s de la preservaci&oacute;n del patrimonio f&iacute;lmico y posibilitando el acceso al cine de Colombia y del mundo.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>Carrera 3 # 19-10</span></div><div class='redes-lugar'><a href='https://cinematecadebogota.gov.co/'><i class='fa-sharp fa-regular fa-earth-americas'></i></a><a href='https://www.facebook.com/CinematecaBta'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/cinematecabta/'><i class='fa-brands fa-instagram'></i></a><a href='https:/twitter.com/CinematecaBta'><i class='fa-brands fa-twitter'></i></a><a href='https://www.youtube.com/channel/UCFX_Iqa0P4Skjyov1nckjIQ'><i class='fa-brands fa-youtube'></i></a></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map);
  }
  function onMapClick3(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/fundacion-la-cueva.jpeg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Fundaci&oacute;n La Cueva</h3><p>La Cueva es un centro de creaci&oacute;n, pensamiento y tertulia, laboratorio de la cultura y museo vivo que salvaguarda la cultura y la literatura del Caribe colombiano a trav&eacute;s de proyectos como el Premio Nacional de Cuento La Cueva y el Carnaval de las Artes. Su sede permanece en el lugar de encuentro del grupo de escritores y artistas que conforman el llamado Grupo de Barranquilla, que cuenta con la Bien P&uacute;blico Nacional.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>Carrera 43 # 59-03</span></div><div class='redes-lugar'><a href='https://fundacionlacueva.org/'><i class='fa-sharp fa-regular fa-earth-americas'></i></a><a href='https://www.facebook.com/fundlacueva'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/fundlacueva'><i class='fa-brands fa-instagram'></i></a><a href='https://twitter.com/FundLaCueva'><i class='fa-brands fa-twitter'></i></a><a href='https://www.youtube.com/channel/UC8OplhgOuRomkAhqh70pO7w'><i class='fa-brands fa-youtube'></i></a></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map2);
  }
  function onMapClick4(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/museodelcarnaval.jpeg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Museo del Carnaval</h3><p>El Museo del Carnaval de Barranquilla es un espacio que invita a barranquilleros y viajeros a explorar la historia y la tradici&oacute;n de esta fiesta, una de las m&aacute;s importantes y queridas de Colombia. El espacio permite conocer su origen, admirar los trajes de las reinas y profundizar en una visi&oacute;n &uacute;nica de este entrañable acontecimiento, que es todo un patrimonio cultural.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>Carrera 54 # 49B - 39</span></div><div class='redes-lugar'><a href='https://museocarnavaldebarranquilla.org/'><i class='fa-sharp fa-regular fa-earth-americas'></i></a><a href='https://www.facebook.com/carnavalbaq/'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/museocarnavalbq/'><i class='fa-brands fa-instagram'></i></a><a href='https://twitter.com/Carnaval_SA'><i class='fa-brands fa-twitter'></i></a></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
		.openOn(map2);
  }
  function onMapClick5(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/clena.jpeg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Complejo Cultural de la Antigua Aduana – CLENA</h3><p>El Complejo Cultural de la Antigua Aduana es un centro cultural de la ciudad de Barranquilla, Colombia, integrado por el Archivo Hist&oacute;rico del departamento del Atl&aacute;ntico, la Biblioteca Piloto del Caribe, la Biblioteca Infantil Piloto del Caribe y el Centro de Documentaci&oacute;n Musical Hans Federico Neuman. El complejo es administrado por la Corporaci&oacute;n Luis Eduardo Nieto Arteta (CLENA) y funciona en hist&oacute;ricas edificaciones restauradas como el antiguo edificio de la Aduana de la ciudad y las estaciones del Tranv&iacute;a y Montoya.</p><div class='info-descripcion'><span>FECHA</span><span>HORA</span><span>V&iacute;a 40 # 36-135 – Plaza de la Aduana</span></div><div class='redes-lugar'><a href='https://clena.org/complejo-aduana/'><i class='fa-sharp fa-regular fa-earth-americas'></i></a><a href='https://www.facebook.com/CorporacionLuisEduardoNietoArteta/'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/clenacorp/'><i class='fa-brands fa-instagram'></i></a><a href='https://www.youtube.com/@clenacorp'><i class='fa-brands fa-youtube'></i></a></div></div><div class='info-costo'><p>ENTRADA GRATUITA</p></div></div>")
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