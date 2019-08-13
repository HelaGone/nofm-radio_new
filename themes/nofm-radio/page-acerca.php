<?php
	/*
	Template name: acerca
	*/
	get_header();
	if(have_posts()): ?>
		<section id="about" class="">
		<?php	
			while(have_posts()):
				the_post(); ?>
				<h1><?php the_title(); ?></h1>
				

		<?php
		endwhile; ?>
		</section>
<?php
	endif; ?>

<?php get_footer(); ?>