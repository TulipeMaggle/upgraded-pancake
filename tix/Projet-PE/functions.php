<?php
function crenaux_html(array $creneaux, array $jours)
{
    for ($i = 0; $i < count($creneaux); $i++) {
        echo "Horraires de $jours[$i] : <br>";
    }
}

function ajouter_une_vue()
{
    if (file_exists("compteur.txt")) {
        $nbvisite = (int)file_get_contents("compteur.txt");
        $nbvisite++;
        file_put_contents("compteur.txt", $nbvisite);
    } else {
        file_put_contents("compteur.txt", 1);
    }
}
