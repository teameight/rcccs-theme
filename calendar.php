<?php
/* Template Name: Calendar Page */
get_header();

if( have_posts() ) : while( have_posts() ) :

the_post();

?>
    <div class="main">
        <div class="wrap">
            <div class="g-3-1">
                <?php edit_post_link(); ?>
                <div class="gi g3">
                    <?
                    $rows = get_field('events');
                    if($rows)
                    {
                    echo '<table id="servicestbl"><tbody>';
                        echo '<tr><th colspan="2"><h2>'.get_the_title().'</h2></th></tr>';
                        $time = mktime(0, 0, 0, date('n'), date('j') - 1);
                        $i = 1;
                        $break = get_field('display_number');
                        function sortFunction( $a, $b ) {
                        return strtotime($a["date"]) - strtotime($b["date"]);
                        }
                        usort($rows, "sortFunction");
                        foreach($rows as $row)
                        {
                        $date = strtotime($row['date']);
                        $event = $row['event'];
                        if($date > $time && $event)
                        { ?>
                        <tr>
                            <td><?php echo (!empty($row['link']) ? '<a href="'.$row["link"].'">'.$event.'</a>' : $event); ?></td>
                            <td><?php echo date('F j, Y', $date); ?></td>
                        </tr>
                        <?php
                        }
                        if($i++ == $break) break;
                        }
                        echo '</tbody></table>';
                    }
                    ?>
                </div>
                <div class="gi g1">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    </div><!--End main-->

<?php endwhile; endif;
get_footer();
?>