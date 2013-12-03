<?php
/*
 Template Name: Contact
*/
get_header(); ?>
<?php while(have_posts()) : the_post(); ?>
    <?php
//    $mission = get_field('mission_statement');
//    $philosophy = get_field('philosophy');
//    $history = get_field('history');
//    $args = array(
//        'post_type' => 'staff',
//        'numberposts' => -1
//    );
//    $staff = get_posts($args);
    ?>
    <div class="g-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12657.675043716987!2d-77.44276890000013!3d37.5216248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1110bc1051e4b%3A0x2c2d35afd93b34b1!2sriver+city+ccs!5e0!3m2!1sen!2sus!4v1386031689904" width="1400" height="650" frameborder="0" style="border:0"></iframe>    </div>
    <div class="main">
        <div class="wrap">
        </div><!-- end wrap -->
    </div><!-- end main -->
    <div class="section">
        <div class="wrap">
        </div>
    </div>
<?php endwhile; ?>
<?php get_footer(); ?>