<?php
// LIMPIAR EL HEADER DE CÓDIGO INNECESARIO ///////////////////////////////////////////
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action( 'wp_head', 'wp_shortlink_wp_head');
	remove_action ('wp_head', 'rsd_link');

	/**
	 * Disable the emoji's
	 */
	function disable_emojis() {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );	
		remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
		remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
		remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
		add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	}
	add_action( 'init', 'disable_emojis' );

	/**
	 * Filter function used to remove the tinymce emoji plugin.
	 * 
	 * @param    array  $plugins  
	 * @return   array             Difference betwen the two arrays
	 */
	function disable_emojis_tinymce( $plugins ) {
		if ( is_array( $plugins ) ) {
			return array_diff( $plugins, array( 'wpemoji' ) );
		} else {
			return array();
		}
	}


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
		// wp_enqueue_script( 'howler', JSPATH.'/howler/dist/howler.js', array('jquery'), null, false );
		// wp_enqueue_script( 'material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', null, false);

		// localize scripts
		wp_localize_script( 'functions', 'ajax_url', admin_url('admin-ajax.php') );

		// styles
		wp_enqueue_style( 'styles', get_stylesheet_uri() );

		//webpack styles
		// wp_enqueue_style('webpack_styles', get_template_directory_uri().'/dist/main.css', array(), '1.0.0');

		//Webpack scripts & styles (Selective enqueue)
		wp_register_script('base-theme-main', get_template_directory_uri().'/dist/main.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-home', get_template_directory_uri().'/dist/home.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-category', get_template_directory_uri().'/dist/category.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-author', get_template_directory_uri().'/dist/author.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-tag', get_template_directory_uri().'/dist/tag.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-archive', get_template_directory_uri().'/dist/archive.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-archive-archivo', get_template_directory_uri().'/dist/archive_archivo.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-archive-programas', get_template_directory_uri().'/dist/archive_programas.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-archive-episodios', get_template_directory_uri().'/dist/archive_episodios.js', array('jquery'), '1.0.0');

		//Taxonomy
		wp_register_script('base-theme-taxonomy-scripts', get_template_directory_uri().'/dist/taxonomy.js', array('jquery'), '1.0.0');

		wp_register_script('base-theme-single', get_template_directory_uri().'/dist/single.js', array('jquery'), '1.0.0');

		wp_register_script('base-theme-archivo', get_template_directory_uri().'/dist/single_archivo.js', array('jquery'), '1.0.0');

		wp_register_script('base-theme-programas', get_template_directory_uri().'/dist/single_programas.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-episodios', get_template_directory_uri().'/dist/single_episodios.js', array('jquery'), '1.0.0');
		wp_register_script('base-theme-page', get_template_directory_uri().'/dist/page.js', array('jquery'), '1.0.0');

		wp_register_script('bx-slider-scripts', 'https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js', array('jquery'), '4.2.12');

		//Load site-wide general styling and scripting
		wp_enqueue_style( 'base-theme-style', get_template_directory_uri() . '/dist/main.css', array(), '1.0.0');
		wp_enqueue_script('base-theme-main');

		if(is_front_page()){
			wp_enqueue_style('base-theme-home-style', get_template_directory_uri().'/dist/home.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-home');
			/*wp_enqueue_style('bx-slider-style', 'https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css', array(), '4.2.12');
			wp_enqueue_script('bx-slider-scripts');*/
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
			//Load archive general styling and scripting
			wp_enqueue_style('base-theme-archive-style', get_template_directory_uri().'/dist/archive.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-archive');
			//Load archive-specific styling and scripting
			if(is_post_type_archive('programas')){
				wp_enqueue_style('base-theme-category-style', get_template_directory_uri().'/dist/archive_programas.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archive-programas');
			}elseif(is_post_type_archive('episodios')){
				wp_enqueue_style('base-theme-category-style', get_template_directory_uri().'/dist/archive_episodios.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archive-episodios');
			}elseif(is_post_type_archive('archivo')){
				wp_enqueue_style('base-theme-category-style', get_template_directory_uri().'/dist/archive_archivo.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archive-archivo');
			}

			if(is_tax()){
				wp_enqueue_style('base-theme-taxonomy-style', get_template_directory_uri().'/dist/taxonomy.css', array(), '1.0.0' );
				wp_enqueue_script('base-theme-taxonomy-scripts');
			}


		}elseif(is_single()){
			//Load single general styling and scripting
			wp_enqueue_style('base-theme-single-style', get_template_directory_uri().'/dist/single.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-single');
			//Load single-specific styling and scripting
			if(is_singular('episodios')){
				wp_enqueue_style('base-theme-episodios-style', get_template_directory_uri().'/dist/single_episodios.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-episodios');
			}elseif(is_singular('podcasts')){
				wp_enqueue_style('base-theme-programas-style', get_template_directory_uri().'/dist/single_programas.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-programas');
			}elseif(is_singular('archivo')){
				wp_enqueue_style('base-theme-archivo-style', get_template_directory_uri().'/dist/single_archivo.css', array(), '1.0.0.' );
				wp_enqueue_script('base-theme-archivo');
			}
		}elseif(is_page()&&!is_front_page()){
			wp_enqueue_style('base-theme-page-style', get_template_directory_uri().'/dist/page.css', array(), '1.0.0.' );
			wp_enqueue_script('base-theme-page');
		}

	});

	function bt_include_custom_jquery() {
		wp_deregister_script('jquery');
		wp_register_script('jquery', 'https://code.jquery.com/jquery-3.4.1.min.js', array(), null, true);
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

	function bt_load_google_fonts(){ ?>
		<script type="text/javascript">
			WebFontConfig = {
				google: {
					families: ['Lora:400,400i,700', 'Nanum+Gothic:300,300,i,400,400i,500,500i,600,600i,700,700i', 'Notable:400', 'Inconsolata:400, 700']
				}
			};

			(function(d){
				var wf = d.createElement('script'), s = d.scripts[0];
				wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
				wf.async = true;
				s.parentNode.insertBefore(wf, s);
			})(document);
		</script>
		<div id="fb-root"></div>
		<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3"></script>
		<script>
			window.twttr = (function(d, s, id) {
		  		var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
		  		if (d.getElementById(id)) return t;
		  		js = d.createElement(s);
		  		js.id = id;
		  		js.src = "https://platform.twitter.com/widgets.js";
		  		fjs.parentNode.insertBefore(js, fjs);

		  		t._e = [];
		  		t.ready = function(f) {
		    		t._e.push(f);
		  		};

		  		return t;
			}(document, "script", "twitter-wjs"));
		</script>
<?php
	}
	add_action('wp_head', 'bt_load_google_fonts');

	/**
	 * Menu Widget
	*/
	function bt_register_custom_menu() {
	  register_nav_menu('main-menu',__( 'Main Menu' ));
	  register_nav_menu('type-menu',__( 'Type Menu' ));
	}
	add_action( 'init', 'bt_register_custom_menu' );

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
		add_image_size( 'rect_big', 1280, 720, true );
		add_image_size( 'rect_mid', 853, 480, true);
		add_image_size( 'rect_small', 420, 236, true );
		add_image_size( 'square_big', 768, 768, true );
		add_image_size( 'square_mid', 420, 420, true );
		add_image_size( 'square_small', 80, 80, true );
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
	if(!validate_file('inc/services.php')){
		require_once('inc/services.php');
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
				$query->set('posts_per_page', 12);
			}

			if(is_post_type_archive('episodios')){
				$query->set('posts_per_page', 9);	
			}

			if(is_category()){
				$query->set('posts_per_page', 7);
				$query->set('post_type', array('post', 'podcasts', 'episodios'));
			}
			
		}
		return $query;
	});

