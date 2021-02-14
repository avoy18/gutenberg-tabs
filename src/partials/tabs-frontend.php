<div class="wp-block-tabs">
    <div class="tab">
        <?php

        $cntr = 0;

        if (!empty($attr['tabs'])) : ?>

            <?php foreach ($attr['tabs'] as $tab) : $cntr++; ?>

                <button class="tablinks" onclick="openCity(event, <?php echo $tab['title'] ?>)" id="<?php echo $cntr == 1 ? 'defaultOpen' : ''; ?>">
                    <?php echo $tab['title'] ?>
                </button>

            <?php endforeach; ?>

        <?php endif; ?>

    </div>

    <?php

    if (!empty($attr['tabs'])) : ?>

        <?php foreach ($attr['tabs'] as $tab) : ?>

            <div data-tabname="<?php echo $tab['title'] ?>" class="tabcontent">

                <p><?php echo $tab['text'] ?></p>

            </div>

        <?php endforeach; ?>

    <?php endif; ?>

    <script>
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.querySelector('[data-tabname="' + cityName + '"]').style.display = "block";
            evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
    </script>

</div>