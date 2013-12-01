<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>
    <div class="subhead bg">
        <div class="wrap">
            <h3><?php the_title(); ?></h3>
            <h4 class="font-secondary"><?php echo the_field('subheading'); ?></h4>
        </div>
    </div>
    <div class="main">
        <div class="wrap">
            <div class="g-3-1">
                <div class="gi g3">
                    <?php get_template_part('partials/content', 'service'); ?>
                </div>
                <div class="gi g1">
                    <?php get_sidebar(); ?>
                </div>
            </div>
        </div><!-- end wrap -->
    </div><!-- end main -->
<?php endwhile; ?>
<?php get_footer(); ?>