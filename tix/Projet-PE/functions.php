<?php
function crenaux_html(array $creneaux, array $jours)
{
    for ($i = 0; $i < count($creneaux); $i++) {
        echo "Horraires de $jours[$i] : <br>";
    }
}
