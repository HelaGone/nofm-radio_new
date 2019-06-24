<?php get_header(); global $wp_query; ?>

<section id="single_section" class="single_page">
	<?php
		if(have_posts()):
			while(have_posts()):
				the_post(); ?>
				<article class="single_post_container">
					<div class="article_header">
						<h1 class="single_title"><?php the_title(); ?></h1>
						<div class="single_post_data">
							<?php echo bt_print_term_cloud($post->ID, ); ?>
							<time class="post_data_item"><?php echo get_the_date('D, d.m.Y'); ?></time>
						</div>
					</div>
					<div class="article_content">
						<?php the_content(); ?>
					</div>
				</article>
	<?php
			endwhile;
		endif; ?>

	<?php //get_sidebar(); ?>

</section>
<?php get_footer(); ?>