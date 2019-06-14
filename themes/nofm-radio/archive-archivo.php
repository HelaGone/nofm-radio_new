<?php get_header(); global $wp_query; 
	$type = ucfirst($wp_query->query['post_type']); ?>
<section id="section_archivo">
	<h1><?php echo esc_html($type); ?></h1>
	<ul class="archivo_list">
		<?php
			if(have_posts()):
				while(have_posts()):
					the_post(); ?>
						<li class="archivo_item">
							<time><strong><?php echo esc_html(get_the_date()); ?></strong></time>
							<h2><?php the_title(); ?></h2>
							<?php the_excerpt(); ?>
						</li>
		<?php
				endwhile;
			endif; ?>
	</ul>
	<?php echo bt_print_pagination(); ?>
</section>

<?php get_footer(); ?>