// THE EXECRPT FORMAT AND LENGTH /////////////////////////////////////////////////////

	add_filter('excerpt_length', function($length){
		return 13;
	});

	add_filter('excerpt_more', function(){
		global $post;
		if(!$post){
			return "...";
		}
		
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

	function bt_print_term_cloud($post_id, $taxonomy = 'category'){
		$terms = get_the_terms( $post_id, $taxonomy );
		$html = '<div class="term_pool">';
		if($terms&&!is_wp_error($terms)){
			foreach($terms as $key => $term){
				$html .= '<span><a href="'.get_term_link($term->term_id, $taxonomy).'">'.esc_html($term->name).'</a></span>';
			}
		}
		$html .= '</div>';
		return $html;
	}

	function register_rest_images(){
	    register_rest_field( array('post'),
	        'fimg_url',
	        array(
	            'get_callback'    => 'get_rest_featured_image',
	            'update_callback' => null,
	            'schema'          => null,
	        )
	    );
	}
	add_action('rest_api_init', 'register_rest_images' );
	
	function get_rest_featured_image( $object, $field_name, $request ) {
	    if( $object['featured_media'] ){
	        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
	        return $img[0];
	    }
	    return false;
	}

	/**
	 * Regresa la url del attachment especificado
	 * @param  int     $post_id
	 * @param  string  $size
	 * @return string  url de la imagen
	 */
	function bt_post_attachment_image_url($post_id, $size){
		$image_id   = get_post_thumbnail_id($post_id);
		$image_data = wp_get_attachment_image_src($image_id, $size, true);
		echo isset($image_data[0]) ? $image_data[0] : '';
	}

	/**
	 * Regresa la url del attachment de la publicación 
	 * especificando POST ID & TAMAÑO
	 * @param  int     $att_id
	 * @param  string  $size
	 * @return string  url de la imagen
	 */
	function bt_get_imageby_id($att_id, $size){
		$image_data = wp_get_attachment_image_src($att_id, $size, true);
		return isset($image_data[0]) ? $image_data[0] : '';
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
			'mid_size'  => 2,
			'type'      => 'list',
		);
		return paginate_links($args);
	}

	/*
	 * Seconds to Human readable format
	*/
	function bt_seconds_to_human_readable($secs){
		return gmdate("H:i:s", $secs);
	}

	/**
	 * COVER OPTIONS
	 * co_banner_option
	 * co_barra_a_option
	 * co_barra_b_option
	 * co_barra_c_option
	*/
	function bt_get_co_posts($option_bar = 'co_barra_a_option'){
		$ft_posts = get_option($option_bar);
		$posts_object = array();
		if(is_array($ft_posts)&&!empty($ft_posts)){
			foreach($ft_posts as $key => $post_id){
				if($post_id != 0){
					$post = get_post($post_id);
					array_push($posts_object, $post);
				}
			}
		}
		return $posts_object;
	}

	/**
	 * COVER OPTIONS
	 * co_barra_temas_option 
	*/
	function bt_get_co_tema_posts($option_bar = 'co_barra_temas_option'){
		$tema_posts = get_option($option_bar);
		$posts_object = array();
		if(is_array($tema_posts)&&!empty($tema_posts)){
			foreach ($tema_posts as $key => $_id) {
				if($key == 'co_select_tema'){
					$term = get_term($_id);
					array_push($posts_object, $term);
				}else{
					$post = get_post($_id);
					array_push($posts_object, $post);
				}
			}
		}
		return $posts_object;
	}

	/**
	 * Filter Restricted Site Access to allow REST API requests.
	 * @param bool $is_restricted Whether access is restricted.
	 * @param object $wp The WordPress object.
	 * @return bool Whether access should be restricted.
	 */
	function bt_unrestrict_rest_api( $is_restricted, $wp ) {

	    if ( ! empty( $wp->query_vars['rest_route'] ) ) {
	        return false;
	    }

	    return $is_restricted;
	}
	add_filter( 'restricted_site_access_is_restricted', 'bt_unrestrict_rest_api', 10, 2 );

	/*
	 *  Resister rest route for ReactApp
	*/
	function register_feed_api(){
	  	register_rest_route('react/v2','/desigualdad/', array('methods'=>'GET','callback'=>'bt_feed_for_react'));
	  	register_rest_route('react/v2','/glosario/', array('methods'=>'GET','callback'=>'bt_feed_for_react_glosario'));
	}
	add_action('rest_api_init', 'register_feed_api');


	/**
	 * Get posts by post type & category
	 * @param $input_type [String] post type to query 
	 * @param $input_cat [String] post category to query
	 * @return $posts [Array] returns an array of posts
	 * Used in template parts at home
	*/
	function bt_get_posts_by_categ($input_type, $input_cat){
		$args = array(
			'post_type'=>$input_type,
			'post_status'=>'publish',
			'posts_per_page'=>4,
			'orderby'=>'date',
			'order'=>'DESC'
		);

		$categ = ($input_cat) ? $args['category_name'] = $input_cat : '';
		$posts = new WP_Query($args);
		return $posts;
	}