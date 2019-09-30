<?php get_header(); global $wp_query;

	$category_name = $wp_query->query_vars["category_name"];
	$raw_posts = $wp_query->posts;
	$latest_post_id = $raw_posts[0]->ID;
	$cat_img_size = (wp_is_mobile()) ? 'rect_mid' : 'rect_big';
	$cat_img_url = (has_post_thumbnail()) ? get_the_post_thumbnail_url($latest_post_id, $cat_img_size) : get_template_directory_uri().'/images/logo_nofm.jpg'; ?>

<section class="container category_section">
	<figure id="<?php echo 'fig_'.$latest_post_id ?>" class="fig_object type_figure">
		<img src="<?php echo esc_url($cat_img_url); ?>" alt="Category Hero Image">
		<figcaption class="fig_caption">
			<h2 class="fig_title fjalla_font">
				<?php echo esc_html($category_name); ?>
			</h2>
		</figcaption>
	</figure>
<?php
	if(have_posts()): ?>
		<div class="posts_pool">
			<div class="list_row">
			<?php
				$count = 0;
				while(have_posts()):
					the_post(); 
					if($count < 3):
						$image_size = (wp_is_mobile()) ? 'square_mid' : 'square_big'; ?>
						<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php echo (has_post_thumbnail()) ? the_post_thumbnail($image_size) : '<img style="width:480px;" src="'.get_template_directory_uri().'/images/logo_redondo.png" alt="Default Image">'; ?>
							</a>
							<figcaption class="fig_caption">
								<h2 class="fig_title fjalla_font">
									<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php the_title(); ?>
									</a>
								</h2>
								<span><?php echo get_the_author_meta('display_name').'. '; ?></span>
								<time><?php echo get_the_date('D, d.m.Y'); ?></time>
							</figcaption>
						</figure>
			<?php
						echo ($count == 2) ? '</div><div class="duo_row">' : '';
					elseif($count > 2 && $count < 5):
						$image_size_duo = (wp_is_mobile()) ? 'square_mid' : 'rect_big'; ?>
						<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php echo (has_post_thumbnail()) ? the_post_thumbnail($image_size_duo) : '<img style="width:480px;" src="'.get_template_directory_uri().'/images/logo_redondo.png" alt="Default Image">'; ?>
							</a>
							<figcaption class="fig_caption">
								<h2 class="fig_title fjalla_font">
									<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php the_title(); ?>
									</a>
								</h2>
								<span><?php echo get_the_author_meta('display_name').'. '; ?></span>
								<time><?php echo get_the_date('D, d.m.Y'); ?></time>
							</figcaption>
						</figure>
			<?php
						echo ($count == 4) ? '</div><div class="list_row">' : '';
					else: ?>
						<figure id="<?php echo 'fig_'.$post->ID ?>" class="fig_object">
							<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
								<?php echo (has_post_thumbnail()) ? the_post_thumbnail($image_size) : '<img style="width:480px;" src="'.get_template_directory_uri().'/images/logo_redondo.png" alt="Default Image">'; ?>
							</a>
							<figcaption class="fig_caption">
								<h2 class="fig_title fjalla_font">
									<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
										<?php the_title(); ?>
									</a>
								</h2>
								<span><?php echo get_the_author_meta('display_name').'. '; ?></span>
								<time><?php echo get_the_date('D, d.m.Y'); ?></time>
							</figcaption>
						</figure>
			<?php
					endif;
					$count++;
				endwhile; ?>
			</div>
		</div>
<?php
	endif;
	echo bt_print_pagination();
	get_footer(); ?>