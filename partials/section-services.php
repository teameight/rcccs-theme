<div class="services g-2up">
    <?php
        $args = array(
            'post_type' => 'service',
            'numberposts' => '-1',
            'order' => 'ASC'
        );
        $services = get_posts($args);

        $len = count($services);

        $firsthalf = array_slice($services, 0, round($len / 2));
        $secondhalf = array_slice($services, round($len / 2));

    ?>
    <div class="gi">
        <?php foreach($firsthalf as $service) : ?>
        <li>
            <a href=""><h4><?php echo $service->post_title; ?></h4></a>
            <h5 class="subheading"><?php the_field('subheading', $service->ID); ?></h5>
        </li>
        <?php endforeach; ?>
    </div>
    <div class="gi">
        <?php foreach($secondhalf as $service) : ?>
            <li>
                <a href=""><h4><?php echo $service->post_title; ?></h4></a>
                <h5 class="subheading"><?php the_field('subheading', $service->ID); ?></h5>
            </li>
        <?php endforeach; ?>
    </div>
</div>