<?php get_header(); ?>
<?php while(have_posts()) : the_post(); ?>
    <div class="subhead bg"<?php
        $heading_color = get_field('heading_color');
        if($heading_color){
            $h_font_color = "";
            if( $heading_color == '696C6F' || $heading_color == '8C8384'  || $heading_color == '8C9685'   || $heading_color == '84868D'){
                $h_font_color =  " color:#f9faee;";
            }
            echo ' style="background-color:#' . $heading_color. ';' . $h_font_color . '"';
        }
    ?>>
        <div class="wrap">
            <h1><?php the_title(); ?></h1>
            <h4 class="font-secondary"><?php echo the_field('subheading'); ?></h4>
        </div>
    </div>
    <div class="main">
        <div class="wrap">
            <div class="g-3-1">
                <div class="gi g3 service cf">
                    <?php get_template_part('partials/content', 'service'); ?>

                    <?php 
                    
                    if(have_rows('expandables')): ?>
                      
                        <div class="expandables">

                       <?php while(has_sub_field('expandables')): ?>
                            <h4 class="trigger"><a href="#"><?php the_sub_field('title'); ?></a></h4>
                            <div class="toggle_container">
                                <?php the_sub_field('content'); ?>
                            </div>
                        <?php endwhile; ?>

                        </div>
                                          
                    <?php endif; ?>
                </div>
                <div class="gi g1">
                    <?php get_sidebar(); ?>
                </div>
            </div>
        </div><!-- end wrap -->
    </div><!-- end main -->
<?php endwhile; ?>
<?php get_footer(); ?>