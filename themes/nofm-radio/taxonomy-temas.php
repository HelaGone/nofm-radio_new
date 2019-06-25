<?php get_header(); 
	global $wp_query;
	if(have_posts()): 
		$type = $wp_query->queried_object;
		$img_size = (wp_is_mobile()) ? 'square_mid' : 'rect_big';
		$attach = bt_get_imageby_id(31717, $img_size); ?>
		<section id="tax_temas" class="archive_section_wrapper container">
			<figure class="fig_object type_figure">
				<img src="<?php echo $attach; ?>" alt="category cover">
				<figcaption class="fig_caption">
					<h1 class="fig_title"><?php echo esc_html($type->name); ?></h1>
				</figcaption>
			</figure>
			<ul class="taxonomy_list container">
				<?php
					while(have_posts()):
						the_post();
						$image_size = (wp_is_mobile()) ? 'rect_mid' : 'rect_big'; ?>
						<li class="taxonomy_list_item">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr(get_post_meta(get_post_thumbnail_id($post->ID), '_wp_attachment_image_alt', true)); ?>">
								<?php the_post_thumbnail($image_size); ?>
							</a>
							<div class="item_info">
								<h2>
									<a href="<?php the_permalink(); ?>" rel="follow" title="<?php echo esc_attr($post->post_title); ?>"><?php the_title(); ?></a>
								</h2>
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