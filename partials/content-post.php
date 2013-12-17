<li class="cf">
    <time datetime="<?php the_time('c'); ?>" class="<?php echo (!empty($cat) ? $cat->slug : ''); ?>"><?php the_time('F j, Y'); ?></time>
    <h2 class="alpha <?php echo $cat->slug; ?>"><?php the_title(); ?></h2>

    <?php the_content(); ?>
</li>