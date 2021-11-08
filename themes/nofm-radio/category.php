<?php get_header(); global $wp_query;

	$category_name = $wp_query->query_vars["category_name"];
	$raw_posts = $wp_query->posts;
	$latest_post_id = $raw_posts[0]->ID;
	$cat_img_size = (wp_is_mobile()) ? 'rect_mid' : 'rect_big';
	$cat_img_url = (has_post_thumbnail()) ? get_the_post_thumbnail_url($latest_post_id, $cat_img_size) : get_template_directory_uri().'/images/logo_nofm.jpg'; ?>

<section class="container category_section">
	<figure id="<?php echo 'fig_'.$latest_post_id ?>" class="type_fig">
		<div class="image_frame">
			<img src="<?php echo esc_url($cat_img_url); ?>" alt="Category Hero Image" width="1280" height="120">
		</div>
		<figcaption class="type_fig_caption">
			<h1 class="type_fig_title">
				<?php echo esc_html($category_name); ?>
			</h1>
		</figcaption>
	</figure>
<?php
	if(have_posts()): ?>
		<div class="grid-container">
			<?php
				while(have_posts()):
					the_post(); 
					$image_size = (wp_is_mobile()) ? 'square_mid' : 'square_big'; ?>
					<figure id="<?php echo 'fig_'.$post->ID ?>" class="cat_fig">
						<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
							<?php echo (has_post_thumbnail()) ? the_post_thumbnail($image_size) : '<img style="width:480px;" width="400" height="400" src="'.get_template_directory_uri().'/images/logo_redondo.png" alt="Default Image">'; ?>
						</a>
						<figcaption class="cat_fig_caption">
							<h2 class="cat_fig_title">
								<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr($post->post_title); ?>">
									<?php the_title(); ?>
								</a>
							</h2>
							<span class="cat_fig_author"><?php echo get_the_author_meta('display_name').'. '; ?></span>
							<time class="cat_fig_date"><?php echo get_the_date('D, d.m.Y'); ?></time>
						</figcaption>
					</figure>
			<?php
				endwhile; ?>
		</div>
<?php
	endif;
	echo bt_print_pagination();
	get_footer(); ?>