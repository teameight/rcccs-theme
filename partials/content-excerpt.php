<?php $postcat = get_the_category($post->ID); $cat = get_category(reset($postcat)); ?>
<li class="cf">
    <div class="block block-headline">
        <time datetime="<?php the_time('c'); ?>" class="<?php echo $cat->slug; ?>"><?php the_time('F j, Y'); ?></time>
        <a href="<?php echo get_category_link($cat); ?>" class="cat <?php echo $cat->slug; ?>"><?php echo $cat->name; ?></a>
        <a href="<?php the_permalink(); ?>"><h2 class="alpha <?php echo $cat->slug; ?>"><?php the_title(); ?></h2></a>
    </div>
    <?php the_excerpt(); ?>
    <a href="<?php the_permalink(); ?>" class="more">Read More &gt;&gt;</a>
</li>
