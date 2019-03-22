<?php

// DEFINIR LOS PATHS A LOS DIRECTORIOS DE JAVASCRIPT Y CSS ///////////////////////////

	define( 'JSPATH', get_template_directory_uri() . '/js/' );
	define( 'CSSPATH', get_template_directory_uri() . '/css/' );
	define( 'THEMEPATH', get_template_directory_uri() . '/' );
	define( 'SITEURL', site_url('/') );

// FRONT END SCRIPTS AND STYLES //////////////////////////////////////////////////////

	add_action( 'wp_enqueue_scripts', function(){

		// scripts
		wp_enqueue_script( 'plugins', JSPATH.'plugins.js', array('jquery'), null, false );
		wp_enqueue_script( 'functions', JSPATH.'functions.js', array('jquery'), null, false );

		// localize scripts
		wp_localize_script( 'functions', 'ajax_url', admin_url('admin-ajax.php') );

		// styles
		wp_enqueue_style( 'styles', get_stylesheet_uri() );

		//webpack styles
		// wp_enqueue_style('webpack_styles', get_template_directory_uri().'/dist/main.css', array(), '1.0.0');

		//Webpack scripts & styles (Selective enqueue)
		wp_register_script('base-theme-main', get_template_directory_uri().'/dist/main.js', array(), '1.0.0');
		wp_register_script('base-theme-home', get_template_directory_uri().'/dist/home.js', array(), '1.0.0');
		wp_register_script('base-theme-category', get_template_directory_uri().'/dist/category.js', array(), '1.0.0');
		wp_register_script('base-theme-author', get_template_directory_uri().'/dist/author.js', array(), '1.0.0');
		wp_register_script('base-theme-tag', get_template_directory_uri().'/dist/tag.js', array(), '1.0.0');
		wp_register_script('base-theme-archive', get_template_directory_uri().'/dist/archive.js', array(), '1.0.0');
		wp_register_script('base-theme-archive-archivo', get_template_directory_uri().'/dist/archive_archivo.js', array(), '1.0.0');
		wp_register_script('base-theme-archive-podcasts', get_template_directory_uri().'/dist/archive_podcasts.js', array(), '1.0.0');
		wp_register_script('base-theme-archive-programas', get_template_directory_uri().'/dist/archive_programas.js', array(), '1.0.0');
		wp_register_script('base-theme-single', get_template_directory_uri().'/dist/single.js', array(), '1.0.0');
		wp_register_script('base-theme-single', get_template_directory_uri().'/dist/single_programas.js', array(), '1.0.0');
		wp_register_script('base-theme-single', get_template_directory_uri().'/dist/single_podcasts.js', array(), '1.0.0');

		if(is_front_page()){
			wp_enqueue_style('base-theme-home-style', get_template_directory_uri().'/dist/home.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-home');
		}elseif(is_author()){
			wp_enqueue_style('base-theme-author-style', get_template_directory_uri().'/dist/author.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-author');
		}elseif(is_tag()){
			wp_enqueue_style('base-theme-tag-style', get_template_directory_uri().'/dist/tag.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-tag');
		}elseif(is_category()){
			wp_enqueue_style('base-theme-category-style', get_template_directory_uri().'/dist/category.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-category');
		}elseif(is_archive()){
			if(is_post_type_archive('programas')){
				wp_enqueue_style('base-theme-category-style', get_template_directory_uri().'/dist/archive_programas.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archive-programas');
			}elseif(is_post_type_archive('podcasts')){
				wp_enqueue_style('base-theme-category-style', get_template_directory_uri().'/dist/archive_programas.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archive-podcasts');
			}elseif(is_post_type_archive('archivo')){
				wp_enqueue_style('base-theme-category-style', get_template_directory_uri().'/dist/archive_archivo.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archive-archivo');
			}else{
				wp_enqueue_style('base-theme-archive-style', get_template_directory_uri().'/dist/archive.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archive');
			}
		}elseif(is_single()){
			wp_enqueue_style('base-theme-single-style', get_template_directory_uri().'/dist/single.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-single');
		}else{
			wp_enqueue_style( 'base-theme-style', get_template_directory_uri() . '/dist/main.css', array(), '1.0.0');
			wp_enqueue_script('base-theme-main');
		}

	});

	function bt_include_custom_jquery() {

		wp_deregister_script('jquery');
		wp_register_script('jquery', 'https://code.jquery.com/jquery-3.2.1.min.js', array(), null, true);
		wp_enqueue_script('jquery');

	}

	add_action('wp_enqueue_scripts', 'bt_include_custom_jquery');


// ADMIN SCRIPTS AND STYLES //////////////////////////////////////////////////////////

	add_action( 'admin_enqueue_scripts', function(){

		// scripts
		wp_enqueue_script( 'admin-js', JSPATH.'admin.js', array('jquery'), '1.0', true );

		// localize scripts
		wp_localize_script( 'admin-js', 'ajax_url', admin_url('admin-ajax.php') );

		// styles
		wp_enqueue_style( 'admin-css', CSSPATH.'admin.css' );

	});

	/**
	 * Menu Widget
	*/
	function bt_custom_new_menu() {
	  register_nav_menu('my-custom-menu',__( 'My Custom Menu' ));
	}
	add_action( 'init', 'bt_custom_new_menu' );

// CAMBIAR EL CONTENIDO DEL FOOTER EN EL DASHBOARD ///////////////////////////////////

	add_filter( 'admin_footer_text', function() {
		echo 'Creado por <a href="https://cubeinthebox.com">Cubeinthebox®</a>. ';
		echo 'Powered by <a href="http://www.wordpress.org">WordPress</a>';
	});

