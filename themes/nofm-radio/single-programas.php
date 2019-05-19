<?php 
 get_header();
 if(have_posts()):
 	while(have_posts()):
 		the_post();
		$expire = 300;
		$podcasts = wp_cache_get('podcasts_cache_in_show');
		if($podcasts===false):
			$args = array('post_type'=>'podcasts','posts_per_page'=>3,'post_status'=>'publish','orderby'=>'date','order'=>'DESC','meta_query'=>array(array('key'=>'_podcast_show','value'=>$post->ID,'compare'=>'IN')));
			$podcasts = get_posts($args);
			wp_cache_set('podcasts_cache_in_show', $podcasts, $expire);
		endif; 
	endwhile;
endif;
?>
<?php get_footer(); ?>