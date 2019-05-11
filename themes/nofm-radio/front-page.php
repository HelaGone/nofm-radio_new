<?php get_header(); ?>

<section id="home_section">

	<figure id="envivo_figure" class="fig_object">
		<img class="day_main_background" src="<?php echo esc_url(bt_get_imageby_id(30967, 'square_small')); ?>" alt="EN VIVO">
		<figcaption class="fig_caption">
			<img class="logo_day" src="">
			<div>
				<h1 class="fig_title">EN<br/>VIVO</h1>
				<button class="btn_play_live"></button>
			</div>
		</figcaption>
	</figure>

</section>

<?php get_template_part('templates/barra', 'a'); ?>
<?php get_template_part('templates/barra', 'b'); ?>
<?php get_template_part('templates/barra', 'c'); ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>