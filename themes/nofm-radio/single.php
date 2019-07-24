<?php get_header(); global $wp_query; ?>

<section id="single_section" class="single_page">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post(); ?>
				<article class="single_post_container">
					<div class="single_content_wrapper">
						<div class="article_header">
							<h1 class="single_title"><?php the_title(); ?></h1>
							<div class="single_post_data">
								<?php echo bt_print_term_cloud($post->ID, ); ?>
								<time class="post_data_item"><?php echo get_the_date('D, d.m.Y'); ?></time>
							</div>
						</div>
						<?php (wp_is_mobile()) ? the_post_thumbnail('rect_small') : the_post_thumbnail('rect_big'); ?>
						<div class="article_content">
							<?php the_content(); ?>
						</div>
					</div>
				</article>

				<div>
					<button class="close_player_window">CLOSE PLAYER</button>
				</div>
	<?php
			endwhile;
		endif; ?>

	<?php //(wp_is_mobile()) ? '' : get_sidebar(); ?>
</section>
<?php get_footer(); ?>