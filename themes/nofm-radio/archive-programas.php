<?php get_header(); 
	if(have_posts()):
		while(have_posts()):
			the_post(); 
			$expire = 300;
			$podcasts = wp_cache_get('podcasts_cache_in_show');
			if($podcasts===false):
				$args = array('post_type'=>'podcasts','posts_per_page'=>3,'post_status'=>'publish','orderby'=>'date','order'=>'DESC','meta_query'=>array(array('key'=>'_podcast_show','value'=>$post->ID,'compare'=>'IN')));
				$podcasts = get_posts($args);
				wp_cache_set('podcasts_cache_in_show', $podcasts, $expire);
			endif; ?>
			<article style="border-bottom:3px solid grey;margin-bottom:16px;padding-bottom:16px;">
				<h2 style="color:tomato;"><?php the_title(); ?></h2>
				<p><?php the_content(); ?></p>
				<?php
					foreach ($podcasts as $podcast): ?>
						<h3><?php echo esc_html($podcast->post_title); ?></h3>
				<?php				
					endforeach; ?>
			</article>
<?php			
		endwhile;
	endif; ?>

<?php get_footer(); ?>