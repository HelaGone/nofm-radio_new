<?php get_header(); global $wp_query; ?>
<section id="section_tag" class="section_tag">
<?php
	if(have_posts()):
		$tag_name = $wp_query->query_vars['tag'];
		$tag_name_clean = str_replace('-', ' ', $tag_name);?>
		<h2 class="section_title fjalla_font"><?php echo esc_html( strtoupper($tag_name_clean) ); ?></h2>
		<div class="posts_pool">
		<?php 
			while(have_posts()):
				the_post(); 
				$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big'; 
				$type = (get_post_type($post->ID) != 'post') ? true : false; ?>
				<figure class="fig_object">
					<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
						<?php (has_post_thumbnail()) ? the_post_thumbnail($img_size) : ''; ?>
					</a>
					<figcaption class="fig_caption">
						<?php echo ($type) ? '<span><a href="'.get_post_type_archive_link(get_post_type($post->ID)).'">'.strtoupper(get_post_type($post->ID)).'</a></span>' : ''; ?>
						<h2 class="fig_title fjalla_font">
							<a href="<?php the_permalink();?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php the_title(); ?>
							</a>
						</h2>
						<time><?php echo get_the_date('D, d.m.Y'); ?></time>
					</figcaption>
				</figure>
		<?php
			endwhile; ?>
		</div>
<?php			
	endif; ?>
</section>
<?php 
	echo bt_print_pagination();
	get_footer(); ?>