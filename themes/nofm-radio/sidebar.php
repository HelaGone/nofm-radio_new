<?php global $wp_query; ?>

<?php 
	$type = $wp_query->query_vars['post_type'];
	$from_same_podcast;
	$args = array('post_type'=>$type,'post_status'=>'publish','posts_per_page'=>7,'orderby'=>'date','order'=>'DESC',);
	if($type != 'episodios'):
		$from_same_podcast = new WP_Query($args);
	else:
		$podcast_id = get_post_meta($post->ID, '_episodio_show', true);
		$args['meta_value'] = $podcast_id;
		$from_same_podcast = new WP_Query($args); 
	endif;

	if($from_same_podcast->have_posts()): ?>
		<aside class="sidebar">
			<h2><?php echo strtoupper(get_the_title($podcast_id)); ?></h2>
			<span>Más episodios</span>
			<ul>
		<?php
			while($from_same_podcast->have_posts()):
				$from_same_podcast->the_post();
				the_title();
				setup_postdata($post); 
				$sidebar_img_size = (wp_is_mobile()) ? 'thumbnail' : 'medium'; ?>
				<li id="<?php echo esc_attr('episode_'.$post->ID) ?>">
					<figure class="fig_object">
						<?php (has_post_thumbnail()) ? the_post_thumbnail($sidebar_img_size) : '' ?>
						<figcaption class="fig_caption">
							<h2 class="fig_title"><?php the_title(); ?></h2>
						</figcaption>
					</figure>
				</li>
		<?php
			endwhile;
	wp_reset_postdata();?>
			</ul>
		</aside>
<?php
	endif;
?>