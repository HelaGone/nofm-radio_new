<?php get_header(); 
	global $wp_query;
	/*
	 * Los podcasts no necesitan estar ordenados por programa. 
	 * En el archivo de los programas, están los podcasts ordenados por programa
	*/
	if(have_posts()): 
		$type = $wp_query->queried_object->label; 
		$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big';
		$attach = bt_get_imageby_id(31621, $img_size); ?>
		<section id="archive_episodios" class="archive_section_wrapper container">
			<figure class="fig_object type_figure">
				<img src="<?php echo $attach; ?>" alt="category cover">
				<figcaption class="fig_caption">
					<h1 class="fig_title"><?php echo esc_html($type); ?></h1>
				</figcaption>
			</figure>
			<ul class="episode_list container">
				<?php
					while(have_posts()):
						the_post();
						$show_id = get_post_meta($post->ID, '_episodio_show', true);
						$programa = get_post($show_id); 
						$image_size = (wp_is_mobile()) ? 'rect_mid' : 'rect_big'; ?>
						<li class="episode_item">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr(get_post_meta(get_post_thumbnail_id($post->ID), '_wp_attachment_image_alt', true)); ?>">
								<?php the_post_thumbnail($image_size); ?>
							</a>
							<div class="ep_info">
								<h2>
									<a href="<?php the_permalink(); ?>" rel="follow" title="<?php echo esc_attr($post->post_title); ?>"><?php the_title(); ?></a>
								</h2>
								<h3>
									<a href="<?php echo get_the_permalink($programa->ID); ?>" rel="follow" title="<?php echo esc_attr($programa->post_title); ?>"><?php echo esc_html($programa->post_title); ?></a>
								</h3>
								<time><?php echo get_the_date('D, d.m.Y'); ?></time>
							</div>
						</li>
				<?php		
					endwhile; ?>
			</ul>
		</section>
<?php
		echo bt_print_pagination();
	endif; ?>
<?php get_footer(); ?>