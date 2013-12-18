<?php
get_header();

if( have_posts() ) : while( have_posts() ) :

the_post();

?>
    <div class="main">
        <div class="wrap">
            <div class="g-3-1">
                <div class="gi g3">
                    <?php the_content(); ?>
                </div>
                <div class="gi g1"></div>
            </div>
        </div>
    </div><!--End main-->

<?php endwhile; endif;
get_footer();
?>