// POST THUMBNAILS SUPPORT ///////////////////////////////////////////////////////////


	function bt_setup_theme_supported_features() {
		if ( function_exists('add_theme_support') ){
			add_theme_support('post-thumbnails');
			add_theme_support( 'align-wide' );
			add_theme_support('editor-styles');
			add_theme_support( 'wp-block-styles' );
			add_editor_style( 'style-editor.css' );

	    /*add_theme_support( 'editor-color-palette', 
	    	array(
	        array(
	            'name' => __( 'strong magenta', 'themeLangDomain' ),
	            'slug' => 'strong-magenta',
	            'color' => '#a156b4',
	        ),
	        array(
	            'name' => __( 'light grayish magenta', 'themeLangDomain' ),
	            'slug' => 'light-grayish-magenta',
	            'color' => '#d0a5db',
	        ),
	        array(
	            'name' => __( 'very light gray', 'themeLangDomain' ),
	            'slug' => 'very-light-gray',
	            'color' => '#eee',
	        ),
	        array(
	            'name' => __( 'very dark gray', 'themeLangDomain' ),
	            'slug' => 'very-dark-gray',
	            'color' => '#444',
	      	)
	      )
	    );*/
		}
	}
	add_action( 'after_setup_theme', 'bt_setup_theme_supported_features' );

	/**
	 * [add_image_size] 
	 * Define custom image sizes for wordpress media images
	*/
	if ( function_exists('add_image_size') ){
		// add_image_size( 'poster_big', 570, 380, true );
		// add_image_size( 'poster', 300, 200, true );
	}

// POST TYPES, METABOXES, TAXONOMIES AND CUSTOM PAGES ////////////////////////////////

	if(!validate_file('inc/post-types.php')){
		require_once('inc/post-types.php');
	}
	if(!validate_file('inc/metaboxes.php')){
		require_once('inc/metaboxes.php');
	}
	if(!validate_file('inc/taxonomies.php')){
		require_once('inc/taxonomies.php');
	}
	if(!validate_file('inc/pages.php')){
		require_once('inc/pages.php');
	}
	
// MODIFICAR EL MAIN QUERY ///////////////////////////////////////////////////////////

	add_action( 'pre_get_posts', function($query){
		if ( $query->is_main_query() and ! is_admin() ) {
			//30 posts para el archivo
			if(is_post_type_archive('archivo')){
				$query->set('posts_per_page', 30);
			}

			if(is_post_type_archive('programas')){
				$query->set('orderby', 'name');
				$query->set('order', 'ASC');
			}
			// $query->set( 'cat', '123' );
		}
		return $query;
	});

// THE EXECRPT FORMAT AND LENGTH /////////////////////////////////////////////////////

	add_filter('excerpt_length', function($length){
		return 13;
	});

	add_filter('excerpt_more', function(){
		global $post;
		$permalink = get_the_permalink($post->ID);
		$title = $post->post_title;
		return "<a href='$permalink' title='$title' class='li-link'></a>";
	});

// REMOVE ACCENTS AND THE LETTER Ñ FROM FILE NAMES ///////////////////////////////////

	add_filter( 'sanitize_file_name', function ($filename) {
		$filename = str_replace('ñ', 'n', $filename);
		return remove_accents($filename);
	});

// HELPER METHODS AND FUNCTIONS //////////////////////////////////////////////////////

	/**
	 * Imprime una lista separada por commas de todos los terms asociados al post id especificado
	 * los terms pertenecen a la taxonomia especificada. Default: Category
	 *
	 * @param  int     $post_id
	 * @param  string  $taxonomy
	 * @return string
	 */
	function bt_print_the_terms($post_id, $taxonomy = 'category'){
		$terms = get_the_terms( $post_id, $taxonomy );

		if ( $terms and ! is_wp_error($terms) ){
			$names = wp_list_pluck($terms ,'name');
			echo implode(', ', $names);
		}
	}

	/**
	 * Regresa la url del attachment especificado
	 * @param  int     $post_id
	 * @param  string  $size
	 * @return string  url de la imagen
	 */
	function bt_attachment_image_url($post_id, $size){
		$image_id   = get_post_thumbnail_id($post_id);
		$image_data = wp_get_attachment_image_src($image_id, $size, true);
		echo isset($image_data[0]) ? $image_data[0] : '';
	}

	/*
	 *	Get attachment data
	 *	alt, caption, description, href, src, title
	 *	usage:
	 *	$attachment_meta = bt_get_attachment(your_attachment_id);
	*/
	function bt_get_attachment( $attachment_id ) {
		$attachment = get_post( $attachment_id );
		return array(
		    'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
		    'caption' => $attachment->post_excerpt,
		    'description' => $attachment->post_content,
		    'href' => get_permalink( $attachment->ID ),
		    'src' => $attachment->guid,
		    'title' => $attachment->post_title
		);
	}

	/**
	 * Custom pagination
	*/
	function bt_print_pagination(){
		global $wp_query;
		$big  = 999999999; // need an unlikely integer
		$total = $wp_query->max_num_pages;
		$args = array(
			'base'      => str_replace( $big, '%#%', esc_url(get_pagenum_link($big)) ),
			'current'   => max( 1, get_query_var('paged') ),
			'prev_next' => true,
			'prev_text' => __('&lt;'),
			'next_text' => __('&gt'),
			'total'     => $total,
			'mid_size'  => 3,
			'type'      => 'list',
		);
		return paginate_links($args);
	}