<?php get_header(); ?>
<section id="single_archivo" class="single_page">
<?php
	if(have_posts()):
		while(have_posts()):
			the_post(); ?>
			<div class="single_post_container">
				<?php
					if(has_post_thumbnail()):
						the_post_thumbnail('rect_mid');
					endif; ?>

				<h1 class="single_title archivo_single_title fjalla_font"><?php the_title(); ?></h1>
				<!-- interior-single -->
				<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8411953701698334" data-ad-slot="4918078474" data-ad-format="auto" data-full-width-responsive="true"></ins>
				<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
				<div class="single_post_data time_author_info">
					<time class="post_data_item"><?php echo get_the_date('D d, m Y', $post->ID); ?></time>
					<span class="post_data_item"> - Por: <strong><?php echo get_the_author_link(); ?></strong></span>
				</div>
				<div class="single_content archivo_single_content">
					<?php the_content(); ?>
				</div>
			</div>
<?php
		endwhile;
	endif; ?>
</section>

<?php get_footer(); ?>
