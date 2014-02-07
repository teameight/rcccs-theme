<div class="services g-2up">
    <?php
        $args = array(
            'post_type' => 'service',
            'numberposts' => '-1',
            'order' => 'ASC',
            'orderby' => 'menu_order'
        );
        $services = get_posts($args);

        $len = count($services);

        $firsthalf = array_slice($services, 0, round($len / 2));
        $secondhalf = array_slice($services, round($len / 2));

    ?>
    <div class="gi">
        <?php foreach($firsthalf as $service) :
            $id = $service->ID;
            $link = (get_field('external_link_radio', $id) == 'yes' ? get_field('link_url', $id) : get_post_permalink($id));
            ?>
            <li>
                <a href="<?php echo $link; ?>"><h4><?php echo $service->post_title; ?></h4>
                <h5 class="subheading"><?php the_field('subheading', $service->ID); ?></h5></a>
            </li>
        <?php endforeach; ?>
    </div>
    <div class="gi">
        <?php foreach($secondhalf as $service) :
            $id = $service->ID;
            $link = (get_field('external_link_radio', $id) == 'yes' ? get_field('link_url', $id) : get_post_permalink($id));
            ?>
            <li>
                <a href="<?php echo $link; ?>"><h4><?php echo $service->post_title; ?></h4>
                <h5 class="subheading"><?php the_field('subheading', $service->ID); ?></h5></a>
            </li>
        <?php endforeach; ?>
    </div>
</div>