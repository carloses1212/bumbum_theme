<?php

/**
 * @file
 * Custom setting for Bum Bum theme.
 */

function bumbum_form_system_theme_settings_alter(&$form, &$form_state) {
  $form['bumbum_theme'] = [
    '#type'       => 'vertical_tabs',
    '#title'      => '<h3>' . t('Ajustes del tema Bum Bum') . '</h3>',
    '#default_tab' => 'general',
  ];

  /**
   * Main Tabs.
   */

  // Main Tabs -> General.
  $form['general'] = [
    '#type'  => 'details',
    '#title' => t('General'),
    '#description' => t('<h3>Gracias por usar el Theme del Bum Bum Fest</h3>'),
    '#group' => 'bumbum_theme',
  ];

  // Main Tabs -> Social.
  $form['social'] = [
    '#type'  => 'details',
    '#title' => t('Social'),
    '#description' => t('Configuración de iconos sociales. Estos iconos aparecen en la región del pie de página.'),
    '#group' => 'bumbum_theme',
  ];

  // Main Tabs -> Homepage Slider.
  $form['slider'] = [
    '#type'  => 'details',
    '#title' => t('Homepage Slider'),
    '#description' => t('Administrar el Slider de la pagina Inicial.'),
    '#group' => 'bumbum_theme',
  ];

  // Main Tabs -> Header.
  $form['header'] = [
    '#type'  => 'details',
    '#title' => t('Header'),
    '#group' => 'bumbum_theme',
  ];

  // Main Tabs -> Sidebar.
  $form['sidebar'] = [
    '#type'  => 'details',
    '#title' => t('Barra lateral'),
    '#group' => 'bumbum_theme',
  ];

  // Main Tabs -> Content.
  $form['content'] = [
    '#type'  => 'details',
    '#title' => t('Contenido'),
    '#group' => 'bumbum_theme',
  ];

  // Main Tabs -> Footer.
  $form['footer'] = [
    '#type'  => 'details',
    '#title' => t('Pie de página'),
    '#group' => 'bumbum_theme',
  ];
  // Insert codes
  $form['insert_codes'] = [
    '#type'  => 'details',
    '#title' => t('Insertar códigos'),
    '#group' => 'bumbum_theme',
  ];
 
  // Settings under social tab.
  // Show or hide all icons.
  $form['social']['social_profile'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Perfil Social'),
  ];
  $form['social']['social_profile']['all_icons'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Mostrar iconos sociales'),
  ];

  $form['social']['social_profile']['all_icons']['all_icons_show'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Mostrar íconos sociales en el pie de página'),
    '#default_value' => theme_get_setting('all_icons_show', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para mostrar iconos sociales en el pie de página. Desmarque para ocultar."),
  ];

  // Facebook.
    $form['social']['social_profile']['facebook'] = [
    '#type'        => 'details',
    '#title'       => t("Facebook"),
  ];

  $form['social']['social_profile']['facebook']['facebook_url'] = [
    '#type'          => 'textfield',
    '#title'         => t('Facebook Url'),
    '#description'   => t("Ingrese su perfil de Facebook o la URL de la página. Deje el campo de URL en blanco para ocultar este icono."),
    '#default_value' => theme_get_setting('facebook_url', 'bumbum_theme'),
  ];

  // Twitter.
  $form['social']['social_profile']['twitter'] = [
    '#type'        => 'details',
    '#title'       => t("Twitter"),
  ];

  $form['social']['social_profile']['twitter']['twitter_url'] = [
    '#type'          => 'textfield',
    '#title'         => t('Twitter Url'),
    '#description'   => t("Ingrese la URL de su página de Twitter. Deje el campo de URL en blanco para ocultar este icono."),
    '#default_value' => theme_get_setting('twitter_url', 'bumbum_theme'),
  ];

  // Instagram.
  $form['social']['social_profile']['instagram'] = [
    '#type'        => 'details',
    '#title'       => t("Instagram"),
  ];

  $form['social']['social_profile']['instagram']['instagram_url'] = [
    '#type'          => 'textfield',
    '#title'         => t('Instagram Url'),
    '#description'   => t("Ingrese la URL de su página de Instagram. Deje el campo de URL en blanco para ocultar este icono."),
    '#default_value' => theme_get_setting('instagram_url', 'bumbum_theme'),
  ];

  // YouTube.
  $form['social']['social_profile']['youtube'] = [
    '#type'        => 'details',
    '#title'       => t("YouTube"),
  ];

  $form['social']['social_profile']['youtube']['youtube_url'] = [
    '#type'          => 'textfield',
    '#title'         => t('YouTube Url'),
    '#description'   => t("Introduce la URL de tu página de youtube.com. Deje el campo de URL en blanco para ocultar este icono."),
    '#default_value' => theme_get_setting('youtube_url', 'bumbum_theme'),
  ];

  // Settings under slider tab.
  // Show or hide slider on homepage.
  $form['slider']['slider_enable_option'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Habilitar Slider'),
  ];

  $form['slider']['slider_enable_option']['slider_show'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Mostrar Slider en la página de inicio'),
    '#default_value' => theme_get_setting('slider_show', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para mostrar el Slider en la página de inicio. Desmarque para ocultar."),
  ];

  /* Slider Image upload */
  $form['slider']['slider_image_section'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Imagen de fondo del Slider<hr />'),
  ];
  $form['slider']['slider_image_section']['slider_image'] = [
    '#type'          => 'managed_file',
    '#upload_location' => 'public://',
    '#upload_validators' => array(
      'file_validate_extensions' => array('gif png jpg jpeg svg webp'),
    ),
    '#title'  => t('<p>Subir imagen del Slider de la página de inicio</p>'),
    '#default_value'  => theme_get_setting('slider_image', 'bumbum_theme'),
  ];
  $form['slider']['slider_code'] = [
    '#type'          => 'textarea',
    '#title'         => t('Codigo del Slider'),
    '#default_value' => theme_get_setting('slider_code', 'bumbum_theme'),
    '#description'   => t('Cada slide debe estar encerrada en la etiqueta <li>'),
  ];
  // Settings under header tab.
  $form['header']['circle_style'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Círculos animados sólidos o de borde'),
    '#description'   => t('Seleccione el tipo de círculos animados de encabezado. Puede establecer círculos de borde o círculos sólidos.'),
  ];
  $form['header']['circle_style']['circle_type'] = [
    '#type'          => 'select',
    '#title'         => t(''),
    '#options' => array(
      'circle_border' => t('Borde'),
      'circle_solid' => t('Solido'),),
    '#default_value' => theme_get_setting('circle_type', 'bumbum_theme'),
    '#description'   => t(''),
  ];
  
  // Settings under sidebar.
  $form['sidebar']['front_sidebars'] = [
    '#type'          => 'fieldset',
    '#title'         => t('Homepage Sidebar'),
  ];
  $form['sidebar']['front_sidebars']['front_sidebar'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Show Sidebars On Homepage'),
    '#default_value' => theme_get_setting('front_sidebar', 'bumbum_theme'),
    '#description'   => t('Check this option to enable left and right sidebar on homepage.'),
  ];
  
  // Settings under content tab -> Font Icons.
  $form['content']['font_icons'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Font Icons'),
    '#description'   => t(''),
  ];

  // Settings under content tab -> Font Icons -> FontAwesome
  $form['content']['font_icons']['font_icon_fontawesome'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Font Awesome 4'),
    '#default_value' => theme_get_setting('font_icon_fontawesome', 'bumbum_theme'),
    '#description'   => t('Marque esta opción para habilitar los iconos de fuente FontAwesome 4.7. Desmarque para deshabilitar.<br /><br />Visite la página de <a href="https://fontawesome.com/v4.7.0/icons/" target="_blank">iconos</a>.<br /><br /><hr /><br />'),
  ];
  
  // Settings under content tab -> Font Icons -> Google Material Icons
  $form['content']['font_icons']['font_icon_material'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Google Material Font Icons'),
    '#default_value' => theme_get_setting('font_icon_material', 'bumbum_theme'),
    '#description'   => t('Marque esta opción para habilitar los íconos de fuentes de Google Material. Desmarque para deshabilitar.<br /><br /><br />Visite la página de <a href="https://fonts.google.com/icons" target="_blank">iconos</a>.'),
  ];


  // Show user picture in comment.
  $form['content']['comment'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Comentario'),
  ];

  $form['content']['comment']['comment_user_pic'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Imagen de usuario en los comentarios'),
    '#default_value' => theme_get_setting('comment_user_pic', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para mostrar la imagen del usuario en el comentario. Desmarque para ocultar."),
  ];

  // Node author picture.
  $form['content']['node'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Nodo'),
  ];

  $form['content']['node']['node_author_pic'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Imagen del autor del nodo'),
    '#default_value' => theme_get_setting('node_author_pic', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para mostrar la imagen del autor del nodo en los detalles enviados. Desmarque para ocultar."),
  ];

  // Show tags in node submitted.
  $form['content']['node']['node_tags'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Etiquetas de nodo'),
    '#default_value' => theme_get_setting('node_tags', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para mostrar etiquetas de nodo (si las hay) en los detalles enviados. Desmarque para ocultar."),
  ];

  // Settings under footer tab.
  // Scroll to top.
  $form['footer']['scrolltotop'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Vuelve al comienzo'),
  ];

  $form['footer']['scrolltotop']['scrolltotop_on'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Habilitar la función de desplazamiento a la parte superior.'),
    '#default_value' => theme_get_setting('scrolltotop_on', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para habilitar la función de desplazamiento a la parte superior. Desmarque para deshabilitar esta función y ocultar el icono de desplazamiento hacia arriba."),
  ];

  // Footer -> Copyright.
  $form['footer']['copyright'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Texto de copyright del sitio web'),
  ];

  $form['footer']['copyright']['copyright_text'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Mostrar texto de derechos de autor del sitio web en el pie de página.'),
    '#default_value' => theme_get_setting('copyright_text', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para mostrar el texto de derechos de autor del sitio web en el pie de página. Desmarque para ocultar."),
  ];

  // Footer -> Cookie message.
  $form['footer']['cookie']['cookie_message'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Mostrar mensaje de consentimiento de cookies'),
    '#description'   => t('Haga que su sitio web cumpla con la ley de cookies. De acuerdo con la ley de cookies, los sitios web deben obtener el consentimiento de los visitantes para almacenar o recuperar cookies.'),
  ];
  /**
   * Insert Codes
   */
  $form['insert_codes']['insert_codes_tab'] = [
    '#type'  => 'vertical_tabs',
  ];
  // Insert Codes -> Head
  $form['insert_codes']['head'] = [
    '#type'        => 'details',
    '#title'       => t('Head'),
    '#description' => t('<h3>Insertar códigos antes de &lt;/HEAD&gt;</h3><hr />'),
    '#group' => 'insert_codes_tab',
  ];
  // Insert Codes -> Body
  $form['insert_codes']['body'] = [
    '#type'        => 'details',
    '#title'       => t('Body'),
    '#group' => 'insert_codes_tab',
  ];
  // Insert Codes -> CSS
  $form['insert_codes']['css'] = [
    '#type'        => 'details',
    '#title'       => t('CSS Codes'),
    '#group'       => 'insert_codes_tab',
  ];
  
  // Insert Codes -> css
  $form['insert_codes']['css']['custom'] = [
    '#type'        => 'fieldset',
    '#title'       => t('Estilo personalizado'),
  ];

  $form['insert_codes']['css']['custom']['styling'] = [
    '#type'          => 'checkbox',
    '#title'         => t('Habilitar css personalizado'),
    '#default_value' => theme_get_setting('styling', 'bumbum_theme'),
    '#description'   => t("Marque esta opción para habilitar el estilo personalizado. Desmarque para deshabilitar esta función."),
  ];

  $form['insert_codes']['css']['custom']['styling_code'] = [
    '#type'          => 'textarea',
    '#title'         => t('Códigos CSS personalizados'),
    '#default_value' => theme_get_setting('styling_code', 'bumbum_theme'),
    '#description'   => t('Ingrese sus códigos CSS personalizados en este cuadro de texto. Puede usarlo para personalizar la apariencia de su sitio.'),
  ];
// End form.
}
