<?php get_header();
		if(have_posts()): ?>
			<div class="player_wrapper">
				<?php
					while(have_posts()):
						the_post();
						the_content();
					endwhile; ?>
			</div>
<?php
		endif;
get_footer(); ?>
