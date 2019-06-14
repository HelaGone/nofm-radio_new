<?php get_header(); ?>
<section id="single_archivo" class="single_page">
<?php
	if(have_posts()):
		while(have_posts()):
			the_post(); ?>
			<div class="single_post_container">
				<?php 
					if(has_post_thumbnail()):
						the_post_thumbnail();
					endif; ?>
				<h1 class="single_title archivo_single_title"><?php the_title(); ?></h1>
				<div class="single_content archivo_single_content">
					<?php the_content(); ?>
				</div>
			</div>
<?php
		endwhile;
	endif; ?>
</section>

<?php get_footer(); ?>