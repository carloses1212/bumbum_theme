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
  $(".articles-blog .layout--onecol:last-of-type .block .block-content .node-taxonomy-container").children('ul').addClass("article-carousel owl-carousel owl-theme purple-background");
  /*if($("#block-bumbum-theme-views-block-articulos-destacados-block-1 .block-content div").find("div[class*='media-image']").length !== 0){
	$("#block-bumbum-theme-views-block-articulos-destacados-block-1 .block-content div").children('.taxonomy-terms').addClass("article-d owl-carousel owl-theme");  
  }*/
  $("#block-bumbum-theme-views-block-articulos-destacados-block-1 .block-content .contextual-region").children('.views-view-responsive-grid').addClass("article-d owl-carousel owl-theme");
  $("#block-bumbum-theme-views-block-articulos-destacados-block-1 .block-content div[class*='js-view-dom']").children('.views-view-responsive-grid').addClass("article-d owl-carousel owl-theme");
  $("#block-bumbum-theme-registrobogota .layout--twocol-section--33-67").css("display","none");
  $( ".festival-bog .field--name-body" ).css("display","none");
  $( ".festival-barr .field--name-body" ).css("display","none");
  $( ".festival-bog .layout--threecol-section--33-34-33" ).css("display","none");
  $( ".festival-barr .layout--threecol-section--33-34-33" ).css("display","none");
  $( ".festival-bog .field--name-field-titulo" ).on( "click", function(e) {
	e.preventDefault();
    e.stopPropagation();  
	$( ".festival-bog .field--name-body" ).slideToggle( "slow", function() {
		// Animation complete.
	});
	$( ".festival-bog .layout--threecol-section--33-34-33" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
  $( ".festival-barr .field--name-field-titulo" ).on( "click", function(e) {
	e.preventDefault();
    e.stopPropagation();  
	$( ".festival-barr .field--name-body" ).slideToggle( "slow", function() {
		// Animation complete.
	});
	$( ".festival-barr .layout--threecol-section--33-34-33" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
  $( "#block-bumbum-theme-registrobogota .field--name-field-titulo" ).on( "click", function(e) {
	e.preventDefault();
    e.stopPropagation();
	$( "#block-bumbum-theme-registrobogota .layout--twocol-section--33-67" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
  $("#block-bumbum-theme-registrobarranquilla .layout--twocol-section--33-67").css("display","none"); 
  $( "#block-bumbum-theme-registrobarranquilla .field--name-field-titulo" ).on( "click", function(e) {
	e.preventDefault();
    e.stopPropagation();
	$( "#block-bumbum-theme-registrobarranquilla .layout--twocol-section--33-67" ).slideToggle( "slow", function() {
		// Animation complete.
	});
  });
  $( "#block-bumbum-theme-mapabogota .field--name-field-titulo" ).on( "click", function(e) {
	e.preventDefault();
    e.stopPropagation();
	$( "#block-bumbum-theme-mapabogota .field--name-field-contenedor-del-mapa" ).slideToggle( "slow", function() {
		map.invalidateSize();
		// Animation complete.
	});
  });
  $( "#block-bumbum-theme-mapabarranquilla .field--name-field-titulo" ).on( "click", function(e) {
	e.preventDefault();
    e.stopPropagation();
	$( "#block-bumbum-theme-mapabarranquilla .field--name-field-contenedor-del-mapa" ).slideToggle( "slow", function() {
		map2.invalidateSize();
		// Animation complete.
	});
  });
  $(".subtitle-faq").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".body-faq").slideUp(400);
			$(".subtitle-faq").removeClass("accordion-active");
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.fa-solid',this).toggleClass('fa-angle-down').toggleClass('fa-angle-up');
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
	  768: {
        items: 2
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
			
  const marker2 = L.marker([4.7340226, -74.0306629]).on('click', onMapClick2).on('mouseover', onMouseOver2).addTo(map);
  
  const marker3 = L.marker([4.7552907, -74.064655]).on('click', onMapClick3).on('mouseover', onMouseOver3).addTo(map);
			
  const marker4 = L.marker([4.6040186, -74.1185642]).on('click', onMapClick4).on('mouseover', onMouseOver4).addTo(map);
  
  const marker5 = L.marker([10.9857615, -74.798878]).on('click', onMapClick5).on('mouseover', onMouseOver5).addTo(map2);
		
  const marker6 = L.marker([10.9927769, -74.7903845]).on('click', onMapClick6).on('mouseover', onMouseOver6).addTo(map2);
	
  const marker7 = L.marker([10.9883733, -74.7815225]).on('click', onMapClick7).on('mouseover', onMouseOver7).addTo(map2);
		
  var popup = L.popup();
  var tooltip = L.tooltip();
  var popup2 = L.popup();
  var tooltip2 = L.tooltip();
  function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Biblioteca%20P%C3%BAblica%20Julio%20Mario%20Santo%20Domingo%20-%20Foto%20Juan%20Diego%20Castillo.jpg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Biblioteca P&uacute;blica Julio Mario Santo Domingo</h3><div class='info-pop-lugar'><div><p>El 6 de agosto, en la Biblioteca del Centro Cultural, habr&aacute; talleres de ilustraci&oacute;n y un teatrino del programa Teatropedia, que permitir&aacute; conocer m&aacute;s de las artes esc&eacute;nicas.</p></div><div><p>ENTRADA GRATUITA</p></div></div><div class='info-descripcion'><span>Agosto 6 de 2023</span><span>2 p.m. a 4:50 p.m.</span><span>Calle 170 # 67-51</span></div><div class='redes-lugar'><a href='https://www.biblored.gov.co/bibliotecas/biblioteca-julio-mario'><i class='fa-solid fa-earth-americas'></i></a><a href='https://www.facebook.com/BibloRedBogota/'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/bibloredbogota/'><i class='fa-brands fa-instagram'></i></a><a href='https://twitter.com/BiblioredBogota'><i class='fa-brands fa-twitter'></i></a><a href='https://www.youtube.com/channel/UCZSYoAl6dw3ws76sPKydLaw'><i class='fa-brands fa-youtube'></i></a><a href='https://www.tiktok.com/@bibloredbogota'><i class='fa-brands fa-tiktok'></i></a></div></div></div></div>")
		.openOn(map);
  }
  function onMapClick2(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Cinemateca%20al%20Parque%20-%20Foto%20Cinemateca%20de%20Bogota.jpg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Cinemateca al Parque - Usaqu&eacute;n</h3><div class='info-pop-lugar'><div><p>El Bum Bum Festival estar&aacute; en Cinemateca al Parque - Usaqu&eacute;n. El 12 de agosto tendr&aacute; un carrito de crispetas en el Parque Altablanca para que los asistentes vivan lo mejor del arte en escena.</p></div><div><p>ENTRADA GRATUITA</p></div></div><div class='info-descripcion'><span>12 de agosto</span><span>2 p.m. a 6 p.m.</span><span>Parque Altablanca – Carrera 8 con Calle 158</span></div><div class='redes-lugar'><a href='https://cinematecadebogota.gov.co/'><i class='fa-solid fa-earth-americas'></i></a><a href='https://www.facebook.com/CinematecaBta'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/cinematecabta/'><i class='fa-brands fa-instagram'></i></a><a href='https:/twitter.com/CinematecaBta'><i class='fa-brands fa-twitter'></i></a><a href='https://www.youtube.com/channel/UCFX_Iqa0P4Skjyov1nckjIQ'><i class='fa-brands fa-youtube'></i></a></div></div></div></div>")
		.openOn(map);
  }
  function onMapClick3(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Parque%20San%20Jos%C3%A9%20de%20Bavaria%20-%20Foto%20Germ%C3%A1n%20Gonz%C3%A1lez.JPG' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Parque San Jos&eacute; de Bavaria</h3><div class='info-pop-lugar'><div><p>Una semana previa al Festival, el 20 de agosto, todos los vecinos del escenario principal podr&aacute;n reunirse para pintar un mural comunitario que ser&aacute; protagonista en las presentaciones.</p></div><div><p>ENTRADA GRATUITA</p></div></div><div class='info-descripcion'><span>20 de agosto de 2023</span><span>De 8 a.m. a 6 p.m.</span><span>Carrera 68 con Calle 169</span></div><div class='redes-lugar'></div></div></div></div>")
		.openOn(map);
  }
  function onMapClick4(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Al%20parque%20con%20mi%20pa%20-%20Foto%20Nidos%20-%20Idartes.jpg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Festival Al Parque con mi Pa</h3><div class='info-pop-lugar'><div><p>En el Festival Al Parque con mi Pa, del programa Nidos – IDARTES, el Bum Bum Festival estará presente con una actividad de tatuajes artísticos para los asistentes.</p></div><div><p>ENTRADA GRATUITA</p></div></div><div class='info-descripcion'><span>30 de julio de 2023</span><span>Horario por confirmar</span><span>Parque Ciudad Montes: Calle 10 Sur # 39-29</div><div class='redes-lugar'><a href='https://museocarnavaldebarranquilla.org/'><i class='fa-solid fa-earth-americas'></i></a><a href='https://www.facebook.com/carnavalbaq/'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/museocarnavalbq/'><i class='fa-brands fa-instagram'></i></a><a href='https://twitter.com/Carnaval_SA'><i class='fa-brands fa-twitter'></i></a></div></div></div></div>")
		.openOn(map);
  }
  function onMapClick5(e) {
	popup2
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/La%20Cueva%20-%20Foto%20La%20Cueva.jpg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Fundaci&oacute;n La Cueva</h3><div class='info-pop-lugar'><div><p>El 12 de agosto habr&aacute; un recorrido a trav&eacute;s de los recuerdos del Grupo de Barranquilla, El 26 de agosto, se construir&aacute; un mural comunitario que luego ser&aacute; protagonista en la fecha principal del Festival.</p></div><div><p>ENTRADA GRATUITA</p></div></div><div class='info-descripcion'><span>12 y 26 de agosto de 2023</span><span>11 a.m. a 5 p.m.</span><span>Carrera 43 # 59-03</span></div><div class='redes-lugar'><a href='https://fundacionlacueva.org/'><i class='fa-solid fa-earth-americas'></i></a><a href='https://www.facebook.com/fundlacueva'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/fundlacueva'><i class='fa-brands fa-instagram'></i></a><a href='https://twitter.com/FundLaCueva'><i class='fa-brands fa-twitter'></i></a><a href='https://www.youtube.com/channel/UC8OplhgOuRomkAhqh70pO7w'><i class='fa-brands fa-youtube'></i></a></div></div></div></div>")
		.openOn(map2);
  }
  function onMapClick6(e) {
	popup2
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Museo%20del%20Carnaval%20-%20Foto%20Alcald%C3%ADa%20de%20Barranquilla.jpeg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Museo del Carnaval</h3><div class='info-pop-lugar'><div><p>El Museo del Carnaval de Barranquilla tendr&aacute; el 19 de agosto un d&iacute;a de museo abierto con un taller de danza y un recorrido con gu&iacute;as especializados. &iexcl;Una inmersi&oacute;n en los ritmos del Caribe&#33;</p></div><div><p>ENTRADA GRATUITA</p></div></div><div class='info-descripcion'><span>19 de Agosto de 2023</span><span>10 a.m. a 5 p.m.</span><span>Carrera 54 # 49B - 39</span></div><div class='redes-lugar'><a href='https://museocarnavaldebarranquilla.org/'><i class='fa-solid fa-earth-americas'></i></a><a href='https://www.facebook.com/carnavalbaq/'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/museocarnavalbq/'><i class='fa-brands fa-instagram'></i></a><a href='https://twitter.com/Carnaval_SA'><i class='fa-brands fa-twitter'></i></a></div></div></div></div>")
		.openOn(map2);
  }
  function onMapClick7(e) {
	popup2
		.setLatLng(e.latlng)
		.setContent("<div class='info-lugar'><img src='https://qa.bumbumfest.org/sites/default/files/2023-07/CLENA%20-%20Foto%20CLENA.jpg' style='width:100%;max-width:300px;max-height:80px;object-fit:cover'><div class='cont-info-lugar'><div><h3>Complejo Cultural de la Antigua Aduana – CLENA</h3><div class='info-pop-lugar'><div><p>M&uacute;sicas Nuevas Sonoridades, la Biblioteca Piloto y las fundaciones Luneta y Chukuwata llevan al CLENA danza contempor&aacute;nea, t&iacute;teres, un p&iacute;cnic literario y experiencias gastron&oacute;micas.</p></div><div><p>ENTRADA GRATUITA</p></div></div><div class='info-descripcion'><span>5 de agosto de 2023</span><span>De 4 p.m. a 8 p.m.</span><span>V&iacute;a 40 # 36-135 – Plaza de la Aduana</span></div><div class='redes-lugar'><a href='https://clena.org/complejo-aduana/'><i class='fa-solid fa-earth-americas'></i></a><a href='https://www.facebook.com/CorporacionLuisEduardoNietoArteta/'><i class='fa-brands fa-facebook-f'></i></a><a href='https://www.instagram.com/clenacorp/'><i class='fa-brands fa-instagram'></i></a><a href='https://www.youtube.com/@clenacorp'><i class='fa-brands fa-youtube'></i></a></div></div></div></div>")
		.openOn(map2);
  }
  function onMouseOver(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Biblioteca%20P%C3%BAblica%20Julio%20Mario%20Santo%20Domingo%20-%20Foto%20Juan%20Diego%20Castillo.jpg'>")
		.openOn(map);
  }
  function onMouseOver2(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Cinemateca%20al%20Parque%20-%20Foto%20Cinemateca%20de%20Bogota.jpg'>")
		.openOn(map);
  }
  function onMouseOver3(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Parque%20San%20Jos%C3%A9%20de%20Bavaria%20-%20Foto%20Germ%C3%A1n%20Gonz%C3%A1lez.JPG'>")
		.openOn(map);
  }
  function onMouseOver4(e) {
	tooltip
		.setLatLng(e.latlng)
		.setContent("<img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Al%20parque%20con%20mi%20pa%20-%20Foto%20Nidos%20-%20Idartes.jpg'>")
		.openOn(map);
  }
  function onMouseOver5(e) {
	tooltip2
		.setLatLng(e.latlng)
		.setContent("<img src='https://qa.bumbumfest.org/sites/default/files/2023-07/La%20Cueva%20-%20Foto%20La%20Cueva.jpg'>")
		.openOn(map2);
  }
  function onMouseOver6(e) {
	tooltip2
		.setLatLng(e.latlng)
		.setContent("<img src='https://qa.bumbumfest.org/sites/default/files/2023-07/Museo%20del%20Carnaval%20-%20Foto%20Alcald%C3%ADa%20de%20Barranquilla.jpeg'>")
		.openOn(map2);
  }
  function onMouseOver7(e) {
	tooltip2
		.setLatLng(e.latlng)
		.setContent("<img src='https://qa.bumbumfest.org/sites/default/files/2023-07/CLENA%20-%20Foto%20CLENA.jpg'>")
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