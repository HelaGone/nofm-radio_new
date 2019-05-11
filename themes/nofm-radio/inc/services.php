<?php
	/**
	 * Objeto para la aplicación de REACT
	*/
	function bt_feed_for_react($post){
	    $post_package = array();
	    $args = array(
	            'post_type'=>array('episodios'),
	            'posts_per_page'=>12,
	            'orderby'=>'date',
	            'order'=>'DESC',
	            'tax_query'=>array(
	            		array(
	            			'taxonomy'=>'proyecto',
	            			'field'=>'slug',
	            			'terms'=>'decir-desigualdad'
	            		)
	            	)
	            );
	    $posts = get_posts($args);
	    foreach ($posts as $post) {
	        $square_big = get_the_post_thumbnail_url($post->ID, 'square_big');
	        $square_mid = get_the_post_thumbnail_url($post->ID, 'square_mid');
	        $square_small = get_the_post_thumbnail_url($post->ID, 'square_small');
	        $square_xsmall = get_the_post_thumbnail_url($post->ID, 'square_xsmall');
	        $medium = get_the_post_thumbnail_url($post->ID, 'medium');
	        $large = get_the_post_thumbnail_url($post->ID, 'large');
	        $thumbnail = get_the_post_thumbnail_url($post->ID, 'thumbnail');
	        $post_item = array(
	            'r_id'=>$post->ID,
	            'r_date'=>$post->post_date,
	            'r_name'=>$post->post_title,
	            'r_content'=>wp_strip_all_tags($post->post_content, false),
	            'r_thumbnails'=> array(
	            	'square_xsmall'=>$square_xsmall,
	            	'square_small'=>$square_small,
	            	'square_mid'=>$square_mid,
	            	'square_big'=>$square_big,
	            	'medium'=>$medium,
	            	'large'=>$large,
	            	'thumbnail'=>$thumbnail
	            ),
	            'r_excerpt'=> get_the_excerpt($post->ID),
	            'r_slug'=>get_post_field('post_name', $post->ID, 'raw'),
	            'r_link_to'=>get_the_permalink($post->ID),
	            'r_meta'=>array(
	            	'_episodio_url'=>get_post_meta($post->ID, '_episodio_url', true),
	            	'_episodio_show'=>get_post_meta($post->ID, '_episodio_show', true),
	            	'_episodio_duration'=>get_post_meta($post->ID, '_episodio_duration', true)
	            )
	        );
	        array_push($post_package, $post_item);
	    }
	    return $post_package;
	}

	function bt_feed_for_react_glosario($post){
	    $post_package = array();
	    $args = array('post_type'=>array('glosario'),'posts_per_page'=>12,'orderby'=>'date','order'=>'DESC');
	    $posts = get_posts($args);
	    foreach ($posts as $post) {
	        $square_big = get_the_post_thumbnail_url($post->ID, 'square_big');
	        $square_mid = get_the_post_thumbnail_url($post->ID, 'square_mid');
	        $square_small = get_the_post_thumbnail_url($post->ID, 'square_small');
	        $square_xsmall = get_the_post_thumbnail_url($post->ID, 'square_xsmall');
	        $medium = get_the_post_thumbnail_url($post->ID, 'medium');
	        $large = get_the_post_thumbnail_url($post->ID, 'large');
	        $thumbnail = get_the_post_thumbnail_url($post->ID, 'thumbnail');
	        $post_item = array(
	            'r_id'=>$post->ID,
	            'r_date'=>$post->post_date,
	            'r_name'=>$post->post_title,
	            'r_content'=>wp_strip_all_tags($post->post_content, false),
	            'r_thumbnails'=> array(
	            	'square_xsmall'=>$square_xsmall,
	            	'square_small'=>$square_small,
	            	'square_mid'=>$square_mid,
	            	'square_big'=>$square_big,
	            	'medium'=>$medium,
	            	'large'=>$large,
	            	'thumbnail'=>$thumbnail
	            ),
	            'r_excerpt'=> get_the_excerpt($post->ID),
	            'r_slug'=>get_post_field('post_name', $post->ID, 'raw'),
	            'r_link_to'=>get_the_permalink($post->ID),
	            'r_meta'=>array(
	            	'_episodio_url'=>get_post_meta($post->ID, '_episodio_url', true),
	            	'_episodio_show'=>get_post_meta($post->ID, '_episodio_show', true),
	            	'_episodio_duration'=>get_post_meta($post->ID, '_episodio_duration', true)
	            )
	        );
	        array_push($post_package, $post_item);
	    }
	    return $post_package;
	}