<?php

// TAXONOMIES ////////////////////////////////////////////////////////////////////////

	add_action( 'init', 'custom_taxonomies_callback', 0 );

	function custom_taxonomies_callback(){

		// PROYECTOS
		if( ! taxonomy_exists('proyecto')){
			$labels = array(
				'name'              => 'Proyectos',
				'singular_name'     => 'Proyecto',
				'search_items'      => 'Buscar',
				'all_items'         => 'Todos',
				'edit_item'         => 'Editar Proyecto',
				'update_item'       => 'Actualizar Proyecto',
				'add_new_item'      => 'Nuevo Proyecto',
				'new_item_name'     => 'Nombre Nuevo Proyecto',
				'menu_name'         => 'Proyectos'
			);

			$args = array(
				'hierarchical'      => true,
				'labels'            => $labels,
				'show_ui'           => true,
				'show_admin_column' => true,
				'show_in_nav_menus' => true,
				'show_in_rest'			=> true,
				'public'						=> true,
				'query_var'         => true,
				'rewrite'           => array( 'slug' => 'proyectos' ),
			);

			register_taxonomy( 'proyecto', 'episodios', $args );
		}
		
		
		// TERMS
		/*if ( ! term_exists( 'some-term', 'autor' ) ){
			wp_insert_term( 'Some term', 'category', array('slug' => 'some-term') );
		}*/

		/* // SUB TERMS CREATION
		if(term_exists('parent-term', 'category')){
			$term = get_term_by( 'slug', 'parent-term', 'category');
			$term_id = intval($term->term_id);
			if ( ! term_exists( 'child-term', 'category' ) ){
				wp_insert_term( 'A child term', 'category', array('slug' => 'child-term', 'parent' => $term_id) );
			}
			
		} */

	}