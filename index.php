<?php
get_header();

the_post();

?>

<div class="wrap">
    <div class="cycle-slideshow" data-cycle-slides="> div" data-cycle-fx="scrollHorz" data-cycle-easing="easeInOutQuint" data-cycle-speed="1000" data-cycle-pause-on-hover="true">
        <?php
        if(get_field('home_slider')) :
        while(has_sub_field('home_slider')) :
            if(get_row_layout() == 'sm_image') :

                $img = get_sub_field('image');

                echo '<div class="block block-slide-txt">
                    <a href="'.get_sub_field('link').'" class="inner">
                        <div class="slide">
                            <div class="slide-text">
                                <h2 class="headline font-light">'.get_sub_field('text').'</h2>
                            </div>
                            <div class="slide-thumb">
                                <img src="'.$img[sizes][medium].'" alt="'.$img[alt].'">
                            </div>
                        </div>
                    </a>
                </div>';
            elseif(get_row_layout() == 'full_image') :

                $img = get_sub_field('image');
//                echo var_dump($img);

                echo '<div class="block block-slide-img">
                    <a href="'.get_sub_field('link').'" class="inner">
                        <div class="slide">
                            <img src="'.$img[sizes][large].'" alt="'.$img[alt].'" />
                            <div class="slide-text">
                                <h2 class="headline font-light">'.get_sub_field('text').'</h2>
                            </div>
                        </div>
                    </a>
                </div>';
            endif;
        endwhile;
        endif;
        ?>



    </div>
</div>
    <div class="main">
        <div class="wrap">
            <?php the_field('services'); ?>
     		<?php get_template_part('partials/section', 'services'); ?>
        </div>
    </div><!--End main-->
    <div class="bg section">
        <div class="wrap">
            <div class="g-half">
                <div class="gi">
                    <?php the_field('who_we_are'); ?>
                </div>
                <div class="gi">
                    <h2>The Community Blog</h2>
                    <ul class="post-list cycle-slideshow" data-cycle-slides="li" data-cycle-fx="scrollHorz" data-cycle-easing="easeInOutQuint" data-cycle-speed="1000" data-cycle-pause-on-hover="true">
                    <?php
                        $args = array(
                            'category_name'     => 'community',
                            'posts_per_page'    => 5
                        );
                        $query = new WP_Query($args);
                        if($query->have_posts()) : while($query->have_posts()) : $query->the_post();
                            get_template_part( 'partials/content', 'excerpt' );
                        endwhile; endif; wp_reset_query();
                    ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>

<?php
get_footer();
?>