<?php get_header(); ?>
<section id="section_archivo">
	<ul class="arhivo_list">
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