<?php
/*
 Template Name: About Us
*/
get_header(); ?>
<?php while(have_posts()) : the_post(); ?>
    <?php
        $mission = get_field('mission_statement');
        $philosophy = get_field('philosophy');
        $history = get_field('history');
        $args = array(
            'post_type' => 'staff',
            'numberposts' => -1
        );
        $staff = get_posts($args);
    ?>
    <div class="subhead bg">
        <div class="wrap">
            <h3><?php echo $mission; ?></h3>
        </div>
    </div>
    <div class="main">
        <div class="wrap">
            <div class="g-2up">
                <div class="gi">
                    <?php echo $philosophy; ?>
                </div>
                <div class="gi">
                    <?php echo $history; ?>
                </div>
            </div>
        </div><!-- end wrap -->
    </div><!-- end main -->
    <hr />
    <div class="section">
        <div class="wrap">
            <h3>Who We Are</h3>
            <ul>
            <?php
            foreach($staff as $member) :
                $id = $member->ID;
                $img = get_field('image', $id);
                $name = $member->post_title;
                $degree = get_field('degree', $id);
                $about = $member->post_content;

//                echo var_dump($member);

            echo "<li class='staff-img'>
                    <img src=".$img[sizes][thumbnail]." alt=".$img->alt." />
                    <span>$name<br>$degree</span>
                </li>";

            endforeach; ?>
        </div>
    </div>
<?php endwhile; ?>
<?php get_footer(); ?>