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
			'show_in_rest'		 	 => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'archivo' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 4,
			'taxonomies'         => array( 'category' ),
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
			'show_in_rest'		   => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'programas' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 5,
			'taxonomies'         => array(  ),
			'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' )
		);
		register_post_type( 'programas', $args );

		// Episodios
		$labels = array(
			'name'          => 'Episodios',
			'singular_name' => 'Episodio',
			'add_new'       => 'Nuevo Episodio',
			'add_new_item'  => 'Nuevo Episodio',
			'edit_item'     => 'Editar Episodio',
			'new_item'      => 'Nuevo Episodio',
			'all_items'     => 'Todos',
			'view_item'     => 'Ver Episodio',
			'search_items'  => 'Buscar Episodio',
			'not_found'     => 'No se encontro',
			'menu_name'     => 'Episodios'
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_rest'		   => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'episodios' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 6,
			'taxonomies'         => array( 'proyecto' ),
			'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' )
		);
		register_post_type( 'episodios', $args );

	});