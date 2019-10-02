<?php
	/**
	 * Objeto para la aplicación de REACT
	*/
	function bt_feed_for_react($post){
	    $post_package = array();
	    $args = array(
	            'post_type'=>array('podcasts'),
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
	        $medium = get_the_post_thumbnail_url($post->ID, 'medium');
	        $large = get_the_post_thumbnail_url($post->ID, 'large');
	        $thumbnail = get_the_post_thumbnail_url($post->ID, 'thumbnail');
	        $post_item = array(
	            'r_id'=>$post->ID,
	            'r_date'=>$post->post_date,
	            'r_name'=>$post->post_title,
	            'r_content'=>apply_filters('the_content', $post->post_content),
	            'r_thumbnails'=> array(
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
	            	'_episodio_url'=>get_post_meta($post->ID, '_podcasts_url', true),
	            	'_episodio_show'=>get_post_meta($post->ID, '_podcasts_show', true),
	            	'_episodio_duration'=>get_post_meta($post->ID, '_podcasts_duration', true)
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
	        $medium = get_the_post_thumbnail_url($post->ID, 'medium');
	        $large = get_the_post_thumbnail_url($post->ID, 'large');
	        $thumbnail = get_the_post_thumbnail_url($post->ID, 'thumbnail');
	        $post_item = array(
	            'r_id'=>$post->ID,
	            'r_date'=>$post->post_date,
	            'r_name'=>$post->post_title,
	            'r_content'=>apply_filters('the_content', $post->post_content),
	            'r_thumbnails'=> array(
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
	            	'_episodio_url'=>get_post_meta($post->ID, '_podcasts_url', true),
	            	'_episodio_show'=>get_post_meta($post->ID, '_podcasts_show', true),
	            	'_episodio_duration'=>get_post_meta($post->ID, '_podcasts_duration', true)
	            )
	        );
	        array_push($post_package, $post_item);
	    }
	    return $post_package;
	}

	function bt_feed_for_react_radio($data){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "http://s2.voscast.com:8162/7.html");
		curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		$data = curl_exec($ch);
		curl_close($ch);

		$data = str_replace('</body></html>', "", $data);
		$split = explode(',', $data); 

		$artist_name = '';
		$album_name = '';
		$track_name = '';

		$titles = "";

		if (empty($split[6])) { 
			$titles = ["The current song is not available "];
		} else {
			//print_r($split);
			$fullTitle = $split[6];
			$splited = explode(' - ', $fullTitle);
			$titles = $splited;
		}

		$last_title = "";
		foreach($titles as $title){
			html_entity_decode($title);
		}

		return array("title" => html_entity_decode(join(", ", $titles)));
	}