<?php

// CUSTOM POST TYPES /////////////////////////////////////////////////////////////////

	add_action('init', function(){

		// ARCHIVO
		$labels = array(
			'name'          => 'Archivo',
			'singular_name' => 'Archivo',
			'add_new'       => 'Nuevo Archivo',
			'add_new_item'  => 'Nuevo Archivo',
			'edit_item'     => 'Editar Archivo',
			'new_item'      => 'Nuevo Archivo',
			'all_items'     => 'Todos',
			'view_item'     => 'Ver Archivo',
			'search_items'  => 'Buscar Archivo',
			'not_found'     => 'No se encontro',
			'menu_name'     => 'Archivo'
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_rest'		 => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'archivo' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 4,
			'menu_icon'			 => 'dashicons-archive',
			'taxonomies'         => array(),
			'supports'           => array( 'title', 'editor', 'custom-fields' )
		);
		register_post_type( 'archivo', $args );

		// Programas
		$labels = array(
			'name'          => 'Programas',
			'singular_name' => 'Programa',
			'add_new'       => 'Nuevo Programa',
			'add_new_item'  => 'Nuevo Programa',
			'edit_item'     => 'Editar Programa',
			'new_item'      => 'Nuevo Programa',
			'all_items'     => 'Todos',
			'view_item'     => 'Ver Programa',
			'search_items'  => 'Buscar Programa',
			'not_found'     => 'No se encontro',
			'menu_name'     => 'Programas'
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_rest'		 => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'programas' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 5,
			'menu_icon'			 => 'dashicons-microphone',
			'taxonomies'         => array( 'category', 'post_tag' ),
			'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' )
		);
		register_post_type( 'programas', $args );

		// Podcasts
		$labels = array(
			'name'          => 'Podcasts',
			'singular_name' => 'Podcast',
			'add_new'       => 'Nuevo Podcast',
			'add_new_item'  => 'Nuevo Podcast',
			'edit_item'     => 'Editar Podcast',
			'new_item'      => 'Nuevo Podcast',
			'all_items'     => 'Todos',
			'view_item'     => 'Ver Podcast',
			'search_items'  => 'Buscar Podcast',
			'not_found'     => 'No se encontro',
			'menu_name'     => 'Podcasts'
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_rest'		 => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'podcasts' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 6,
			'menu_icon'			 => 'dashicons-megaphone',
			'taxonomies'         => array('proyecto', 'category'),
			'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields', 'excerpt')
		);
		register_post_type( 'podcasts', $args );

		// Glosario
		$labels = array(
			'name'          => 'Glosario',
			'singular_name' => 'Glosario',
			'add_new'       => 'Nuevo Glosario',
			'add_new_item'  => 'Nuevo Glosario',
			'edit_item'     => 'Editar Glosario',
			'new_item'      => 'Nuevo Glosario',
			'all_items'     => 'Todos',
			'view_item'     => 'Ver Glosario',
			'search_items'  => 'Buscar Glosario',
			'not_found'     => 'No se encontro',
			'menu_name'     => 'Glosario'
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_rest'		 => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'glosario' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 7,
			'menu_icon'			 => 'dashicons-playlist-audio',
			'taxonomies'         => array(),
			'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields', 'excerpt')
		);
		register_post_type( 'glosario', $args );
	});