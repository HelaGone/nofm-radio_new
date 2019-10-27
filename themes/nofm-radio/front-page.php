<?php get_header(); ?>
<section class="self_ad_cotainer">
	<?php echo co_get_nofm_custom_banner(); ?>
</section>
<?php get_template_part('templates/barra', 'noticias'); ?>
<?php get_template_part('templates/barra', 'recomendaciones'); ?>
<?php get_template_part('templates/barra', 'podcasts'); ?>

<?php get_template_part('templates/barra', 'a'); ?>
<?php get_template_part('templates/barra', 'b'); ?>
<?php get_template_part('templates/barra', 'c'); ?>

<?php get_template_part('templates/barra', 'tema'); ?>
<?php //get_sidebar(); ?>
<?php get_footer(); ?>