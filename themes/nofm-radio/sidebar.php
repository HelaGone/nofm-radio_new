<?php global $wp_query, $post; ?>

<?php 
	$type = $wp_query->query_vars['post_type'];
	$from_same_podcast;
	$sidebar_title;
	$args = array('post_type'=>$type,'post_status'=>'publish','posts_per_page'=>13,'orderby'=>'date','order'=>'DESC','post__not_in'=>array($post->ID));
	if($type != 'episodios'):
		$cat_obj = get_the_category($wp_query->queried_object->ID);
		$args['cat'] = $cat_obj[0]->term_id;
		$sidebar_title = $cat_obj[0]->name;
		// debugger($sidebar_title);
		$from_same_podcast = new WP_Query($args);
	else:
		$podcast_id = get_post_meta($post->ID, '_episodio_show', true);
		$sidebar_title = get_the_title($podcast_id);
		// debugger($podcast_id);
		$args['meta_value'] = $podcast_id;
		$from_same_podcast = new WP_Query($args); 
	endif;

	if($from_same_podcast->have_posts()): ?>
		<aside class="sidebar">
			<h2 class="fjalla_font">
				<a href="<?php echo get_permalink($podcast_id); ?>">
					<?php echo strtoupper('MÁS DE ESTO: '.$sidebar_title); ?>
				</a>
			</h2>
			<ul class="sidebar_list">
		<?php
			while($from_same_podcast->have_posts()):
				$from_same_podcast->the_post();
				setup_postdata($post);
				$sidebar_img_size = (wp_is_mobile()) ? 'thumbnail' : 'square_mid'; ?>
				<li id="<?php echo esc_attr('episode_'.$post->ID) ?>" class="sidebar_list_item">
					<figure class="fig_object">
						<a href="<?php the_permalink(); ?>">
							<?php (has_post_thumbnail()) ? the_post_thumbnail($sidebar_img_size) : '' ?>
						</a>
						<figcaption class="fig_caption">
							<h3 class="fig_title fjalla_font">
								<a href="<?php the_permalink(); ?>">
									<?php the_title(); ?>
								</a>
							</h3>
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